import { Button } from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useGetGames } from '../../services/Games/useGetGames';

const Home = () => {
  const { games, loading, error } = useGetGames();

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <div className='flex flex-wrap justify-center min-h-screen w-full'>
        {loading && <p>Cargando juegos...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {
          games.map((game) => (
            <Card
              key={game.id}
              name={game.name}
              background_image={game.background_image}
              rating={game.rating}
              released={game.released}
            />
          ))
        }
      </div>

      <Footer />
    </div>
  );
};

export default Home; 