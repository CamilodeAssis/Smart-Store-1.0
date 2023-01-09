import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { IoNotifications } from 'react-icons/io5'
import img from '../assets/images/eu.jpeg'

type Props = {
    color?: string;
    desc: string;
}

export const NavBar = ({color, desc}: Props) => {

    return (
        <div className="flex justify-between items-center w-full h-16 bg-white drop-shadow-md p-3">

            <div style={{background: color}} className='text-2xl font-bold  text-white rounded-md px-6 py-2'>{desc}</div>

            <div className='flex justify-between items-center gap-3'>
                <IoNotifications size={26} className='text-green-700' />

                <img className='rounded-full drop-shadow-md w-10 h-10' src={img} alt="" />

            </div>




        </div>
    );
};
