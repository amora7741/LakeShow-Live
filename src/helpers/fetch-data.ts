export const fetchMatch = async (query: string) => {
  try {
    const response = await fetch('https://streamed.pk/api/matches/live');

    const matches: MatchData[] = await response.json();

    const queryMatches = matches.filter((match) =>
      match.title.toLowerCase().includes(query.toLowerCase())
    );

    return queryMatches;
  } catch (error) {
    console.error('Error fetching match:', error);
  }
};
