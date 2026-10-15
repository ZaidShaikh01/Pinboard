import { FaPlus } from 'react-icons/fa';
import type { Card } from '~/types';
import DraggableCardComponent from './DraggableCardComponent';
import { useDroppable } from '@dnd-kit/react';

type BoardColumnProps = {
  title: string;
  columnId: string;
  cards: Card[];
  handleAddClick: (columnId: string) => void;
  handleDeleteClick: (cardId: string) => void;
  handleCardClick: (cardId: string) => void;
};

const BoardColumn = ({
  title,
  columnId,
  cards,
  handleAddClick,
  handleDeleteClick,
  handleCardClick,
}: BoardColumnProps) => {
  const { ref, isDropTarget } = useDroppable({
    id: columnId,
  });

  const columnCards = cards.filter((card) => card.columnId === columnId);

  return (
    <div
      ref={ref}
      className={`glass-panel flex h-full w-[20.5rem] shrink-0 flex-col overflow-hidden rounded-2xl transition-[box-shadow,background,border-color] duration-200 ${
        isDropTarget
          ? 'border-[#67fafd]/45 bg-[rgba(103,250,253,0.07)] shadow-[0_0_0_1px_rgba(103,250,253,0.25)]'
          : ''
      }`}
    >
      <div className='flex shrink-0 items-center justify-between px-4 pb-3 pt-4'>
        <h2 className='text-sm font-semibold tracking-wide text-white'>
          {title}
        </h2>
        <span className='rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/50'>
          {columnCards.length}
        </span>
      </div>

      <div className='flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/15 hover:scrollbar-thumb-white/30'>
        {columnCards.length === 0 ? (
          <p className='px-1 py-8 text-center text-sm text-white/30'>
            No cards yet
          </p>
        ) : (
          columnCards.map((card) => (
            <DraggableCardComponent
              card={card}
              handleDeleteClick={handleDeleteClick}
              handleCardClick={handleCardClick}
              key={card.id}
            />
          ))
        )}
      </div>

      <div className='shrink-0 p-3'>
        <button
          type='button'
          onClick={() => handleAddClick(columnId)}
          className='focus-ring flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-3 py-2.5 text-sm text-white/70 transition-colors hover:border-[#67fafd]/40 hover:bg-white/[0.06] hover:text-white'
        >
          <FaPlus className='text-xs' />
          <span>Add card</span>
        </button>
      </div>
    </div>
  );
};

export default BoardColumn;
