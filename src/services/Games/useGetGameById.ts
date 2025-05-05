import { useEffect, useState } from 'react';
import { fetchWithAxios } from '../Axios';
import { Game } from '../../types/Game';

export const getGameById = async (id: number): Promise<Game> => {
  return await fetchWithAxios(`/games/${id}`);
};

export const useGetGameById = (id: number) => {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getGameById(id);
        setGame(data);
      } catch (err: any) {
        setError('Error al cargar el juego');
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  return { game, loading, error };
};
