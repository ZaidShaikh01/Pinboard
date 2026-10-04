// It will take list of items as details

type CardProps = {
  title: string;
  description: string[];
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className='w-sm shrink-0 h-2/3 bg-black rounded-2xl 0 flex flex-col overflow-hidden '>
      {/* Card Title */}
      <div className='m-3 text-gray-200 shrink-0  px-3'>{title}</div>
      {/* Card details */}
      <div className='flex-1 min-h-0 m-3 overflow-y-auto scrollbar-gutter-stable scrollbar-thin scrollbar-w-1.5 scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-hover:bg-gray-500 '>
        {/* Inner details */}
        {description.map((el) => (
          <div className='p-3 mt-2  border border-transparent cursor-pointer transition-border  hover:border-blue-300 bg-gray-800 rounded-xl text-base '>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
