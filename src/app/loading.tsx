import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <div className='bg-gray-900'>
      <div className='h-screen text-white relative flex flex-col gap-4 items-center justify-center'>
        <LoaderCircle className='animate-spin size-16' />
      </div>
    </div>
  );
};

export default Loading;
