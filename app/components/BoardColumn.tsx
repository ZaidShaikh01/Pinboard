import { FaPlus, FaTrash } from 'react-icons/fa';
import type { Card, Column } from '~/types';

type BoardColumnProps = {
  title: string;
  columnId: string;
  cards: Card[];
  handleAddClick: (columnId: string) => void;
  handleDeleteClick: (cardId: string) => void;
};

const BoardColumn = ({
  title,
  columnId,
  cards,
  handleAddClick,
  handleDeleteClick,
}: BoardColumnProps) => {
  return (
    <div className='w-sm shrink-0 h-2/3 bg-black rounded-2xl flex flex-col overflow-hidden '>
      {/* Column Title */}
      <div className='m-3 text-gray-200 shrink-0  px-3'>{title}</div>
      {/* Card Space  */}
      <div className='flex-1 flex flex-col gap-2 min-h-0 m-3 overflow-y-auto scrollbar-gutter-stable scrollbar-thin scrollbar-w-1.5 scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-hover:bg-gray-500 '>
        {/* Cards */}
        {cards
          .filter((card) => card.columnId === columnId)
          .map((card) => (
            <div
              key={card.id}
              className='p-3 border border-transparent cursor-pointer hover:border-blue-300 bg-gray-800 rounded-xl text-base '
            >
              <div className='flex w-full justify-between items-center'>
                <span className='truncate' >{card.title}</span>
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
          ))}
        <button
          onClick={() => handleAddClick(columnId)}
          className='p-3 w-full border border-transparent cursor-pointer  hover:border-blue-300 bg-gray-800 rounded-xl text-base '
        >
          <div className='flex gap-3 justify-center text-center items-center'>
            <span>
              <FaPlus />
            </span>
            <span>Add</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BoardColumn;
