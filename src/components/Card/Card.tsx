import React from 'react';
import Button from '../Button/Button';
import { Game } from '../../types/Game';

const DEFAULT_IMAGE = 'https://images.wondershare.com/recoverit/article/2019/11/common-video-errors-01.jpg';

type CardProps = {
  data: Game;
  onMarkAsViewed?: () => void;
  onDelete: () => void;
  onEdit?: () => void;
};

const Card: React.FC<CardProps> = ({ data, onMarkAsViewed, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 w-full h-full flex flex-col relative hover:-translate-y-1 hover:shadow-lg">
      <div className="relative w-full pt-[56.25%] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
          style={{ backgroundImage: `url(${data.background_image || DEFAULT_IMAGE})` }}
        />
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
          <div className="inline-block px-3 py-1 bg-white/80 text-gray-800 rounded-full text-xs font-medium capitalize backdrop-blur-sm">
            {data.name}
          </div>
          <div className="flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm text-gray-800">
            <span className="text-yellow-500 text-base">★</span>
            <span className="text-sm">{data.rating}/5</span>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-between gap-4 flex-grow">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">{data.name}</h3>
          <div className="text-gray-500 text-sm">
            <p className="mb-1"><strong>Lanzamiento:</strong> {data.released}</p>
          </div>
        </div>
        <div className="flex gap-2 pt-4 border-t border-gray-200">
          {onMarkAsViewed && (
            <Button
              variant="default"
              onClick={onMarkAsViewed}
              className="flex-1 flex items-center justify-center gap-2"
            >
              <span className="text-lg">✓</span> Visto
            </Button>
          )}
          {onEdit && (
            <Button
              variant="outline"
              onClick={onEdit}
              className="flex-1 flex items-center justify-center gap-2"
            >
              <span className="text-lg">✎</span> Editar
            </Button>
          )}
          <Button
            variant="danger"
            onClick={onDelete}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <span className="text-lg">×</span> Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
