import Link from 'next/link';
import React from 'react';

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-[100%]  '>
      <div className='p-[30px] bg-blue-400 w-[300px] h-[81vh] flex flex-col gap-[20px]'>
        <Link
          href={'/profile'}
          className=' font-bold text-red-600  hover:text-white hover:underline hover:scale-105 transition-all duration-300'
        >
          Profile
        </Link>
        <Link
          href={'/profile/address'}
          className='font-bold text-red-600 hover:text-white hover:underline hover:scale-105 transition-all duration-300'
        >
          Address
        </Link>
        <Link
          href={'/profile/change-profile'}
          className=' font-bold text-red-600 hover:text-white hover:underline hover:scale-105 transition-all duration-300'
        >
          Change Profile
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ProfileLayout;
