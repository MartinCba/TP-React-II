export type Game ={
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  description_raw?: string;
  genres?: { name: string }[];
  platforms?: { platform: { name: string } }[];
  metacritic?: number;
  developers?: { name: string }[];
  playtime?: number;
  tags?: { name: string }[];
  website?: string;
  esrb_rating?: { name: string };
  stores?: { store: { name: string, domain: string } }[];
}