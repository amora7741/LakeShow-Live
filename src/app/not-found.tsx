import ShaderBackground from '@/components/ShaderBackground';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <ShaderBackground>
      <div className='text-white relative h-dvh flex flex-col gap-4 items-center justify-center text-center'>
        <h1 className='text-3xl md:text-5xl italic'>
          This page does not exist...
        </h1>

        <Link
          href='/'
          className='flex items-center gap-2 hover:underline md:text-xl'
        >
          <span>Go Home</span>
          <MoveRight className='size-4 mt-1' />
        </Link>
      </div>
    </ShaderBackground>
  );
};

export default NotFound;
