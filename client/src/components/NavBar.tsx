import React, { ReactNode, useContext } from 'react';
import { IconType } from 'react-icons';
import { IoNotificationsOutline } from 'react-icons/io5'
import { AiOutlineSetting } from 'react-icons/ai'

import { AuthContext } from "../contexts/auth";

type Props = {
    color?: string;
    desc: string
}

export const NavBar = ({color, desc}: Props) => {

    const { user } = useContext(AuthContext)


    return (
        <div className="flex justify-between items-center w-full h-16 bg-white drop-shadow-md p-3">

            <div style={{background: color, border: `1px solid ${color}`}} className='text-2xl font-bold  text-white rounded-md px-6 py-2'>{desc}</div>
            <div className='flex justify-between items-center gap-3'>

                <AiOutlineSetting size={26} color={color} />
                <IoNotificationsOutline size={26} color={color} />  
                <div style={{ border: `1px solid ${color}`}} className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center `}>
                <img  src={user.url + user.logged_in_user_image} alt="" />
                </div>
                
            </div>




        </div>
    );
};
