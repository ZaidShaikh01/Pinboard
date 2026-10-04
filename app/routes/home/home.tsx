import Card from '~/components/CardComponent';
import type { Route } from './+types/home';
import { useState } from 'react';

import { initialCards, initialColumns } from '~/data/initialBoard';
import DialogueBoxAdd from '~/components/AddCardDialogueBox';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  let [openDialogue, setOpenDialouge] = useState(false);
  let [cards,setCards] = useState(initialCards);

  return (
    <div className='h-screen flex relative justify-around items-center gap-10 w-full bg-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-6'>
      {/* List of cards, For now lets make three cards only */}
      {/* Outer cards */}
      {openDialogue && <DialogueBoxAdd setOpen={setOpenDialouge} />}
      {initialColumns.map((el) => (
        <Card
          title={el.title}
          columnId={el.id}
          cards={cards}
          setOpenDialouge={setOpenDialouge}
        />
      ))}
    </div>
  );
}
