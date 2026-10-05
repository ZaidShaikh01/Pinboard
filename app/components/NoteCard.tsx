const NoteCard = () => {
    return ( <div
              key={card.id}
              className='p-3 border border-transparent cursor-pointer hover:border-blue-300 bg-gray-800 rounded-xl text-base '
            >
              {card.title}
            </div> );
}
 
export default NoteCard;