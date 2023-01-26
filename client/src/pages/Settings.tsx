import { useState, useContext } from "react";

import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";

import { FaBox } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";

import { AuthContext } from "../contexts/auth";

export const Settings = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="flex ">
      <Menu />
      <div className="w-full flex flex-col  items-center">
        <NavBar />
        <div className="flex flex-col  bg-grayBG min-h-screen w-4/5 p-6 gap-6 mt-2">
          <div className="flex justify-center items-center w-full">
            <h1 className="text-3xl">Olá. <b> {user.logged_in_user_name}</b></h1>
            
          </div>
          <div className=" flex justify-between  gap-6 ">
            <div className="w-full flex flex-col ">
              <h1 className="font-bold">PRODUTOS</h1>
              <div className="w-full h-0.5 bg-black mb-2"></div>
              <div className=" grid grid-cols-3 grid-flow-row gap-6 mb-10">
                <Link to="/product/register">
                  <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700  drop-shadow rounded text-white  flex justify-center items-center font-bold text-2xl  gap-6 p-6 ">
                    <FaBox size={40} />
                    <span>Cadastrar novos produtos</span>
                  </div>
                </Link>
                <Link to="/product/consult">
                  <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700  drop-shadow rounded text-white  flex justify-center items-center font-bold text-2xl  gap-6 p-6 ">
                    <FaSearch size={40} />
                    <span>Consultar </span>
                  </div>
                </Link>
                <Link to="/product/edit">
                  <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700  drop-shadow rounded text-white  flex justify-center items-center font-bold text-2xl  gap-6 p-6 ">
                    <FaFileInvoice size={40} />
                    <span>Entrada no estoque</span>
                  </div>
                </Link>
              </div>

              <h1 className="font-bold">USERS</h1>
              <div className="w-full h-0.5 bg-black mb-2"></div>
              <div className=" grid grid-cols-3 grid-flow-row gap-6">
                <Link to="/user/register">
                  <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl  ">
                    Cadrastrar usuarios
                  </div>
                </Link>
                <Link to="/user/consult">
                  <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl ">
                    Consultar Usuarios
                  </div>
                </Link>

                <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl ">
                  Editar Usuarios
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
