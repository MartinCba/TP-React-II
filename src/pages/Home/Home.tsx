import { useState } from 'react';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { useGetGames } from '../../services/Games/useGetGames';
import { useNavigate } from 'react-router';
import {ROUTES} from "../../const/routes"
// import { useTranslation } from 'react-i18next'; VER MAS TARDE

// const { t } = useTranslation();





const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { games, loading, error } = useGetGames(inputSearch);
  const navigate = useNavigate()

  const gameDetail = (id: number) =>{
    navigate(ROUTES.details+`/?id=${id}`)
  }







  
  const obtenerValueBuscador = (text: string) => {
    setInputSearch(text);
  };

  return (
    <div className='flex justify-center items-center flex-col '>
      <Header />
      <Input obtenerValueBuscador={obtenerValueBuscador} />

        {loading && <img className=' flex mb-600 ' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlzdDBjdmdnOWl1eWlscGM5bGpnZHFjYzh4NHFqdHB1OWl2bXp1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/09Z52rkIsAgRuIKkO6/giphy.gif' ></img>}
        {games.length === 0 && <img className=' flex mb-600 ' src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDI1b3dqbGp1eDVxODBlM3Q0Z29ndzQ4a3RweGpkOXh4NDk3YTR6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n6sYAGZPya5QhFlLxq/giphy.gif'></img>}
        {error && <p className="text-red-500">{error}</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {games &&
          games.map((game) => (
            <Card
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              rating={game.rating}
              released={game.released}
              onClick={gameDetail}
            />
          ))
        }
      </div>

      <Footer />
    </div>
  );
};

export default Home; 