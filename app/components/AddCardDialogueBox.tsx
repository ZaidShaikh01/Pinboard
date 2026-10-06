import { useState } from 'react';
import Modal from './ui/modal';


const base =
  'cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors';
const secondary = `${base} bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600`;
const primary = `${base} bg-blue-600 text-white hover:bg-blue-700`;
const field =
  'w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100';

type AddCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
};

const AddCardModal = ({ isOpen, onClose, onSubmit }: AddCardModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // This modal stays mounted while closed, so its state is NOT reset for free.
  const reset = () => {
    setTitle('');
    setDescription('');
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // `required` lets a spaces-only title through, so check the trimmed value
    if (title.trim() === '') return;
    onSubmit(title, description);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='Add a card' size='md'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='card-title'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
          >
            Title *
          </label>
          <input
            type='text'
            id='card-title'
            required
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={field}
            placeholder='What needs doing?'
          />
        </div>

        <div>
          <label
            htmlFor='card-description'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
          >
            Description
          </label>
          <textarea
            id='card-description'
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${field} resize-none`}
            placeholder='Add some details (optional)'
          />
        </div>

        <div className='flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700'>
          <button type='button' onClick={handleClose} className={secondary}>
            Cancel
          </button>
          <button type='submit' className={primary}>
            Add card
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddCardModal;
