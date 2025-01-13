import Link from 'next/link';
import React from 'react';

function AddressLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link className='text-bold text-red-500' href={'/profile/address/news'}>
        News
      </Link>
      {children}
    </div>
  );
}

export default AddressLayout;
