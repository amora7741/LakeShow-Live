import Search from '@/components/Search';
import ShaderBackground from '@/components/ShaderBackground';

const NotFound = () => {
  return (
    <ShaderBackground>
      <div className='text-white relative h-dvh flex flex-col gap-4 items-center justify-center text-center'>
        <h1 className='text-3xl md:text-5xl italic'>No stream found!</h1>
      </div>

      <Search />
    </ShaderBackground>
  );
};

export default NotFound;
