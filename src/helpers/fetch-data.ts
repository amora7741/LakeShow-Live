export const fetchMatch = async (query: string) => {
  try {
    const response = await fetch('https://streamed.pk/api/matches/live');

    const matches: MatchData[] = await response.json();

    const queryWords = query
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const queryMatches = matches.filter((match) => {
      const matchTitle = match.title.toLowerCase();

      return queryWords.every((word) => matchTitle.includes(word));
    });

    return queryMatches;
  } catch (error) {
    console.error('Error fetching match:', error);
  }
};
