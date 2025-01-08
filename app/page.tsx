'use client';

import Feature from '@/components/Feature';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWork from '@/components/HowItWork';

const page = () => {
  return (
    <div className='bg-n-2 transition-all text-n-6 w-full dark:bg-n-8 dark:text-n-2'>
      <Header />
      <main>
        <div className='h-[1px] w-full bg-n-9 dark:bg-n-9' />
        <Hero />
        <Feature />
        <HowItWork />
      </main>
    </div>
  );
};

export default page;
