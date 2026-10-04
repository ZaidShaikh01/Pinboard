import Card from '~/components/CardComponent';
import type { Route } from './+types/home';
import { useState } from 'react';

import { initialColumns } from '~/data/initialBoard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  let [openDialogue, setOpenDialouge] = useState(false);

  return (
    <div className='h-screen flex relative justify-around items-center gap-10 w-full bg-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-6'>
      {/* List of cards, For now lets make three cards only */}
      {/* Outer cards */}
      <div className='fixed z-50 w-full h-screen flex justify-center items-center bg-black/50'>
        <div className=' w-lg h-1/3 bg-blue-950 rounded-3xl  '>
          <div className='flex h-full flex-col justify-around p-5'>
            {/* Title */}
            <span className='text-2xl'>Add a card</span>
            <form className='flex flex-col justify-around h-full' action=''>
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
              <button className='p-5 bg-amber-700 rounded-3xl' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      {initialColumns.map((el) => (
        <Card title={el.title} description={el.cards} />
      ))}
    </div>
  );
}
