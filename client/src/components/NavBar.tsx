import React, { ReactNode, useContext } from 'react';
import { IconType } from 'react-icons';
import { IoNotifications } from 'react-icons/io5'

import { AuthContext } from "../contexts/auth";

type Props = {
    color?: string;
    desc: string
}

export const NavBar = ({color, desc}: Props) => {

    const { user } = useContext(AuthContext)


    return (
        <div className="flex justify-between items-center w-full h-16 bg-white drop-shadow-md p-3">

            <div style={{background: color}} className='text-2xl font-bold  text-white rounded-md px-6 py-2'>{desc}</div>
            <div className='flex justify-between items-center gap-3'>
                <IoNotifications size={26} className='text-green-700' />
                
                <div className=' w-12 h-12 rounded-full overflow-hidden flex justify-center items-center'>
                <img  src={user.url + user.logged_in_user_image} alt="" />
                </div>
                
            </div>




        </div>
    );
};
