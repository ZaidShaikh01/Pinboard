import { FaPlus } from 'react-icons/fa';
import { initialCards } from '~/data/initialBoard';
import type { Card } from '~/types';

type CardProps = {
  title: string;
  columnId: string;
  setOpenDialouge: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardComponent = ({ title, columnId, setOpenDialouge }: CardProps) => {
  const onAdd = () => {
    console.log();
    setOpenDialouge(true);
  };
  return (
    <div className='w-sm shrink-0 h-2/3 bg-black rounded-2xl 0 flex flex-col overflow-hidden '>
      {/* Card Title */}
      <div className='m-3 text-gray-200 shrink-0  px-3'>{title}</div>
      {/* Card details */}
      <div className='flex-1 flex flex-col gap-2 min-h-0 m-3 overflow-y-auto scrollbar-gutter-stable scrollbar-thin scrollbar-w-1.5 scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-hover:bg-gray-500 '>
        {/* Inner details */}
        {initialCards
          .filter((card) => card.columnId === columnId)
          .map((card) => (
            <div key={card.id} className='p-3 mt-2  border border-transparent cursor-pointer hover:border-blue-300 bg-gray-800 rounded-xl text-base '>
              {card.title}
            </div>
          ))}
        <button
          onClick={onAdd}
          className='p-3 mt-2  w-full border border-transparent cursor-pointer transition-border  hover:border-blue-300 bg-gray-800 rounded-xl text-base '
        >
          <div className='flex justify-center text-center items-center'>
            <span>
              <FaPlus />
            </span>{' '}
            <span className='ml-3'>Add</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
