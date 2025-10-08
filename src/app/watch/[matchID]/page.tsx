import ShaderBackground from '@/components/ShaderBackground';
import { fetchMatch, fetchSources } from '@/helpers/fetch-data';
import { notFound } from 'next/navigation';

const Match = async ({ params }: { params: Promise<{ matchID: string }> }) => {
  const { matchID } = await params;

  const match = await fetchMatch(matchID);

  if (!match?.sources?.length) notFound();

  const allStreams = await Promise.all(
    match.sources.map(async (source) => {
      const streams = await fetchSources(source.source, source.id);
      return {
        source: source.source,
        streams: streams || [],
      };
    })
  );

  return (
    <ShaderBackground>
      <div className='relative text-white flex flex-col gap-8 mt-32 mb-12 px-8 max-w-7xl mx-auto'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl line-clamp-2 pb-2'>
          Streams for{' '}
          <span className='italic tracking-tighter font-serif'>
            {match.title}
          </span>
        </h1>

        <div className='w-full border border-b-white/60' />

        <ul>
          {allStreams.map((stream, index) => (
            <li key={index}>
              <h2 className='text-2xl font-semibold'>
                {stream.source.charAt(0).toUpperCase() + stream.source.slice(1)}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </ShaderBackground>
  );
};

export default Match;
