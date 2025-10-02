import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='absolute inset-x-0 top-4 z-50'>
      <div className='flex items-center px-8'>
        <Link href='/'>
          <span className='text-5xl italic font-medium md:text-6xl md:leading-16 tracking-tight text-white mb-4'>
            sports.
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
