import ShaderBackground from '@/components/ShaderBackground';
import { fetchMatch } from '@/helpers/fetch-data';
import { notFound } from 'next/navigation';

const Match = async ({ params }: { params: Promise<{ matchID: string }> }) => {
  const { matchID } = await params;

  const match = await fetchMatch(matchID);

  if (!match?.sources?.length) notFound();

  console.log(match);

  return (
    <ShaderBackground>
      <div className='relative text-white flex flex-col gap-8 mt-32 mb-12 px-8 max-w-7xl mx-auto'>
        <h1>{match.id}</h1>
      </div>
    </ShaderBackground>
  );
};

export default Match;
