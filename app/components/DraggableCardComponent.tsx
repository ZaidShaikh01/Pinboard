import { useDraggable } from '@dnd-kit/react';
import { FaTrash } from 'react-icons/fa';
import type { Card } from '~/types';

type DraggableCardComponentProps = {
  card: Card;
  isNew?: boolean;
  handleDeleteClick: (cardId: string) => void;
  handleCardClick: (cardId: string) => void;
};

const DraggableCardComponent = ({
  card,
  isNew = false,
  handleDeleteClick,
  handleCardClick,
}: DraggableCardComponentProps) => {
  const { ref, isDragging } = useDraggable({
    id: card.id,
  });

  return (
    <div
      ref={ref}
      className={`glass-card group isolate  cursor-pointer rounded-xl p-3.5 ring-2 ring-transparent transition-[border-color,box-shadow,background-color] duration-150 ${
        isNew ? 'animate-[card-in_220ms_ease-out]' : ''
      } ${
        isDragging
          ? 'opacity-40'
          : 'hover:border-[#67fafd]/35 hover:bg-white/[0.06] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:ring-[#67fafd]/30 hover:bg-blue-400/10'
      }`}
      onClick={() => handleCardClick(card.id)}
    >
      <div className='flex w-full items-start justify-between gap-3 '>
        <span className='line-clamp-2 min-w-0 flex-1 text-sm font-medium leading-snug text-white '>
          {card.title}
        </span>
        <button
          className='focus-ring shrink-0 cursor-pointer appearance-none rounded-md bg-transparent p-1.5 text-white/0 outline-none transition-colors group-hover:text-white/40 group-focus-within:text-white/40 hover:bg-rose-400/10 hover:!text-rose-400'
          type='button'
          aria-label={`Delete ${card.title}`}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteClick(card.id);
          }}
        >
          <FaTrash className='text-xs' />
        </button>
      </div>

      {card.description ? (
        <p className='mt-2 line-clamp-2 text-xs leading-relaxed text-white/45'>
          {card.description}
        </p>
      ) : null}
    </div>
  );
};

export default DraggableCardComponent;