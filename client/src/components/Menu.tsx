import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Options } from '../helpers/data/options'
import { OptionsType } from '../types/optionsType'
import { HiMenuAlt3 } from 'react-icons/hi'

export const Menu = () => {

    const [menuOptions, setMenuOptions] = useState<OptionsType[]>(Options);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-purple-700 min-h-screen ${isOpen ? 'w-72' : 'w-16'}  px-4 duration-500`}>
            
            <div className="py-3 flex justify-end">
                <HiMenuAlt3 size={26} className="cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className='mt-4 flex flex-col gap-4 relative text-white'>
                {
                    menuOptions?.map((menu, index) => (
                        <Link to={menu.link} key={index} className="group flex  items-center text-sm gap-3.5 font-medium p-2 hover:bg-purple-600 rounded-md">
                            <div >{React.createElement(menu.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${index + 2}00ms`
                                }}
                                className={`wjitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                {menu.name}
                            </h2>
                            <h2
                                className={` ${isOpen && "hidden"
                                    } absolute left-48 bg-white  text-slate-700 whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:z-10 group-hover:w-fit`}>
                                {menu.name}
                            </h2>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}