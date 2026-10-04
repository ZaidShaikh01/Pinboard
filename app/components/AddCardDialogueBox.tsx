type DialogueBoxAddProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogueBoxAdd = ({ setOpen }: DialogueBoxAddProps) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };
  return (
    <div
      onClick={onClick}
      className='fixed inset-0 z-50  flex justify-center items-center bg-black/50'
    >
      <div className=' w-lg bg-blue-950 rounded-3xl  '>
        <div className='flex h-full flex-col justify-around p-5'>
          {/* Title */}
          <span className='text-2xl'>Add a card</span>
          <form className='flex flex-col justify-around h-full'>
            <div>
              <label htmlFor='text'>Title: </label>
              <input
                className='w-full h-10'
                type='text'
                name='text'
                id='text'
                placeholder='Enter something'
              />
            </div>
            <div>
              <label htmlFor='description'>description: </label>
              <input
                className='w-full h-10'
                type='text'
                name='description'
                id='description'
                placeholder='Enter something'
              />
            </div>
            <button
              onSubmit={(e) => e.stopPropagation()}
              className='p-5 bg-amber-700 rounded-3xl'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DialogueBoxAdd;
