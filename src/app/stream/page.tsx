import { fetchMatch } from '@/helpers/fetch-data';

const Stream = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { q: queryParam } = await searchParams;

  const matchQuery = decodeURIComponent(queryParam || '');

  const data = await fetchMatch(matchQuery);

  return <h1>{queryParam}</h1>;
};

export default Stream;
