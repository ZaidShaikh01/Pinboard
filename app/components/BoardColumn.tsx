import { FaPlus } from 'react-icons/fa';
import type { Card } from '~/types';

type BoardColumnProps = {
  title: string;
  columnId: string;
  cards: Card[];
  handleAddClick: (columnId: string) => void;
};

const BoardColumn = ({
  title,
  columnId,
  cards,
  handleAddClick,
}: BoardColumnProps) => {
  return (
    <div className='w-sm shrink-0 h-2/3 bg-black rounded-2xl flex flex-col overflow-hidden '>
      {/* Card Title */}
      <div className='m-3 text-gray-200 shrink-0  px-3'>{title}</div>
      {/* Card details */}
      <div className='flex-1 flex flex-col gap-2 min-h-0 m-3 overflow-y-auto scrollbar-gutter-stable scrollbar-thin scrollbar-w-1.5 scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-hover:bg-gray-500 '>
        {/* Inner details */}
        {cards
          .filter((card) => card.columnId === columnId)
          .map((card) => (
            <div
              key={card.id}
              className='p-3   border border-transparent cursor-pointer hover:border-blue-300 bg-gray-800 rounded-xl text-base '
            >
              {card.title}
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
            <span >Add</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BoardColumn;
