import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoNotifications } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";

import defaultUser from "../../../public/images/default-user.png";

import { NavLinks } from "./NavLinks";

import { AuthContext } from "../../contexts/auth";
import { CartContext } from "../../contexts/cart";

type Props = {
  isLogin?: boolean;
};

export const NavBar = ({ isLogin }: Props) => {
  const { user, doLogout } = useContext(AuthContext);
  const { productsCart } = useContext(CartContext);

  const dropMenu = () => {
    const menu = document.getElementById("dropMenu");
    if (menu?.classList.contains("drop-menu")) {
      menu?.classList.remove("drop-menu");
    } else {
      menu?.classList.add("drop-menu");
    }
  };

  useEffect(() => {}, []);

  switch (user.logged_in_user_type) {
    case "admin":
      return (
        <>
          <div className="flex justify-center items-center w-full h-20 bg-slate-800 ">
            <div className="w-4/5 flex justify-between items-center">
              <div className="flex justify-center items-center  gap-2  text-white">
                <span className="text-3xl font-bold hover:text-orange-500">
                  {" "}
                  <Link to="/">SMART STORE</Link>
                </span>
              </div>

              <div className="flex flex-1 px-20 gap-4">
                <input
                  className="w-full rounded outline-none focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
                <button className="bg-orange-500 hover:bg-orange-400 px-2 py-1 text-white rounded  ">
                  Buscar
                </button>
              </div>

              <div className="flex justify-between items-center gap-3 text-white">
                <Link to="/cart">
                  <div className="flex justify-center items-center border rounded p-2 gap-2 cursor-pointer hover:bg-white hover:text-slate-800 group:">
                    <IoMdCart size={24} />
                    <span>CARRINHO</span>
                    <span
                      className={`${
                        Object.keys(productsCart).length > 0
                          ? "bg-orange-500 rounded-full w-6 h-6 text-center group-hover:text-white"
                          : "hidden"
                      }`}
                    >
                      {Object.keys(productsCart).length}
                    </span>
                  </div>
                </Link>
                <IoNotifications size={30} />

                <button
                  onClick={() => doLogout(true)}
                  className="flex justify-center items-center gap-2 hover:bg-slate-700 rounded p-1"
                >
                  <span>Logout</span>
                  <AiOutlineLogout size={30} />
                </button>

                <div
                  className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border `}
                >
                  <img src={user.url + user.logged_in_user_image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-orange-500 h-auto flex justify-center items-center ">
            <div className="w-4/5 flex h-full items-center  gap-4  ">
              <NavLinks />
            </div>
          </div>
        </>
      );
      break;
    case "user":
      return (
        <>
          <div className="flex justify-center items-center w-full h-20 bg-slate-800 ">
            <div className="w-4/5 flex justify-between items-center">
              <div className="flex justify-center items-center  gap-2  text-white">
                <span className="text-3xl font-bold hover:text-orange-500">
                  <Link to="/">SMART STORE</Link>
                </span>
              </div>

              <div className="flex flex-1 px-20 gap-4">
                <input
                  className="w-full rounded outline-none focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
                <button className="bg-orange-500 hover:bg-orange-400 px-2 py-1 text-white rounded ">
                  Buscar
                </button>
              </div>

              <div className="flex justify-between items-center gap-3 text-white">
                <Link to="/cart">
                  <div className="flex justify-center items-center border rounded p-2 gap-2 cursor-pointer hover:bg-white hover:text-slate-800 group">
                    <IoMdCart size={24} />
                    <span>CARRINHO</span>
                    <span
                      className={`${
                        Object.keys(productsCart).length > 0
                          ? "bg-orange-500 rounded-full w-6 h-6 text-center group-hover:text-white  "
                          : "hidden"
                      }`}
                    >
                      {Object.keys(productsCart).length}
                    </span>
                  </div>
                </Link>
                <IoNotifications size={30} />
                <button
                  onClick={() => doLogout(true)}
                  className="flex justify-center items-center gap-2 hover:bg-slate-700 rounded p-1"
                >
                  <span>Logout</span>
                  <AiOutlineLogout size={30} />
                </button>

                <div
                  className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border `}
                >
                  <img src={user.url + user.logged_in_user_image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-orange-500 h-auto flex justify-center items-center ">
            <div className="w-4/5 flex h-full items-center  gap-4  ">
              <NavLinks />
            </div>
          </div>
        </>
      );
      break;
    default:
      return (
        <>
          <div className="flex justify-center items-center w-full h-20 bg-slate-800 ">
            <div className="w-4/5 flex justify-between items-center">
              <div className="flex justify-center items-center  gap-2  text-white">
                {/* <IoStorefrontSharp size={34} /> */}
                <span className="text-3xl font-bold hover:text-orange-500 ">
                  <Link to="/">SMART STORE</Link>
                </span>
              </div>

              <div
                className={`${isLogin ? "hidden" : "flex flex-1 px-20 gap-4"}`}
              >
                <input
                  className="w-full rounded outline-none focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
                <button className="bg-orange-500 hover:bg-orange-400 px-2 py-1 text-white rounded ">
                  Buscar
                </button>
              </div>

              <div className="flex justify-between items-center gap-3 text-white">
                {!isLogin && (
                  <>
                    <Link to='/cart'>
                      <div className="flex justify-center items-center border rounded p-2 gap-2 cursor-pointer hover:bg-white hover:text-slate-800">
                        <IoMdCart size={24} />
                        <span>CARRINHO</span>
                        <span
                          className={`${
                            Object.keys(productsCart).length > 0
                              ? "bg-orange-500 rounded-full w-6 h-6 text-center"
                              : "hidden"
                          }`}
                        >
                          {Object.keys(productsCart).length}
                        </span>
                      </div>
                    </Link>
                    <IoNotifications size={30} />
                  </>
                )}

                <div className="flex flex-col items-center text-xs">
                  <span>
                    Faça{" "}
                    <Link className="font-bold underline" to="/login">
                      Login
                    </Link>{" "}
                    ou
                  </span>
                  <span>
                    <Link className="font-bold underline" to="/register">
                      Cadastre-se
                    </Link>
                  </span>
                </div>
                {/* )} */}

                <div
                  className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border `}
                >
                  {user ? (
                    <img src={user.url + user.logged_in_user_image} alt="" />
                  ) : (
                    <img src={defaultUser} alt="" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isLogin
                ? "w-full bg-orange-500 h-4"
                : "w-full bg-orange-500 h-auto flex justify-center items-center"
            }`}
          >
            <div
              className={`${
                isLogin ? "hidden" : "w-4/5 flex h-full items-center  gap-4"
              }`}
            >
              <NavLinks />
            </div>
          </div>
        </>
      );
  }
};
