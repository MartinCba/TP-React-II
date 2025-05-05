import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { getGameById } from "../../services/Games/useGetGameById";
import { Game } from '../../types/Game';
import { useNavigate } from 'react-router';
import { ROUTES } from "../../const/routes"

const Favorites = () => {
  const [listFavId, setListFavId] = useState(JSON.parse(localStorage.getItem('favorites') || '[]'));
  const [gamesFav, setGamesFav] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchFavGames = async () => {
      setLoading(true);
      setError(false);
      try {
        const games = await Promise.all(listFavId.map((id: number) => getGameById(id)));
        setGamesFav(games);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (listFavId.length > 0) {
      fetchFavGames();
    } else {
      setGamesFav([]);
      setLoading(false);
    }
  }, [listFavId]);

  const gameDetail = (id: number) => {
    navigate(ROUTES.details + `/?id=${id}`)
  }

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />


        {loading && <img className=' flex mb-600 ' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlzdDBjdmdnOWl1eWlscGM5bGpnZHFjYzh4NHFqdHB1OWl2bXp1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/09Z52rkIsAgRuIKkO6/giphy.gif' ></img>}
        {!loading && gamesFav.length === 0 && <div className=' flex mb-600 mt-50 '>No hay juegos en tu lista  😞</div>}
        {error && <p className="text-red-500">{error}</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-100'>
        {gamesFav &&
          gamesFav.map((game) => (
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

export default Favorites; 