import Card from '../../components/Card/Card';
import { useGetGames } from '../../services/Games/useGetGames';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/input';
import { useEffect, useState } from 'react';

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { games, loading, error } = useGetGames();

  const obtenerValueBuscador = (text: string) => {
    setInputSearch(text);
  };

  useEffect(() => {
    console.log(inputSearch);
  }, [inputSearch]);

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <Input obtenerValueBuscador={obtenerValueBuscador} />

      <div className='flex flex-wrap justify-center min-h-screen w-full'>
        {loading && <h1 className='text-xl'>Cargando juegos...</h1>}
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
