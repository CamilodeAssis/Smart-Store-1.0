import { Menu } from '../components/Menu'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const User = () => {
    
    return (
        <section className="flex ">
            <Menu />
            <div className='w-full'>
                <NavBar />
                <div className="flex flex-col  bg-grayBG min-h-screen w-full p-10 gap-6" >
                    <div className=" flex justify-between  gap-6 ">
                        <div className="w-full ">
                            <div className=" grid grid-cols-3 grid-flow-row gap-6" >
                                <Link to='/user/register'>
                                    <div className="w-auto h-32 bg-green-500 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl hover:bg-green-400 ">Cadrastrar usuarios</div>
                                </Link>
                                <Link to='/user/consult'>
                                    <div className="w-auto h-32 bg-blue-500 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl hover:bg-blue-400">Consultar Usuarios</div>
                                </Link>

                                <div className="w-auto h-32 bg-orange-500 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl hover:bg-orange-400">Editar Usuarios</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}