import { useEffect, useState } from 'react';
import { getItem } from '../../services/localStorage';
import { fetchWithAxios } from '../../services/Axios';
import { Game } from '../../types/Game';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Pagination from '../../components/Pagination/Pagination';
import { useTranslation } from 'react-i18next';

const Favorites = () => {
  const [favorites, setFavorites] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      const favIds = getItem<number[]>('favorites') || [];
      if (favIds.length === 0) {
        setFavorites([]);
        setLoading(false);
        return;
      }
      try {
        const promises = favIds.map(id => fetchWithAxios(`/games/${id}`));
        const games = await Promise.all(promises);
        setFavorites(games);
      } catch {
        setFavorites([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'favorites') fetchFavorites();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    const lastPage = Math.max(1, Math.ceil(favorites.length / PAGE_SIZE));
    if (page > lastPage) {
      setPage(lastPage);
    }
  }, [favorites, page]);

  const refreshFavorites = () => {
    const favIds = getItem<number[]>('favorites') || [];
    if (favIds.length === 0) {
      setFavorites([]);
      return;
    }
    Promise.all(favIds.map(id => fetchWithAxios(`/games/${id}`)))
      .then(setFavorites)
      .catch(() => setFavorites([]));
  };

  if (loading) return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <Spinner />
    </div>
  );

  if (favorites.length === 0) {
    return (
      <div className="fixed inset-0 bg-neutral-900">
        <div className="w-full flex justify-start pt-28 px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-yellow-400 hover:text-yellow-200 font-bold text-lg focus:outline-none bg-neutral-800 bg-opacity-90 px-4 py-2 rounded shadow cursor-pointer"
            title={t('Volver')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            {t('Volver')}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
          <Heart className="w-16 h-16 mb-4 text-pink-400 animate-pulse" fill="none" strokeWidth={2.2} />
          <h1 className="text-3xl font-extrabold text-yellow-400 mb-2 drop-shadow">{t('No tienes favoritos aún')}</h1>
          <p className="text-gray-400 text-lg max-w-md">{t('Agrega juegos a favoritos haciendo click en el corazón de cada juego.')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="w-full flex justify-start pt-12 px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-yellow-400 hover:text-yellow-200 font-bold text-lg focus:outline-none bg-neutral-800 bg-opacity-90 px-4 py-2 rounded shadow cursor-pointer"
          title={t('Volver')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t('Volver')}
        </button>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <Title className="mb-6">{t('Tus Favoritos')}</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favorites.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE).map(game => (
            <Card key={game.id} data={game} onFavorite={refreshFavorites} />
          ))}
        </div>
        {favorites.length > PAGE_SIZE && (
          <Pagination
            page={page}
            onPageChange={setPage}
            hasNext={page * PAGE_SIZE < favorites.length}
            hasPrev={page > 1}
          />
        )}
      </div>
    </div>
  );
};

export default Favorites; 