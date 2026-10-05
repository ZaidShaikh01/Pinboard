import { useState } from 'react';
type DialogueBoxAddProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (title: string, description: string) => void;
};

const DialogueBoxAdd = ({
  setOpen,
  handleSubmit,
}: DialogueBoxAddProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              handleSubmit(title, description);
              setOpen(false);
            }}
            className='flex flex-col justify-around h-full'
          >
            <div>
              <label htmlFor='title'>Title: </label>
              <input
                className='w-full h-10'
                type='text'
                name='title'
                id='title'
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder='Enter something'
              />
            </div>
            <div>
              <label htmlFor='description'>Description: </label>
              <input
                className='w-full h-10'
                type='text'
                name='description'
                
                id='description'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder='Enter something'
              />
            </div>
            <button
              className='p-5 cursor-pointer bg-amber-700 rounded-3xl'
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
