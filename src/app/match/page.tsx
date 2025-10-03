import { fetchMatch } from '@/helpers/fetch-data';
import { notFound } from 'next/navigation';

const Stream = async ({
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

  return (
    <div>
      {data.map((match) => (
        <h1 key={match.title}>{match.title}</h1>
      ))}
    </div>
  );
};

export default Stream;
