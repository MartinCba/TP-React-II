import Button from "../Button/Button"
import Language from '../Language/Language'
import { useNavigate } from 'react-router';
import {ROUTES} from "../../const/routes"


export default function Header() {

  const navigate = useNavigate();

  const navigateToHome = () =>{navigate(ROUTES.home)}
  const navigateToDetails = () =>{navigate(ROUTES.details)}
  const navigateToFavorites = () =>{navigate(ROUTES.favorites)}

  return (
    <header className='flex justify-center border-t-0 border w-4xl rounded-b-3xl bg-neutral-800 text-white sticky top-0 shadow-2xl  '>
        <Button content={"Principal"} navigateTo={navigateToHome}/>
        <Button content={"Lista de deseos"} navigateTo={navigateToFavorites} />
        <Button content={"Detalles"} navigateTo={navigateToDetails}/>
        <Language />
    </header>
  )
}
