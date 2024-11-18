import Link from 'next/link';

function Footer() {
  return (
    <footer className='mt-20 w-full bg-steadiaFooter flex flex-col items-center'>
      <div className='w-full lg:max-w-[1024px] py-16 flex flex-col gap-4'>
        <div className='flex gap-3'>
          <div className='font-semibold'>Platform</div>
          <Link href='#' className='underline'>
            Pricing
          </Link>
          <Link href='#' className='underline'>
            Sign up free
          </Link>
          <Link href='#' className='underline'>
            Demo
          </Link>
          <Link href='#' className='underline'>
            Community
          </Link>
          <Link href='#' className='underline'>
            Website builder
          </Link>
          <Link href='#' className='underline'>
            Digital products
          </Link>
        </div>
        <div className='flex gap-3'>
          <div className='font-semibold'>Support</div>
          <Link href='#' className='underline'>
            Contact us
          </Link>
          <Link href='#' className='underline'>
            Help center
          </Link>
          <Link href='#' className='underline'>
            Hire a Steadia pro
          </Link>
          <Link href='#' className='underline'>
            Creator community
          </Link>
          <Link href='#' className='underline'>
            Steadia 101
          </Link>
        </div>
        <div className='flex gap-3'>
          <div className='font-semibold'>Features</div>
          <Link href='#' className='underline'>
            Online courses
          </Link>
          <Link href='#' className='underline'>
            Downloads
          </Link>
          <Link href='#' className='underline'>
            Webinars
          </Link>
          <Link href='#' className='underline'>
            Coaching
          </Link>
          <Link href='#' className='underline'>
            Email marketing
          </Link>
        </div>
        <div className='flex gap-3'>
          <div className='font-semibold'>Compare</div>
          <Link href='#' className='underline'>
            Kajabi
          </Link>
          <Link href='#' className='underline'>
            Teachable
          </Link>
          <Link href='#' className='underline'>
            Thinkific
          </Link>
          <Link href='#' className='underline'>
            Patreon
          </Link>
          <Link href='#' className='underline'>
            Gumroad
          </Link>
          <Link href='#' className='underline'>
            Podia alternatives
          </Link>
        </div>
        <div className='flex gap-3'>
          <div className='font-semibold'>Resources</div>
          <Link href='#' className='underline'>
            Examples
          </Link>
          <Link href='#' className='underline'>
            Creator stories
          </Link>
          <Link href='#' className='underline'>
            Blog
          </Link>
          <Link href='#' className='underline'>
            Free tools
          </Link>
          <Link href='#' className='underline'>
            All resources
          </Link>
        </div>
        <div className='flex gap-3'>
          <div className='font-semibold'>Steadia</div>
          <Link href='#' className='underline'>
            Jobs
          </Link>
          <Link href='#' className='underline'>
            About
          </Link>
          <Link href='#' className='underline'>
            Branding
          </Link>
          <Link href='#' className='underline'>
            Reviews
          </Link>
          <Link href='#' className='underline'>
            Refer-a-creator
          </Link>
          <Link href='#' className='underline'>
            Affiliates
          </Link>
        </div>
        <div className='flex gap-3'>
          <div className='font-semibold'>Social</div>
          <Link href='#' className='underline'>
            Twitter
          </Link>
          <Link href='#' className='underline'>
            Facebook
          </Link>
          <Link href='#' className='underline'>
            Instagram
          </Link>
          <Link href='#' className='underline'>
            YouTube
          </Link>
        </div>

        <div className='flex mt-4 text-sm gap-3'>
          <div>Podia Labs, Inc. &#169; 2023</div>
          <Link href='#' className='underline'>
            Terms
          </Link>
          <Link href='#' className='underline'>
            Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
