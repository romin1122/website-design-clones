import Nav from './components/nav';
import Image from 'next/image';
import Link from 'next/link';
import { serif } from '../ui/fonts';
import type { Metadata } from 'next';
import Hero from './components/hero';

import Benefits from './components/benefits';
import Feature1 from './components/feature1';
import Feature2 from './components/feature2';
import ActionCard from './components/actionCard';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Steadia',
  description: 'The all in one solution',
};

export default function Steadia() {
  return (
    <div className='bg-steadiaBackground text-steadiaText flex flex-col items-center w-full min-h-100vh'>
      <main className='w-full min-h-100vh bg-steadiaBackgroun lg:max-w-[1024px]'>
        <Nav />

        <div className='mt-20 flex flex-col gap-24'>
          <Hero />
          <Benefits />
          <Feature1 />
          <Feature2 />
          <ActionCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
