import Link from 'next/link';

function Nav() {
  return (
    <nav className='flex justify-between py-4'>
      <div className='flex items-center'>
        <Link
          href='#'
          className='text-steadiaAccent pr-5 font-extrabold text-3xl'
        >
          steadia
        </Link>
        <div className='flex items-center gap-2'>
          <Link
            href='#'
            className='py-2 px-4 hover:bg-steadiaTextFocus rounded-3xl'
          >
            Features
          </Link>
          <Link
            href='#'
            className='py-2 px-4 hover:bg-steadiaTextFocus rounded-3xl'
          >
            Examples
          </Link>
          <Link
            href='#'
            className='py-2 px-4 hover:bg-steadiaTextFocus rounded-3xl'
          >
            Pricing
          </Link>
          <Link
            href='#'
            className='py-2 px-4 hover:bg-steadiaTextFocus rounded-3xl'
          >
            Demo
          </Link>
          <Link
            href='#'
            className='py-2 px-4 hover:bg-steadiaTextFocus rounded-3xl'
          >
            Resources
          </Link>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <Link
          href='#'
          className='py-2 px-4 hover:bg-steadiaTextFocus rounded-3xl'
        >
          Login
        </Link>
        <Link
          href='#'
          className='font-bold px-5 py-2 bg-steadiaAccent text-white text-center rounded-3xl hover:brightness-125'
        >
          Sign up free
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
