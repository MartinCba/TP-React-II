import { useEffect, useState } from 'react';
import { fetchWithAxios } from '../Axios';
import { Game } from '../../types/Game';

export const useGetGameById = (id: number) => {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {

        const data = await fetchWithAxios(`/games/${id}`);
        setGame(data);
      } catch (err: any) {
        setError('Error al cargar los juegos');
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

    //   useEffect(()=>{
    //     console.log(games)
    //   },[games])

  return { game, loading, error }; //
};
