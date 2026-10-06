import type { Route } from './+types/home';
import { useEffect, useState } from 'react';
import { initialCards, initialColumns } from '~/data/initialBoard';
import DialogueBoxAdd from '~/components/AddCardDialogueBox';
import BoardColumn from '~/components/BoardColumn';
import type { Card } from '~/types';
import { DragDropProvider } from '@dnd-kit/react';
import Grainient from '~/components/BackgroundGradient';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  const [openDialogue, setOpenDialouge] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);
  const [cards, setCards] = useState<Card[]>(() => {
    //     How it works
    // saved ? JSON.parse(saved) : initialCards returns the parsed cards if something is saved, and the seed cards on a first visit. The result is returned directly, so there's no leftover data variable.
    // The try/catch handles corrupted text. If JSON.parse throws, the catch returns initialCards and the page doesn't crash.
    // The useEffect with [cards] saves after every change, so add, delete, and anything you build later are covered.
    // The if (saved) check also fixes your TypeScript error, because saved can't be null inside the true branch.
    try {
      const saved = localStorage.getItem('cards');
      return saved ? JSON.parse(saved) : initialCards;
    } catch {
      return initialCards;
    }
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  // We are getting the active column Id from the column
  const handleAddClick = (columnId: string) => {
    setActiveColumnId(columnId);
    setOpenDialouge(true);
  };

  const addCard = (title: string, description: string) => {
    if (activeColumnId !== null && title.trim() !== '') {
      const newCard: Card = {
        title: title.trim(),
        // TODO: trim once
        description:
          description && description.trim() !== ''
            ? description.trim()
            : undefined,
        id: crypto.randomUUID(),
        columnId: activeColumnId,
        createdAt: Date.now(),
      };
      // Adding the cards in local storage
      setCards((prev) => [...prev, newCard]);
    }
  };

  // First I'll need to get the active column Id from the coulmn card
  const handleDeleteClick = (cardId: string) => {
    // So here I'm filtering the cards, I'm returning the previous cards that do not contain this card that I've just taken

    const confirmDelete = window.confirm('Are your sure you wanna do this?');
    if (confirmDelete) {
      setCards((prev) => [...prev.filter((card) => cardId !== card.id)]);
    }
  };

  return (
    // Drag Drop provider gives common space to draggable and droppables
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;
        if (
          event.operation.target === null ||
          event.operation.target === undefined
        )
          return;
        if (
          event.operation.source === null ||
          event.operation.source === undefined
        )
          return;
        // Target Id gives column ID
        const { target } = event.operation;

        // Source Id gives Card ID
        const { source } = event.operation;

        setCards((prev) =>
          prev.map((card) =>
            card.id !== String(source.id)
              ? card
              : { ...card, columnId: String(target.id) },
          ),
        );
      }}
    >
      <div className='h-screen  flex relative  w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-6'>
        {/* List of cards, For now lets make three cards only */}
        {/* Outer cards */}
        <div className='z-0 absolute inset-0'>
          <Grainient
            className='z-0 absolute inset-0'
            color1='#99BDFF'
            color2='#002466'
            color3='#337AFF'
            timeSpeed={0.35}
            colorBalance={0.14}
            warpStrength={4}
            warpFrequency={4.7}
            warpSpeed={1.2}
            warpAmplitude={38}
            blendAngle={-17}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={0.9}
            saturation={1}
            centerX={0.02}
            centerY={0}
            zoom={0.9}
          />
        </div>
        {openDialogue && (
          <DialogueBoxAdd handleSubmit={addCard} setOpen={setOpenDialouge} />
        )}
        <div className='z-1 flex  px-6 h-full w-full justify-around items-center gap-10'>
          {initialColumns.map((el) => (
            <BoardColumn
              key={el.id}
              title={el.title}
              columnId={el.id}
              cards={cards}
              handleAddClick={handleAddClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </DragDropProvider>
  );
}
