export interface Game {
  id: string;
  name: string;
  platform: Platform;
  playtime: number; // in hours
  spent: number; // in USD
  imageUrl?: string;
}

export type Platform = 'Steam' | 'EA Play' | 'Riot Games' | 'Xbox' | 'PlayStation' | 'Epic Games' | 'Battle.net';

export interface PlatformAccount {
  platform: Platform;
  userId: string;
  connected: boolean;
}

export interface UserStats {
  totalPlaytime: number;
  totalSpent: number;
  games: Game[];
  platforms: PlatformAccount[];
}

export interface PlatformCredentials {
  platform: Platform;
  apiKey?: string;
  userId?: string;
  username?: string;
}
