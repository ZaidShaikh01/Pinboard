import { useState } from 'react';
import Modal from './ui/modal';

const base =
  'focus-ring cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-colors';
const secondary = `${base} border border-white/15 bg-white/5 text-white/80 hover:bg-white/10`;
const primary = `${base} bg-primary text-white hover:bg-primary-bright`;
const field =
  'w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#67fafd]/50 focus:ring-2 focus:ring-[#67fafd]/25';

type AddCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
};

const AddCardModal = ({ isOpen, onClose, onSubmit }: AddCardModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
            className='mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45'
          >
            Title
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
            className='mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45'
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

        <div className='flex justify-end gap-3 border-t border-white/10 pt-4'>
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
