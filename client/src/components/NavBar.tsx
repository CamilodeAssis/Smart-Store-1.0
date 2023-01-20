import React, { ReactNode, useContext } from "react";
import { IconType } from "react-icons";
import { IoNotificationsOutline, IoStorefrontSharp } from "react-icons/io5";

import { AiOutlineSetting, AiOutlineLogin } from "react-icons/ai";

import { AuthContext } from "../contexts/auth";
import { Link } from "react-router-dom";

type Props = {
  color?: string;
  desc?: string;
};

export const NavBar = ({ color, desc }: Props) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <div className="flex justify-between items-center w-full h-16 bg-white drop-shadow-md p-3">
        <div style={{color: color}} className="flex justify-center items-center gap-2 p-1">
          <IoStorefrontSharp size={34} />
          <span className="text-3xl font-bold"> Smart Store</span>
        </div>

        <div className="flex justify-between items-center gap-3">
          <AiOutlineSetting size={26} color={color} />
          <IoNotificationsOutline size={26} color={color} />
          <div
            style={{ border: `1px solid ${color}` }}
            className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center `}
          >
            <img src={user.url + user.logged_in_user_image} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center w-full h-24 bg-blue-500 drop-shadow-md p-6">
        <div className="text-white font-bold flex justify-center items-center gap-2">
          <IoStorefrontSharp size={40} />
          <span className="text-4xl">Smart Store</span>
        </div>
        <div className="text-white font-bold gap-2">
          <Link className="flex justify-center items-center gap-2" to="/login">
            <AiOutlineLogin size={20} />
            <span>Faça Login</span>
          </Link>
        </div>
      </div>
    );
  }
};
