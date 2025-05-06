import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Game } from '../../types/Game';
import { fetchWithAxios } from '../../services/Axios';
import Spinner from '../../components/Spinner/Spinner';
import { Heart } from 'lucide-react';
import { getItem, setItem } from '../../services/localStorage';
import { useTranslation } from 'react-i18next';
import DownloadPDFButton from '../../components/DownloadPDFButton/DownloadPDFButton';

const DEFAULT_IMAGE = 'https://gbatemp.net/attachments/scr_1_top_right-png.70711/';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const favs = getItem<number[]>('favorites') || [];
    setIsFavorite(favs.includes(Number(id)));
    const fetchGame = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchWithAxios(`/games/${id}`);
        setGame(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <Spinner />
    </div>
  );
  if (error || !game) return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center">
      <div className="bg-neutral-800 rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-red-500 mb-4 drop-shadow">{t('404 - Juego no encontrado')}</h1>
        <button onClick={() => navigate('/')} className="mt-2 px-6 py-2 bg-yellow-400 text-black rounded font-bold shadow hover:bg-yellow-300 transition">{t('Volver al inicio')}</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center py-8">
      <div className="w-full flex justify-start mb-4 mt-4 px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-yellow-400 hover:text-yellow-200 font-bold text-lg focus:outline-none bg-neutral-800 bg-opacity-90 px-4 py-2 rounded shadow"
          title={t('Volver')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t('Volver')}
        </button>
      </div>
      <div className="w-full max-w-4xl p-8 bg-neutral-800 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-10 mt-4 relative">
        <button
          className={`absolute top-6 right-6 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-colors z-20 ${isFavorite ? 'text-pink-500' : 'text-pink-400'}`}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          type="button"
          onClick={() => {
            const favs = getItem<number[]>('favorites') || [];
            let newFavs;
            if (favs.includes(Number(id))) {
              newFavs = favs.filter(favId => favId !== Number(id));
            } else {
              newFavs = [...favs, Number(id)];
            }
            setItem('favorites', newFavs);
            setIsFavorite(newFavs.includes(Number(id)));
          }}
        >
          <Heart className="w-7 h-7" fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2.2} />
        </button>
        <div className="absolute top-22 right-4.5 z-20">
          <DownloadPDFButton game={game} size="tag" />
        </div>
        <img
          src={game.background_image || DEFAULT_IMAGE}
          alt={game.name}
          className="w-full max-w-xs h-72 object-cover rounded-lg shadow mx-auto md:mx-0"
          onError={e => { (e.currentTarget as HTMLImageElement).src = DEFAULT_IMAGE; }}
        />
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">{game.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-2">
            {game.genres && <span><b>{t('Géneros:')}</b> {game.genres.map(g => g.name).join(', ')}</span>}
            {game.platforms && <span><b>{t('Plataformas')}</b>: {game.platforms.map(p => p.platform.name).join(', ')}</span>}
            {game.developers && <span><b>{t('Desarrolladores')}</b>: {game.developers.map(d => d.name).join(', ')}</span>}
            {game.metacritic && <span><b>{t('Metacritic')}</b>: {game.metacritic}</span>}
            {game.playtime && <span><b>{t('Horas estimadas')}</b>: {game.playtime}h</span>}
            {game.esrb_rating && <span><b>{t('ESRB')}</b>: {game.esrb_rating.name}</span>}
          </div>
          <p className="text-gray-400 mb-2">{t('Lanzamiento')}: {game.released}</p>
          <p className="text-gray-400 mb-2">{t('Rating')}: {game.rating}</p>
          {game.tags && game.tags.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2">
              {game.tags.slice(0, 6).map(tag => (
                <span key={tag.name} className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded text-xs">{tag.name}</span>
              ))}
            </div>
          )}
          {game.website && (
            <a href={game.website} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline mb-2">{t('Sitio web oficial')}</a>
          )}
          {game.stores && game.stores.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2">
              <b className="w-full text-gray-300">{t('Disponible en:')}</b>
              {game.stores.map(s => (
                <a key={s.store.name} href={`https://${s.store.domain}`} target="_blank" rel="noopener noreferrer" className="bg-neutral-700 text-yellow-200 px-2 py-1 rounded text-xs hover:bg-yellow-400 hover:text-black transition">
                  {s.store.name}
                </a>
              ))}
            </div>
          )}
          {game.description_raw && (
            <p className="text-gray-200 mt-4 whitespace-pre-line text-justify">{game.description_raw}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details; 