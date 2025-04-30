
import Card from '../../components/Card/Card';
import { useGetGames } from '../../services/Games/useGetGames';
import  Header  from "../../components/Header/Header";
import  Footer  from "../../components/Footer/Footer";

const Home = () => {
  const { games, loading, error } = useGetGames();
  const firstGame = games[0];

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />


      <div className='min-h-screen w-full'>
        {loading && <h1 className='m- text-xl'>Cargando juegos...</h1>}
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


      <Footer />
    </div>
  );
};

export default Home; 