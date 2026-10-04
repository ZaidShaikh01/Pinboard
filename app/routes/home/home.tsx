import type { Route } from './+types/home';
import TestLoading from './loading';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className='h-screen flex justify-around items-center gap-10 w-full bg-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-6'>
      {/* Outer cards */}
      <div className='w-sm shrink-0 h-2/3 bg-black rounded-2xl  flex flex-col overflow-hidden '>
        {/* Card Title */}
        <div className='m-3 text-gray-200 shrink-0  px-3'>
          1. Master Your Medium
        </div>
        {/* Card details */}
        <div className='flex-1 min-h-0 m-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 '>
          <div className='p-3 mt-2 bg-gray-800 rounded-xl text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum
            est quas esse explicabo nobis voluptate facere
          </div>
          <div className='p-3 mt-2 bg-gray-800 rounded-xl text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum
            est quas esse explicabo nobis voluptate facere
          </div>
          <div className='p-3 mt-2 bg-gray-800 rounded-xl text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum
            est quas esse explicabo nobis voluptate facere
          </div>
          <div className='p-3 mt-2 bg-gray-800 rounded-xl text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum
            est quas esse explicabo nobis voluptate facere Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Doloribus adipisci debitis totam
            eveniet eius voluptas libero harum nesciunt, vitae id provident
            atque ducimus hic optio sed earum fugiat nobis labore. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Adipisci distinctio
            cupiditate enim, quasi beatae sint magni illum voluptatibus odio
            facere explicabo totam? Inventore recusandae aliquam, molestias et
            doloremque harum! Recusandae!
          </div>
        </div>
      </div>
    </div>
  );
}
