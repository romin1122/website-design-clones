import Image from 'next/image';
import { serif } from '@/app/ui/fonts';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';
import feature2Pic from '../assets/feature2.jpg';

function Feature2() {
  return (
    <div className=''>
      <div>
        <div className='flex gap-10 items-center'>
          <div className='flex-1'>
            <div className='uppercase text-xs font-semibold'>
              Digital downloads
            </div>
            <div
              className={`${serif.className} text-steadiaBlack text-2xl font-bold max-w-[650px] my-2 leading-tight`}
            >
              Ebooks, templates, and any file type you can think of
            </div>
            <div>
              Have an ebook to sell? Templates you love? Steadia makes it easy
              to spin up a sales page and sell ebooks, templates, audio files,
              video files, spreadsheets, and any other file type.
            </div>
            <Link href='#' className='mt-6 text-steadiaAccent font-semibold'>
              Learn more about downloads{' '}
              <FiArrowRight style={{ display: 'inline' }} />
            </Link>
          </div>
          <div className='flex-1'>
            <Image alt='flower' height='500' src={feature2Pic} />
          </div>
        </div>

        <div className='flex flex-col align-center text-center mt-14 gap-3 items-center'>
          <div className='flex text-orange-400 w-full justify-center gap-2'>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <div
            className={`${serif.className} max-w-[700px] text-xl text-gray-900`}
          >
            We didn't have to stress about technical details or custom coding.
            Using Steadia amde selling our first eBook quick, efficient, and
            fun.
          </div>
          <div className='text-steadiaText text-sm'>
            - Matt & Steph, Plant-based food bloggers
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature2;
