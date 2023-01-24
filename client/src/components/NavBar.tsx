import React, { ReactNode, useContext } from "react";
import { IconType } from "react-icons";
import { IoNotifications, IoStorefrontSharp } from "react-icons/io5";

import { AiOutlineSetting, AiOutlineLogin } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";

import { AuthContext } from "../contexts/auth";
import { Link } from "react-router-dom";

type Props = {
  color?: string;
  desc?: string;
};

const options = [
  { name: "DEPARTAMENTOS" },
  { name: "NOVIDADES" },
  { name: "PROMOÇÕES" },
  { name: "ELETRONÔNICOS" },
];

export const NavBar = ({ color, desc }: Props) => {
  const { user } = useContext(AuthContext);

  switch (user.logged_in_user_type) {
    case "admin":
      return (
        <>
          <div className="flex justify-between items-center w-full h-16 bg-slate-800  p-3">
            <div className="flex justify-center items-center gap-2 p-1 text-white">
              <IoStorefrontSharp size={34} />

              <span className="text-3xl font-bold font-playfair">
                Smart Store
              </span>
            </div>

            <div className="flex justify-between items-center gap-3 text-white">
              <div
                className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border `}
              >
                <img src={user.url + user.logged_in_user_image} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full bg-slate-400 h-7 px-2 ">
            {options &&
              options.map((options, index) => (
                <ul
                  key={index}
                  className="flex justify-center items-center h-full text-white  hover:bg-slate-200 p-2 cursor-pointer"
                >
                  <li> {options.name}</li>
                </ul>
              ))}
          </div>
        </>
      );
      break;
    case "user":
      return (
        <>
          <div className="flex justify-between items-center w-full h-16 bg-slate-800  p-3">
            <div
              // style={{ color: color }}
              className="flex justify-center items-center gap-2 p-1 text-white"
            >
              <IoStorefrontSharp size={34} />
              <span className="text-3xl font-bold font-playfair">
                Smart Store
              </span>
            </div>

            <div className="flex justify-between items-center gap-3 text-white">
              <IoNotifications size={24}/>
              <div className="flex justify-center items-center border rounded p-2 gap-2 cursor-pointer hover:bg-white hover:text-slate-800">
              <IoMdCart size={24} />
              <span>CARRINHO</span>
              </div>
              <div
                // style={{ border: `1px solid ${color}` }}
                className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border `}
              >
                <img src={user.url + user.logged_in_user_image} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full bg-slate-400 h-7 px-2 ">
            {options &&
              options.map((options, index) => (
                <ul
                  key={index}
                  className="flex justify-center items-center h-full text-white  hover:bg-slate-200 p-2 cursor-pointer"
                >
                  <li> {options.name}</li>
                </ul>
              ))}
          </div>
        </>
      );
      break;
    default:
      return (
        <div className="flex justify-between items-center w-full h-24 bg-slate-800 p-6">
          <div className="text-white font-bold flex justify-center items-center gap-2">
            <IoStorefrontSharp size={60} />
            <span className="text-4xl font-playfair">Smart Store</span>
          </div>
          <div className="text-white font-bold gap-2">
            <Link
              className="flex justify-center items-center gap-2"
              to="/login"
            >
              <AiOutlineLogin size={20} />
              <span>Faça Login</span>
            </Link>
          </div>
        </div>
      );
  }
};
