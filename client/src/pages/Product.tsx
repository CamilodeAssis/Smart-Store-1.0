import { Menu } from '../components/Menu'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const Product = () => {
    const color = '#7e22ce'
    const desc = 'Product Settings';
   
    return (
        <section className="flex ">
            <Menu />
            <div className='w-full'>
                <NavBar color={color} desc={desc}/>
                <div className="flex flex-col  bg-grayBG min-h-screen w-full p-10 gap-6" >
                    <div className=" flex justify-between  gap-6 ">
                        <div className="w-full ">
                            <div className=" grid grid-cols-3 grid-flow-row gap-6" >
                                <Link to='/product/register'>
                                    <div className="w-auto h-32 bg-green-500 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl hover:bg-green-400 ">Cadrastrar Produtos</div>
                                </Link>
                                <Link to='/product/consult'>
                                    <div className="w-auto h-32 bg-blue-500 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl hover:bg-blue-400">Consultar Produtos</div>
                                </Link>
                                <Link to='/product/edit'>
                                <div className="w-auto h-32 bg-orange-500 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl hover:bg-orange-400">Editar Produtos</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
