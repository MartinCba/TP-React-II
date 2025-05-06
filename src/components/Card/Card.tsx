import React from 'react';
import { Game } from '../../types/Game';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../services/localStorage';

const DEFAULT_IMAGE = 'https://gbatemp.net/attachments/scr_1_top_right-png.70711/';

const Card: React.FC<{ data: Game; onFavorite?: () => void }> = ({ data, onFavorite }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const favs = getItem<number[]>('favorites') || [];
    setIsFavorite(favs.includes(data.id));
  }, [data.id]);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favs = getItem<number[]>('favorites') || [];
    let newFavs;
    if (favs.includes(data.id)) {
      newFavs = favs.filter(id => id !== data.id);
    } else {
      newFavs = [...favs, data.id];
    }
    setItem('favorites', newFavs);
    setIsFavorite(newFavs.includes(data.id));
    if (onFavorite) onFavorite();
  };

  return (
    <div
      className="relative bg-neutral-800 rounded-xl shadow-lg overflow-hidden flex flex-col min-w-0 cursor-pointer hover:scale-[1.025] transition-transform"
      onClick={() => navigate(`/details/${data.id}`)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${data.name}`}
      onKeyDown={e => { if (e.key === 'Enter') navigate(`/details/${data.id}`); }}
    >
      <div className="relative">
        <img
          src={data.background_image || DEFAULT_IMAGE}
          alt={data.name}
          className="w-full h-56 object-cover rounded-t-xl"
          onError={e => {
            (e.currentTarget as HTMLImageElement).src = DEFAULT_IMAGE;
          }}
        />
        <button
          className={`absolute top-2 left-2 bg-black/60 hover:bg-black/80 rounded-full p-2 transition-colors ${isFavorite ? 'text-pink-500' : 'text-pink-400'} cursor-pointer`}
          onClick={handleFavorite}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          type="button"
        >
          <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2.2} />
        </button>
        <div className="absolute top-2 right-2 bg-black/70 text-yellow-400 flex items-center gap-1 px-2 py-1 rounded">
          <Star className="w-4 h-4" fill="currentColor" />
          <span className="text-xs font-semibold">{data.rating}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1">
        <div className="font-bold text-white truncate">{data.name}</div>
        <div className="text-gray-400 text-sm truncate">Lanzamiento: {data.released}</div>
      </div>
    </div>
  );
};

export default Card;
