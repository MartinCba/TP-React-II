import { Game } from '../../types/Game';

interface CardProps extends Pick<Game, 'id' |'name' | 'background_image' | 'rating' | 'released' | 'onClick' > {}

const Card = ({id, name, background_image, rating, released, onClick }: CardProps) => {
  return (
    <div className="bg-[#2e165b] rounded-lg shadow-md p-4 w-xs h-xs m-10" onClick={()=>{onClick(id)}}>
      <img src={background_image || "public/noImage.png"} alt={name} className="w-full min-w-full h-[60%] object-cover object-top rounded-[15px]" />
      <h2 className="text-md font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">Rating: {rating}</p>
      <p className="text-gray-500">Lanzamiento: {released}</p>
    </div>
  );
};

export default Card;
