import { useDraggable } from '@dnd-kit/react';
import { FaTrash } from 'react-icons/fa';
import type { Card } from '~/types';

type DraggableCardComponentProps = {
  card: Card;
  handleDeleteClick:(cardId:string)=>void
};

const DraggableCardComponent = ({ card,handleDeleteClick }: DraggableCardComponentProps) => {
  const { ref } = useDraggable({
    id: card.id,
  });

  return (
    <div
     
      ref={ref}
      className='p-3 border border-transparent cursor-pointer hover:border-blue-300 bg-gray-800 rounded-xl text-base '
    >
      <div className='flex w-full justify-between items-center'>
        <span className='truncate'>{card.title}</span>
        <button
          className=' min-w-2 cursor-pointer shrink-0'
          type='button'
          onClick={() => {
            // I will also need the card Id to delete it, so we will pass that too
            handleDeleteClick(card.id);
          }}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default DraggableCardComponent;
