import { serif } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import feature1Pic from '../assets/feature1.png';

function Feature1() {
  return (
    <div className='flex flex-col gap-16'>
      <div className='text-center w-full flex flex-col items-center gap-2'>
        <div
          className={`${serif.className} text-steadiaBlack text-3xl font-bold max-w-[650px]`}
        >
          What kinds of products can you sell with Steadia?
        </div>
        <div className='max-w-[700px]'>
          Steadia gives you the flexibility to sell whatever you want. That
          means you have more ways to grow your creator business.
        </div>
      </div>

      <div>
        <div>
          <div className='flex gap-10 items-center'>
            <div className='flex-1'>
              <div className='uppercase text-xs font-semibold'>
                Online courses
              </div>
              <div
                className={`${serif.className} text-steadiaBlack text-2xl font-bold max-w-[650px] my-2 leading-tight`}
              >
                Beautiful online courses you can build in moments
              </div>
              <div>
                Make a beautiful online courses for your customers. Podia hosts
                your course. That means all the lessons, files, and videos you
                want handled for you.
              </div>
              <Link href='#' className='mt-6 text-steadiaAccent font-semibold'>
                Learn more about courses{' '}
                <FiArrowRight style={{ display: 'inline' }} />
              </Link>
            </div>
            <div className='flex-1'>
              <Image alt='flower' height='500' src={feature1Pic} />
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
              I've wanted to offer e-courses for a while but always felt
              overwhelmed with how to set it up. Steadia has made it super easy.
            </div>
            <div className='text-steadiaText text-sm'>
              - Joy Cho, Oh Joy! Academy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
