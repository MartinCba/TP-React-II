
import Card from '../../components/Card/Card';
import { useGetGames } from '../../services/Games/useGetGames';
import  Header  from "../../components/Header/Header";
import  Footer  from "../../components/Footer/Footer";

const Home = () => {
  const { games, loading, error } = useGetGames();
  const firstGame = games[1];

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />


      <div className='flex flex-wrap flex-initial  min-h-screen w-full '>
        {loading && <h1 className='m- text-xl'>Cargando juegos...</h1>}
        {error && <p className="text-red-500">{error}</p>}
        {
          games.map((game)=>{
            return(
              <Card
              name={game.name}
              background_image={game.background_image}
              rating={game.rating}
              released={game.released}
            />
            )
          })
        }
      </div>


      <Footer />
    </div>
  );
};

export default Home; 