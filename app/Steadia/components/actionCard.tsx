import { serif } from '@/app/ui/fonts';
import Link from 'next/link';

function ActionCard() {
  return (
    <div className='flex flex-col justify-center items-center text-center gap-2 bg-[#201445] text-white px-16 py-16 rounded-lg'>
      <div className={`${serif.className} text-4xl font-bold`}>
        Get your free Steadia account
      </div>
      <div className='text-steadiaButton brightness-150'>
        Join the 150,000+ creators who use Podia to create websites, sell
        digital products, and build online communities.
      </div>
      <Link
        href='#'
        className='bg-steadiaButton px-4 py-2 font-bold text-white w-fit rounded-full mt-1'
      >
        Sign up free
      </Link>
    </div>
  );
}

export default ActionCard;
