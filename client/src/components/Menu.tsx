import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AllOptions } from "../data/options";
import { OptionsType } from "../types/optionsType";
import { HiMenuAlt3 } from "react-icons/hi";

import { AuthContext } from "../contexts/auth";

export const Menu = () => {
  const { doLogout, user } = useContext(AuthContext);
  const [menuOptions, setMenuOptions] = useState<OptionsType[]>(AllOptions);
  const [isOpen, setIsOpen] = useState(false);

  

  if (user.logged_in_user_type === "admin") {
    return (
      <div
        className={`bg-slate-800 min-h-screen  ${
          isOpen ? "w-72" : "w-16 "
        }  px-4 duration-500`}
      >
        
        <div className="py-5 flex justify-end">
         
          <HiMenuAlt3
            size={26}
            className="cursor-pointer text-white hover:bg-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          />
          
        </div>

        <div className="mt-4 flex flex-col gap-4 relative text-white">

          {menuOptions?.map((menu, index) => (
            <Link
              onClick={() => doLogout(menu.state)}
              to={menu.link}
              key={index}
              className="group flex  items-center text-sm gap-3.5 font-medium p-2 hover:bg-slate-700 rounded-md"
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${index + 2}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={` ${
                  isOpen && "hidden"
                } absolute left-48 bg-white  text-slate-700 whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:z-10 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
     null
    );
  }
};
