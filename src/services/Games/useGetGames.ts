import { useEffect, useState } from 'react';
import { fetchWithAxios } from '../Axios';
import { Game } from '../../types/Game';

export type FilterType = 'rating' | 'metacritic' | 'released' | 'popular';

function getRecentDates(months: number = 18) {
  const today = new Date();
  const past = new Date();
  past.setMonth(today.getMonth() - months);
  const toDate = today.toISOString().split('T')[0];
  const fromDate = past.toISOString().split('T')[0];
  return `${fromDate},${toDate}`;
}

export const useGetGames = (filter: FilterType, page: number = 1, search: string = '') => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        let ordering = '';
        const extraParams: Record<string, string> = {};
        if (filter === 'rating') ordering = '-rating';
        if (filter === 'metacritic') ordering = '-metacritic';
        if (filter === 'released') {
          ordering = '-added';
          extraParams.dates = getRecentDates(18);
        }
        if (filter === 'popular') ordering = '-added';
        if (search) extraParams.search = search;
        const data = await fetchWithAxios('/games', {
          ordering,
          page_size: 20,
          page,
          ...extraParams,
        });
        setGames(data.results || []);
        setHasNext(!!data.next);
        setHasPrev(!!data.previous);
      } catch {
        setError('Error al cargar los juegos');
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [filter, page, search]);

  return { games, loading, error, hasNext, hasPrev };
};
