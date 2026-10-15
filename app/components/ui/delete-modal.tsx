import Modal from './modal';

const base =
  'focus-ring cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-colors';
const secondary = `${base} border border-white/15 bg-white/5 text-white/80 hover:bg-white/10`;
const destructive = `${base} bg-rose-600 text-white hover:bg-rose-500`;

type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
};

const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}: DeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Delete card' size='sm'>
      <div className='space-y-5'>
        <p className='text-sm leading-relaxed text-white/70'>
          {itemName ? (
            <>
              Delete{' '}
              <span className='font-medium text-white'>“{itemName}”</span>? This
              can’t be undone.
            </>
          ) : (
            'This can’t be undone.'
          )}
        </p>

        <div className='flex justify-end gap-3'>
          <button type='button' onClick={onClose} className={secondary}>
            Cancel
          </button>
          <button type='button' onClick={onConfirm} className={destructive}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
