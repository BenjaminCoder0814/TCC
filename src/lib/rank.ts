export interface RankEntry {
  id: string;
  name: string;
  avatar: string;
  points: number;
  level: string;
  achievements: string[];
  position: number;
}

export const calculateRanking = (users: any[]): RankEntry[] => {
  return users
    .sort((a, b) => b.points - a.points)
    .map((user, index) => ({
      ...user,
      position: index + 1
    }));
};

export const getUserRank = (userId: string, ranking: RankEntry[]): number => {
  const user = ranking.find(r => r.id === userId);
  return user?.position || 0;
};

export const getTopUsers = (ranking: RankEntry[], limit: number = 10): RankEntry[] => {
  return ranking.slice(0, limit);
};

export const getNearbyUsers = (userPosition: number, ranking: RankEntry[], range: number = 5): RankEntry[] => {
  const start = Math.max(0, userPosition - range - 1);
  const end = Math.min(ranking.length, userPosition + range);
  return ranking.slice(start, end);
};