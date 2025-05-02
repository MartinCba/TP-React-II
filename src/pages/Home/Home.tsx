import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { useGetGames } from '../../services/Games/useGetGames';
// import { useTranslation } from 'react-i18next'; VER MAS TARDE

// const { t } = useTranslation();





const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { games, loading, error } = useGetGames(inputSearch);



  
  const obtenerValueBuscador = (text: string) => {
    setInputSearch(text);
  };

  return (
    <div className='flex justify-center items-center flex-col '>
      <Header />
      <Input obtenerValueBuscador={obtenerValueBuscador} />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
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