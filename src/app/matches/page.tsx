import ShaderBackground from '@/components/ShaderBackground';
import { fetchMatch } from '@/helpers/fetch-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const Matches = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { q: queryParam } = await searchParams;

  const matchQuery = decodeURIComponent(queryParam || '');

  const data = await fetchMatch(matchQuery);

  console.log(data);

  if (!data || data.length === 0) {
    notFound();
  }

  if (data.length === 1) {
    const match = data[0];

    console.log(match);
  }

  return (
    <ShaderBackground>
      <div className='relative text-white'>
        <h1 className='text-3xl md:text-5xl'>
          Multiple matches found for{' '}
          <span className='italic'>{matchQuery}</span>
        </h1>
        <ul>
          {data.map((match) => (
            <li key={match.title}>
              <Link href='/'>{match.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </ShaderBackground>
  );
};

export default Matches;
