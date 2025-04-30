import { useEffect, useState } from 'react';
import { fetchWithAxios } from '../Axios';
import { Game } from '../../types/Game';

export const useGetGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWithAxios('/games', {
          ordering: '-rating',
          page_size: 10,
        });
        setGames(data.results || []);
      } catch (err: any) {
        setError('Error al cargar los juegos');
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  return { games, loading, error };
};
