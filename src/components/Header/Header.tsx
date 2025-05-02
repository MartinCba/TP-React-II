import {Button} from "../Button/Button"
import Language from '../Language/Language'
import { useNavigate } from 'react-router';
import {ROUTES} from "../../const/routes"


export default function Header() {

  const navigate = useNavigate();

  const navigateToHome = () =>{navigate(ROUTES.home)}
  const navigateToFavorites = () =>{navigate(ROUTES.favorites)}

  return (
    <header className='flex justify-center border-t-0 border w-6xl rounded-b-2xl bg-neutral-800 text-white sticky top-0 shadow-2xl '>
        <Button children={"Principal"} onClick={navigateToHome} className={"cursor-pointer ml-10 mr-10 mt-7 mb-7 border p-2 rounded-xl hover:bg-gray-50 hover:text-black bg-neutral-800"} disabled={false}/>
        <Button children={"Lista de deseos"} onClick={navigateToFavorites} className={"cursor-pointer ml-10 mr-10 mt-7 mb-7 border p-2 rounded-xl hover:bg-gray-50 hover:text-black bg-neutral-800"} disabled={false}/>
        <Language />
    </header>
  )
}