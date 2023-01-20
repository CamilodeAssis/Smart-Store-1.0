import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoNotificationsOutline, IoStorefrontSharp } from "react-icons/io5";

import { AiOutlineSetting, AiOutlineLogin } from "react-icons/ai";

import { AuthContext } from "../contexts/auth";

export const Login = () => {
  const { authenticated, doLogin, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async () => {
    setDisabled(true);
    doLogin(email, password);
    setDisabled(false);
  };

  // useEffect( () => {
  //     document.addEventListener('keydown', enterSubmit, true);
  // }, [])

  // const enterSubmit = (e: KeyboardEvent) => {

  //     if (e.key === 'Enter'){
  //         handleSubmit();
  //     }
  // }

  return (
    <div className="bg-gradient-to-t from-blue-500  to-gray-800 flex  justify-center items-center h-screen">
      <div className="flex flex-col justify-between items-center gap-24  w-2/3 ">
        <div className="w-auto text-white text-center flex flex-col gap-9">
          <div className="flex justify-center items-center gap-2">
            <IoStorefrontSharp size={60} />
            <h1 className="font-bold text-4xl">Smart Store</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center  items-center  h-auto w-[500px]  px-6 py-6 rounded-md gap-2">
          <h1 className="text-2xl font-bold mb-4 text-white">LOGIN</h1>

          <div className="flex items-center flex-col w-full gap-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled}
              type="text"
              placeholder="E-MAIL"
              className=" rounded w-11/12 h-10 focus:outline-none bg-white "
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              disabled={disabled}
              type="password"
              placeholder="SENHA"
              className=" rounded w-11/12 h-10 focus:outline-none bgwhite "
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={disabled}
            className="bg-blue-500 hover:bg-blue-400 text-white p-1 rounded w-2/5 font-bold text-2xl my-2"
          >
            Entrar
          </button>
          <span className="text-center text-white mt-2">
            Ainda não possui uma conta?
            <Link to="/register" className="text-red-500">
              {" "}
              Registre-se{" "}
            </Link>
          </span>
          <span className="text-center text-white ">
            Problemas com login ?
            <a className="text-red-500"> Recupere sua conta.</a>
          </span>

          {error && (
            <span className="bg-red-500 p-1 text-white rounded ">
              * {error} *
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
