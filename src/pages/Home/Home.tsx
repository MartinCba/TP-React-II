import Card from '../../components/Card/Card';
import { useGetGames, FilterType } from '../../services/Games/useGetGames';
import FilterBar from '../../components/FilterBar/FilterBar';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner';
import { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [filter, setFilter] = useState<FilterType>('popular');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { games, loading, error, hasNext, hasPrev } = useGetGames(filter, page, search);
  const { t } = useTranslation();

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    setPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="p-8 min-h-screen bg-neutral-900">
      <div className="mb-6">
        <FilterBar value={filter} onChange={handleFilterChange} />
      </div>
      <div className="mb-6 max-w-xs">
        <InputField
          value={search}
          onChange={handleSearchChange}
          placeholder={t('Buscar juegos...')}
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <Spinner />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {error && <p className="text-red-500">{error}</p>}
          {!error && games.length === 0 && (
            <p className="text-gray-400 col-span-full text-center text-lg">{t('No se encontraron juegos para tu búsqueda.')}</p>
          )}
          {!error && games.map((game) => (
            <Card
              key={game.id}
              data={game}
            />
          ))}
        </div>
      )}
      {!loading && games.length > 0 && (
        <Pagination page={page} onPageChange={setPage} hasNext={hasNext} hasPrev={hasPrev} />
      )}
    </div>
  );
};

export default Home; 