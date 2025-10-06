import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed inset-x-0 top-4 z-50'>
      <div className='flex items-center px-8'>
        <Link href='/'>
          <span className='text-5xl italic font-medium font-serif tracking-tight md:text-6xl text-white'>
            sports.
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
