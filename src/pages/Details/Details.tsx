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

  useEffect(() => {
    if (game) {
      console.log("Game:", game);
    }
  }, [game]);


  








  return (
    <div className='flex justify-center items-center flex-col '>
      <Header />
      {loading && <img className=' flex mb-600 ' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlzdDBjdmdnOWl1eWlscGM5bGpnZHFjYzh4NHFqdHB1OWl2bXp1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/09Z52rkIsAgRuIKkO6/giphy.gif' ></img>}
      {error && <p className="text-red-500">{error}</p>}



        {game &&<CardDetails game={game}/>}



      <Footer />
    </div>
  )


};

export default Details; 