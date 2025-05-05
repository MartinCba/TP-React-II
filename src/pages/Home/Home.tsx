import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { useGetGames } from '../../services/Games/useGetGames';
import Title from '../../components/Title/Title';

const Home = () => {
  const { games, loading, error } = useGetGames();
  const firstGame = games[0];

  return (
    <div className="p-8 min-h-screen bg-neutral-900">
      <Title className="mb-4">Home</Title>
      <p className="mb-4 text-lg">Tailwind está funcionando correctamente.</p>
      <Button variant="danger" onClick={() => alert('¡Tailwind funciona!')}>
        Probar componente
      </Button>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {loading && <p>Cargando juegos...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && games.slice(0, 20).map((game) => (
          <Card
            key={game.id}
            data={game}
            onDelete={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Home; 