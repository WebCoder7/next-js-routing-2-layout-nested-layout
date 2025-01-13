import Link from 'next/link';
import React from 'react';

function ChangeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link
        className='text-bold text-red-500'
        href={'/profile/change-profile/change-edit'}
      >
        Change edit
      </Link>
      {children}
    </div>
  );
}

export default ChangeLayout;
