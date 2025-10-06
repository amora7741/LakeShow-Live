import ShaderBackground from '@/components/ShaderBackground';
import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <ShaderBackground>
      <div className='h-screen text-white relative flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-3xl md:text-5xl'>Searching for sources</h1>
        <LoaderCircle className='animate-spin size-16' />
      </div>
    </ShaderBackground>
  );
};

export default Loading;
