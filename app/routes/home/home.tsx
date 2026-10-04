
import Card from '~/components/CardComponent';
import type { Route } from './+types/home';

import { initialColumns } from '~/data/initialBoard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  
  return (
    <div className='h-screen flex justify-around items-center gap-10 w-full bg-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-6'>
      {/* List of cards, For now lets make three cards only */}
      {/* Outer cards */}
      {initialColumns.map((el) => (
        <Card title={el.title} description={el.cards} />
      ))}
    </div>
  );
}
