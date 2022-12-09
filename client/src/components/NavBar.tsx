import { IoNotifications } from 'react-icons/io5'
import img from '../assets/images/eu.jpeg'

export const NavBar = () => {

    return (
        <div className="flex justify-between items-center w-full h-16 bg-white drop-shadow-md p-3">

            <div>ICONE + OPCAO ATUAL</div>

            <div className='flex justify-between items-center gap-3'>
                <IoNotifications size={26} className='text-purple-700' />

                <img className='rounded-full drop-shadow-md w-10 h-10' src={img} alt="" />

            </div>




        </div>
    );
};