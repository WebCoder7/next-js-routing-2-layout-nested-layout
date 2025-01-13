import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div>
      <h1 className='p-[20px] gap-10 bg-blue-500 text-2xl font-bold flex justify-center'>
        <Link
          href={'/'}
          className='hover:text-white hover:underline hover:scale-110 transition-all duration-300'
        >
          Home
        </Link>
        <Link
          href={'/about'}
          className='hover:text-white hover:underline hover:scale-110 transition-all duration-300'
        >
          About
        </Link>
        <Link
          href={'/profile'}
          className='hover:text-white hover:underline hover:scale-110 transition-all duration-300'
        >
          Profile
        </Link>
      </h1>
    </div>
  );
}
