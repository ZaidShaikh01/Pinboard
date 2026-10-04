import Card from '~/components/Card';
import type { Route } from './+types/home';
import TestLoading from './loading';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  const cards = [
    {
      title: 'To-Do',
      descrption: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
      ],
    },
    {
      title: 'Pending',
      descrption: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
      ],
    },
    {
      title: 'Done',
      descrption: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, consequuntur sit vitae exercitationem, quam aperiam qui pariatur impedit vel non expedita. Iste perspiciatis, necessitatibus impedit delectus temporibus fugit optio?',
      ],
    },
  ];
  return (
    <div className='h-screen flex justify-around items-center gap-10 w-full bg-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-6'>
      {/* List of cards, For now lets make three cards only */}
      {/* Outer cards */}
      {cards.map((el) => (
        <Card title={el.title} description={el.descrption} />
      ))}
    </div>
  );
}
