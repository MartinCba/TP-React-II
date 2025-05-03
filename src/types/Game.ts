
export type Game ={
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  onClick:(id: number) => void;
}