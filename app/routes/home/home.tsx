import type { Route } from './+types/home';
import { useState } from 'react';
import { initialCards, initialColumns } from '~/data/initialBoard';
import DialogueBoxAdd from '~/components/AddCardDialogueBox';
import BoardColumn from '~/components/BoardColumn';
import type { Card } from '~/types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  const [openDialogue, setOpenDialouge] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);
  const [cards, setCards] = useState(initialCards);

  const handleAddClick = (columnId: string) => {
    setActiveColumnId(columnId);
    setOpenDialouge(true);
  };

  const addCard = (title: string, description: string) => {
    if (activeColumnId !== null) {
      const newCard: Card = {
        title,
        description,
        id: crypto.randomUUID(),
        columnId: activeColumnId,
        createdAt: Date.now(),
      };
      setCards((prev) => [...prev, newCard]);
    }
  };

  return (
    <div className='h-screen flex relative justify-around items-center gap-10 w-full bg-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-6'>
      {/* List of cards, For now lets make three cards only */}
      {/* Outer cards */}
      {openDialogue && (
        <DialogueBoxAdd
          handleSubmit={addCard}
          activeColumnId={activeColumnId}
          setOpen={setOpenDialouge}
        />
      )}
      {initialColumns.map((el) => (
        <BoardColumn
          key={el.id}
          title={el.title}
          columnId={el.id}
          cards={cards}
          handleAddClick={handleAddClick}
        />
      ))}
    </div>
  );
}
