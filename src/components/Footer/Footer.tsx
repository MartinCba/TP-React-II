import  {Link}  from 'react-router-dom'
import { ROUTES } from "../../const/routes"
import Li from '../Li/Li'
import A from "../A/A"

export default function Footer() {
    return (
        <footer className='flex flex-col justify-center items-center bottom-0 w-full bg-neutral-800 text-neutral-500 py-4 px-6'>
            <div className='flex'>
                <div className='m-10'>
                    <ul>
                        <Li className={"cursor-pointer hover:text-white m-2"}  href='https://www.instagram.com/' children='Instagram' componentContent={A}/>
                        <Li className={"cursor-pointer hover:text-white m-2"} href='https://www.facebook.com/' children='Facebook' componentContent={A}/>
                        <Li className={"cursor-pointer hover:text-white m-2"} href='https://x.com/?lang=es' children='X' componentContent={A}/>
                    </ul>
                </div>

                <div className='m-10 ml-40 mr-40'>
                    <ul>
                    <Li className={' cursor-pointer hover:text-white m-2'} ><Link to={ROUTES.home}>Principal</Link></Li>
                    <Li className={' cursor-pointer hover:text-white m-2'} ><Link to={ROUTES.favorites}>Lista de deseos</Link></Li>
                    </ul>
                </div>
                <div className='m-10'>
                    <ul>
                        <Li className={' cursor-pointer hover:text-white m-2'} componentContent={A} onClick={()=>{alert("Fantastico, nos contactaste y resolvimos tu problema!")}} children={"Contactanos"}></Li>
                        <Li className={' cursor-pointer hover:text-white m-2'} componentContent={A} href={'https://www.google.com/maps/place/La+Pampa+1471,+Q8302+Neuqu%C3%A9n/data=!4m2!3m1!1s0x960a323af17cb011:0xba5c6edd6c1f3b08?sa=X&ved=1t:242&ictx=111'} children={"La Pampa 1471"}></Li>
                    </ul>
                </div>
            </div>
            <div className=' text-xs '>© 2025 Valve Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.Todos los precios incluyen IVA (donde sea aplicable).</div>
        </footer>
    )
}