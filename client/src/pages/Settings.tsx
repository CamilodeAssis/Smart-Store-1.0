import { useState, useContext } from "react";

import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";

import { FaBox } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { BiUserPlus, BiUser } from "react-icons/bi"



import { AuthContext } from "../contexts/auth";

export const Settings = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="flex ">
      <Menu />
      <div className="w-full flex flex-col  items-center">
        <NavBar />
        <div className="flex flex-col  bg-grayBG min-h-screen w-4/5 p-6 gap- mt-2">
          <div className="flex  flex-col justify-center items-center w-full gap-8">
            <h1 className="text-3xl">Olá. <b> {user.logged_in_user_name}</b></h1>

            <h2 className="uppercase font-semibold text-xl">Opções de Administrador</h2>
            
          </div>
          <div className=" flex justify-between   ">
            <div className="w-full flex flex-col gap-2 ">
              <h1 className="font-bold">PRODUTOS</h1>
              <div className="w-full h-0.5 rounded bg-slate-800 mb-2"></div>
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

              <h1 className="font-bold"> USERS</h1>
              <div className="w-full h-0.5 rounded bg-slate-800 mb-2"></div>
              <div className=" grid grid-cols-3 grid-flow-row gap-6">
                <Link to="/user/register">
                  <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl gap-6 p-6 ">
                    <BiUserPlus size={40}/>
                    Cadrastrar usuarios
                  </div>
                </Link>
                <Link to="/user/consult">
                  <div className="w-auto h-24 bg-slate-800 hover:bg-slate-700 drop-shadow rounded text-white flex justify-center items-center font-bold text-2xl  gap-6 p-6">
                  <BiUser size={40}/>
                    Editar Usuarios
                  </div>
                </Link>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
