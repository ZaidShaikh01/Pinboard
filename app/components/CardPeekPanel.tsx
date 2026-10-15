import { useEffect, useRef, useState } from 'react';
import { FaExpandAlt, FaCompressAlt, FaTimes } from 'react-icons/fa';
import type { Card } from '~/types';

const EXIT_DURATION_MS = 200;

type CardPeekPanelProps = {
  card: Card;
  onClose: () => void;
};

const CardPeekPanel = ({ card, onClose }: CardPeekPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  const requestClose = () => setIsClosing(true);

  useEffect(() => {
    if (!isClosing) return;
    const timer = setTimeout(() => onCloseRef.current(), EXIT_DURATION_MS);
    return () => clearTimeout(timer);
  }, [isClosing]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsClosing(true);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) requestClose();
  };

  const createdLabel = new Date(card.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-[2px] ${
        isClosing
          ? 'animate-[panel-fade-out_200ms_ease-in_forwards]'
          : 'animate-[panel-fade-in_150ms_ease-out]'
      }`}
    >
      <aside
        role='dialog'
        aria-modal='true'
        aria-labelledby='peek-title'
        className={`glass-panel flex h-full flex-col rounded-none rounded-l-2xl text-gray-100 transition-[width] duration-200 ${
          isExpanded ? 'w-full' : 'w-full md:w-1/2'
        } ${
          isClosing
            ? 'animate-[panel-slide-out-right_200ms_ease-in_forwards]'
            : 'animate-[panel-slide-in-right_250ms_ease-out]'
        }`}
      >
        <header className='flex items-start justify-between gap-4 border-b border-white/10 p-5'>
          <h1
            id='peek-title'
            className='min-w-0 flex-1 break-words text-2xl font-semibold tracking-tight'
          >
            {card.title}
          </h1>

          <div className='flex shrink-0 items-center gap-1'>
            <button
              type='button'
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-label={isExpanded ? 'Shrink panel' : 'Expand to full screen'}
              className='focus-ring cursor-pointer rounded-md p-2 text-white/45 transition-colors hover:bg-white/10 hover:text-white'
            >
              {isExpanded ? <FaCompressAlt /> : <FaExpandAlt />}
            </button>
            <button
              type='button'
              onClick={requestClose}
              aria-label='Close panel'
              className='focus-ring cursor-pointer rounded-md p-2 text-white/45 transition-colors hover:bg-white/10 hover:text-white'
            >
              <FaTimes />
            </button>
          </div>
        </header>

        <div className='flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/15'>
          <h2 className='text-[11px] font-medium uppercase tracking-[0.18em] text-white/40'>
            Description
          </h2>
          {card.description ? (
            <p className='whitespace-pre-wrap break-words leading-relaxed text-white/80'>
              {card.description}
            </p>
          ) : (
            <p className='italic text-white/30'>No description</p>
          )}
        </div>

        <footer className='border-t border-white/10 px-6 py-3 text-xs text-white/35'>
          Created {createdLabel}
        </footer>
      </aside>
    </div>
  );
};

export default CardPeekPanel;
