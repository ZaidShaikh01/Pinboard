import type { Route } from './+types/home';
import { useEffect, useState } from 'react';
import { initialCards, initialColumns } from '~/data/initialBoard';
import BoardColumn from '~/components/BoardColumn';
import type { Card } from '~/types';
import { DragDropProvider } from '@dnd-kit/react';
import DeleteModal from '~/components/ui/delete-modal';
import AddCardModal from '~/components/AddCardDialogueBox';
import CardPeekPanel from '~/components/CardPeekPanel';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pinboard' },
    { name: 'description', content: 'A glassy kanban board for your notes.' },
  ];
}

export default function Home() {
  const [openDialogue, setOpenDialouge] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);
  const [cardToDelete, setCardToDelete] = useState<string | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
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
  // Selecting card which we are goning to show
  const selectedCard = cards.find((card) => card.id === selectedCardId) ?? null;
  const cardPendingDelete =
    cards.find((card) => card.id === cardToDelete) ?? null;

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
    setCardToDelete(cardId);
  };

  const handleCardClick = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  const confirmDelete = () => {
    if (cardToDelete === null) return;
    setCards((prev) => prev.filter((card) => card.id !== cardToDelete));
    if (selectedCardId === cardToDelete) setSelectedCardId(null);
    setCardToDelete(null);
  };

  // Card select

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
      <div className='board-canvas relative flex h-screen w-full flex-col overflow-hidden'>
        <header className='glass-nav z-20 flex h-14 shrink-0 items-center justify-between px-6'>
          <div className='flex items-center gap-3'>
            <span className='h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_#67fafd]' />
            <span className='text-[11px] font-medium uppercase tracking-[0.28em] text-white/55'>
              Pinboard
            </span>
          </div>
          <span className='text-sm text-white/40'>
            {cards.length} {cards.length === 1 ? 'card' : 'cards'}
          </span>
        </header>

        <AddCardModal
          isOpen={openDialogue}
          onClose={() => setOpenDialouge(false)}
          onSubmit={addCard}
        />
        <DeleteModal
          isOpen={cardToDelete !== null}
          onClose={() => setCardToDelete(null)}
          onConfirm={confirmDelete}
          itemName={cardPendingDelete?.title}
        />

        {selectedCard && (
          <CardPeekPanel
            card={selectedCard}
            onClose={() => setSelectedCardId(null)}
          />
        )}

        <div className='flex min-h-0 flex-1 items-stretch gap-6 overflow-x-auto px-6 py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/15 hover:scrollbar-thumb-white/30'>
          {initialColumns.map((el) => (
            <BoardColumn
              key={el.id}
              title={el.title}
              columnId={el.id}
              cards={cards}
              handleAddClick={handleAddClick}
              handleDeleteClick={handleDeleteClick}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </DragDropProvider>
  );
}
