export const fetchMatch = async (query: string) => {
  try {
    const response = await fetch('https://streamed.pk/api/matches/live');

    const matches: MatchData[] = await response.json();

    const desiredMatch = matches.find((match) =>
      match.title.toLowerCase().includes(query.toLowerCase())
    );

    if (!desiredMatch) {
      throw new Error('No match found!');
    }

    return desiredMatch;
  } catch (error) {
    console.error(error);
  }
};
