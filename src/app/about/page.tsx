import React from 'react';
import walper from '/public/images/walper.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trader',
  description: 'Oyiga 10000 dollor foyda',
  openGraph: {
    images: ['images/walper.webp'],
  },
};

function About() {
  return (
    <div>
      <h1 className='font-medium text-[20px]'>About Page</h1>
      <img src={walper.src} alt='img' />
    </div>
  );
}

export default About;
