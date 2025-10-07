import ShaderBackground from '@/components/ShaderBackground';
import { fetchMatches } from '@/helpers/fetch-data';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const Matches = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { q: queryParam } = await searchParams;

  const matchQuery = decodeURIComponent(queryParam || '');

  const data = await fetchMatches(matchQuery);

  if (!data || data.length === 0) {
    notFound();
  }

  if (data.length === 1) {
    const match = data[0];

    console.log(match);
  }

  return (
    <ShaderBackground>
      <div className='relative text-white flex flex-col gap-8 mt-32 mb-12 px-8 max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-6xl'>
          Matches found for{' '}
          <span className='italic tracking-tighter font-serif'>
            {matchQuery}
          </span>
        </h1>

        <p className='text-white/60'>{data.length} results</p>

        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4'>
          {data.map((match) => (
            <li className='h-40 group' key={match.title}>
              <Link
                href={`/watch/${match.id}`}
                className='size-full gap-2 grid grid-cols-[1fr_30px]'
              >
                <div className='grid grid-rows-[60px_1fr] gap-2'>
                  <span className='text-xl line-clamp-2 font-serif'>
                    {match.title}
                  </span>
                  <span className='font-medium text-white/60 group-hover:text-white transition-colors'>
                    {match.category.toUpperCase()}
                  </span>
                </div>

                <MoveUpRight className='justify-self-center size-4 translate-y-2 -translate-x-2 group-hover:translate-0 transition-transform' />
              </Link>
            </li>
          ))}
        </ul>

        <div className='w-full border border-b-white/60' />
        <p className='self-center font-sans text-white/60'>End of results</p>
      </div>
    </ShaderBackground>
  );
};

export default Matches;
