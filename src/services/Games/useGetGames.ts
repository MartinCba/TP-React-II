import { useEffect, useState } from 'react';
import { fetchWithAxios } from '../Axios';
import { Game } from '../../types/Game';

export const useGetGames = (searchHandler?: string) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {

        const data = await fetchWithAxios('/games', {
          page_size: 21,
          ...(searchHandler ? { search: searchHandler } : {})
        });
        setGames(data.results || []);
      } catch (err: any) {
        setError('Error al cargar los juegos');
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [searchHandler]);

      useEffect(()=>{
        console.log(games)
      },[games])

  return { games, loading, error }; //
};
