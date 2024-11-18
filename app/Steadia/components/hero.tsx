import { serif } from '@/app/ui/fonts';
import Image from 'next/image';
import heroPic from '../assets/hero.png';
import Link from 'next/link';

function Hero() {
  return (
    <div className='flex gap-10 items-center'>
      <div className='flex-1'>
        <div className='uppercase text-xs font-semibold'>Digital products</div>
        <div
          className={`${serif.className} text-5xl font-bold text-steadiaBlack leading-tight`}
        >
          Sell online courses, coaching sessions, webinars, workshops, ebooks,
          and anything you can think of on Steadia
        </div>
        <div className='mb-4 mt-2'>
          Get everything you need in one place that you own. Steadia takes care
          of hosting products, taking payments, and getting products to your
          customers. And you always control your own work.
        </div>
        <Link
          href='#'
          className='bg-steadiaAccent text-white font-semibold px-5 py-3 w-fit rounded-full'
        >
          Get your free account
        </Link>
      </div>
      <div className='flex-1'>
        <Image className='rounded-lg' alt='flower' height='500' src={heroPic} />
      </div>
    </div>
  );
}

export default Hero;
