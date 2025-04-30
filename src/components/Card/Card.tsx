import { Game } from '../../types/Game';

interface CardProps extends Pick<Game, 'name' | 'background_image' | 'rating' | 'released'> {}

const Card = ({ name, background_image, rating, released }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs">
      <img src={background_image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">Rating: {rating}</p>
      <p className="text-gray-500">Lanzamiento: {released}</p>
    </div>
  );
};

export default Card;
