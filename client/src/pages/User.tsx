import { Menu } from '../components/Menu'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'



import {AuthContext} from '../contexts/auth'

export const User = () => {
    const {user} = useContext(AuthContext);

    console.log

    const color = '#db2777'
    const desc = 'User Settings';
   
    if (user.logged_in_user_type === 'admin') {
        return (
            <section className="flex ">
                <Menu />
                <div className='w-full'>
                    <NavBar color={color} desc={desc}/>
                    <div className="flex flex-col  bg-grayBG min-h-screen w-full p-10 gap-6" >
                        <div className=" flex justify-between  gap-6 ">
                            <div className="w-full ">
                                <div className=" grid grid-cols-3 grid-flow-row gap-6" >
                                    <Link to='/user/register'>
                                        <div className="w-auto h-32 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-pink-400 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl  ">Cadrastrar usuarios</div>
                                    </Link>
                                    <Link to='/user/consult'>
                                        <div className="w-auto h-32 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-pink-400 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl ">Consultar Usuarios</div>
                                    </Link>
    
                                    <div className="w-auto h-32 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-pink-400 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl ">Editar Usuarios</div>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        );
    } else {
        return(
            <div>usuario comum</div>
        );
    }
    
}
