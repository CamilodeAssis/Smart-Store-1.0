import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Menu, Switch } from "@headlessui/react";

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
            <div className="w-full px-2 lg:p-0 lg:w-4/5 flex  justify-between items-center">
              <div className="flex  justify-center items-center  gap-2  text-white">
                <span className="text md:text-lg xl:text-3xl font-bold hover:text-orange-500">
                  {" "}
                  <Link className=" hidden sm:block" to="/">
                    SMART STORE
                  </Link>
                  <Link className="sm:hidden" to="/">
                    ST
                  </Link>
                </span>
              </div>

              <div className="flex flex-1 px-4 xl:px-12 gap-4">
                <input
                  className="w-full rounded outline-none focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
                <button className="bg-orange-500 hover:bg-orange-400 text-sm sm:text-base p-0.5  sm:px-2 sm:py-1 text-white rounded  ">
                  Buscar
                </button>
              </div>

              {/* MOBILE BUTTON V------------------------------------------------------------------------------------------------------------------------------*/}
              <Menu
                as="div"
                className="relative sm:hidden flex justify-center items-center  bg-green rounded  font-bold text-white p-1  sm:w-auto  text-lg text-bold "
              >
                <Menu.Button className="flex justify-center items-center w-full text-lg">
                  <div
                    className={`w-10 h-10 rounded-full overflow-hidden flex justify-center items-center border cursor-pointer `}
                  >
                    <img src={user.url + user.logged_in_user_image} alt="" />
                  </div>
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute -right-2 mt-[120px] w-40  text-white bg-slate-800  rounded shadow z-50">
                  <div className="flex flex-col justify-center items-center cursor-pointer w-full">
                    <Link
                      className="flex justify-center items-center w-full hover:bg-slate-700 rounded text-base gap-2 p-1"
                      to="/cart"
                    >
                      <IoMdCart size={16} />
                      CARRINHO
                      <span
                      className={`${
                        Object.keys(productsCart).length > 0
                          ? "bg-orange-500 rounded-full w-4 h-4 text-center group-hover:text-white text-xs"
                          : "hidden"
                      }`}
                    >
                      {Object.keys(productsCart).length}
                    </span>
                    </Link>
                    <button
                      onClick={() => doLogout(true)}
                      className="flex justify-center items-center w-full hover:bg-slate-700 rounded text-base gap-2 p-1"
                    >
                      <AiOutlineLogout size={16} />
                      LOGOUT
                    </button>
                  </div>
                </Menu.Items>
              </Menu>
              {/* MOBILE BUTTON  ^-------------------------------------------------------------------------------------------------------------------------------*/}

              <div className="sm:flex justify-between items-center gap-1 md:gap-3 text-white hidden ">
                <Link to="/cart">
                  <div className="flex justify-center items-center border rounded  p-1 md:p-2 gap-2 cursor-pointer  hover:bg-white hover:text-slate-800 group">
                    <IoMdCart size={24} />
                    <span className="xl:flex hidden">CARRINHO</span>
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

                <button
                  onClick={() => doLogout(true)}
                  className="flex justify-center items-center gap-2 hover:bg-slate-700 rounded p-1"
                >
                  <span className="hidden xl:flex">Logout</span>
                  <AiOutlineLogout size={24} />
                </button>

                <div
                  className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border `}
                >
                  <img src={user.url + user.logged_in_user_image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-orange-500 h-auto flex sm:justify-center items-center ">
            <div className="sm:w-4/5 flex h-full items-center  xl:gap-4  ">
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
            <div className="w-full px-2 lg:p-0 lg:w-4/5 flex  justify-between items-center">
              <div className="flex  justify-center items-center  gap-2  text-white">
                <span className="text md:text-lg xl:text-3xl font-bold hover:text-orange-500">
                  {" "}
                  <Link className=" hidden sm:block" to="/">
                    SMART STORE
                  </Link>
                  <Link className="sm:hidden" to="/">
                    ST
                  </Link>
                </span>
              </div>

              <div className="flex flex-1 px-4 xl:px-12 gap-4">
                <input
                  className="w-full rounded outline-none focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
                <button className="bg-orange-500 hover:bg-orange-400 text-sm sm:text-base p-0.5  sm:px-2 sm:py-1 text-white rounded  ">
                  Buscar
                </button>
              </div>

              {/* MOBILE BUTTON V------------------------------------------------------------------------------------------------------------------------------*/}
              <Menu
                as="div"
                className="relative sm:hidden flex justify-center items-center  bg-green rounded  font-bold text-white p-1  sm:w-auto  text-lg text-bold "
              >
                <Menu.Button className="flex justify-center items-center w-full text-lg">
                  <div
                    className={`w-10 h-10 rounded-full overflow-hidden flex justify-center items-center border cursor-pointer `}
                  >
                    <img src={user.url + user.logged_in_user_image} alt="" />
                  </div>
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute -right-2 mt-[120px] w-40  text-white bg-slate-800  rounded shadow z-50">
                  <div className="flex flex-col justify-center items-center cursor-pointer w-full">
                    <Link
                      className="flex justify-center items-center w-full hover:bg-slate-700 rounded text-base gap-2 p-1"
                      to="/cart"
                    >
                      <IoMdCart size={16} />
                      <span className="">CARRINHO</span>
                    <span
                      className={`${
                        Object.keys(productsCart).length > 0
                          ? "bg-orange-500 rounded-full w-6 h-6 text-center group-hover:text-white"
                          : "hidden"
                      }`}
                    >
                      {Object.keys(productsCart).length}
                    </span>
                    </Link>
                    <button
                      onClick={() => doLogout(true)}
                      className="flex justify-center items-center w-full hover:bg-slate-700 rounded text-base gap-2 p-1"
                    >
                      <AiOutlineLogout size={16} />
                      LOGOUT
                    </button>
                  </div>
                </Menu.Items>
              </Menu>
              {/* MOBILE BUTTON  ^-------------------------------------------------------------------------------------------------------------------------------*/}

              <div className="sm:flex justify-between items-center gap-1 md:gap-3 text-white hidden ">
                <Link to="/cart">
                  <div className="flex justify-center items-center border rounded  p-1 md:p-2 gap-2 cursor-pointer  hover:bg-white hover:text-slate-800 group">
                    <IoMdCart size={24} />
                    <span className="xl:flex hidden">CARRINHO</span>
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

                <button
                  onClick={() => doLogout(true)}
                  className="flex justify-center items-center gap-2 hover:bg-slate-700 rounded p-1"
                >
                  <span className="hidden xl:flex">Logout</span>
                  <AiOutlineLogout size={24} />
                </button>

                <div
                  className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border `}
                >
                  <img src={user.url + user.logged_in_user_image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-orange-500 h-auto flex sm:justify-center items-center ">
            <div className="sm:w-4/5 flex h-full items-center  xl:gap-4  ">
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
            <div className={`${isLogin ? " px-2 lg:p-0 lg:w-4/5 flex justify-center  md:justify-between gap-10  items-center" : "w-full px-2 lg:p-0 lg:w-4/5 flex  justify-between items-center"}`}>
            <div className="flex  justify-center items-center  gap-2  text-white">
                <span className="">
                  {" "}
                  <Link className={`${isLogin ? "block text-2xl sm:text-3xl font-bold hover:text-orange-500" :"hidden sm:block text md:text-lg xl:text-3xl font-bold hover:text-orange-500" } `} to="/">
                    SMART STORE
                  </Link>
                  <Link className={`${isLogin ? "hidden" : "sm:hidden"}`} to="/">
                    ST
                  </Link>
                </span>
              </div>
              <div
                className={`${
                  isLogin ? "hidden" : "flex flex-1 px-4 xl:px-12 gap-4"
                } `}
              >
                <input
                  className="w-full rounded outline-none focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
                <button className="bg-orange-500 hover:bg-orange-400 text-sm sm:text-base p-0.5  sm:px-2 sm:py-1 text-white rounded text-center ">
                  Buscar
                </button>
              </div>

              <div className="flex justify-between items-center gap-3 text-white">
                {!isLogin && (
                  <>
                    <Link to="/cart">
                      <div className="flex justify-center items-center xl:border rounded  p-0 md:p-2 gap-2 cursor-pointer hover:bg-white hover:text-slate-800 group">
                        <IoMdCart size={24} />
                        <span className="xl:flex hidden">CARRINHO</span>
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
                  className={`w-12 h-12 rounded-full overflow-hidden  justify-center items-center border hidden lg:flex`}
                >
                  {user ? (
                    <img src={user.url + user.logged_in_user_image} alt="" />
                  ) : (
                    <img className="" src={defaultUser} alt="" />
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
                isLogin
                  ? "hidden"
                  : "w-4/5 flex h-full items-center  xl:gap-4  "
              }`}
            >
              <NavLinks />
            </div>
          </div>
        </>
      );
  }
};
