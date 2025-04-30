import { Button } from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { useGetGames } from '../../services/Games/useGetGames';

const Home = () => {
  const { games, loading, error } = useGetGames();
  const firstGame = games[0];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Home</h1>
      <p className="mb-4 text-lg">Tailwind está funcionando correctamente.</p>
      <Button variant="danger" onClick={() => alert('¡Tailwind funciona!')}>
        Probar componente
      </Button>
      <div className="mt-8">
        {loading && <p>Cargando juegos...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {firstGame && (
          <Card
            name={firstGame.name}
            background_image={firstGame.background_image}
            rating={firstGame.rating}
            released={firstGame.released}
          />
        )}
      </div>
    </div>
  );
};

export default Home; 