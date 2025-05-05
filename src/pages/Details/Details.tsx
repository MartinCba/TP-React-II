import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useGetGameById } from '../../services/Games/useGetGameById';
import { useSearchParams } from "react-router-dom";
import CardDetails from "../../components/CardDelaits/CardDetails";

const Details = () => {

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { game, loading, error } = useGetGameById(id);
  const [favText, setFavText] = useState("");
  const [isFav, setIsFav] = useState(false);



  useEffect(()=>{
    if(!game) return;
    if(JSON.parse(localStorage.getItem('favorites') || '[]').includes(game.id)){
      setFavText("Quitar de la lista de deseos");
    }else{
      setFavText("Agregar a la lista de deseos");
    }
  },[isFav, game])




  const toggleFavorite = () => {
    if (!game) return;
  
    const stored = localStorage.getItem('favorites');
    let favs: number[] = stored ? JSON.parse(stored) : [];
  
    if (favs.includes(game.id)) {
      favs = favs.filter(fav => fav !== game.id);
      setIsFav(false);
    } else {
      favs.push(game.id);
      setIsFav(true); 
    }
  
    localStorage.setItem('favorites', JSON.stringify(favs));
  };




  return (
    <div className='flex justify-center items-center flex-col '>
      <Header />
      {loading && <img className=' flex mb-600 ' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlzdDBjdmdnOWl1eWlscGM5bGpnZHFjYzh4NHFqdHB1OWl2bXp1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/09Z52rkIsAgRuIKkO6/giphy.gif' ></img>}
      {error && <p className="text-red-500">{error}</p>}



        {game &&<CardDetails game={game} onClick={toggleFavorite} childrenButton={favText}/>}



      <Footer />
    </div>
  )


};

export default Details; 