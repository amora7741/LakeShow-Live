'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 px-8 py-6 top-0 z-50 flex transition-all ${
        scrolled ? 'bg-white/10 backdrop-blur-sm' : ''
      }`}
    >
      <Link href='/'>
        <span className='text-5xl italic font-medium font-serif tracking-tight md:text-6xl text-white'>
          sports.
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
