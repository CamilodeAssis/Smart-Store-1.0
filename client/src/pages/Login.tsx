import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoNotificationsOutline, IoStorefrontSharp } from "react-icons/io5";

import { AiOutlineSetting, AiOutlineLogin } from "react-icons/ai";

import { AuthContext } from "../contexts/auth";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer";

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
    <>
      <NavBar isLogin={true}/>
      <div className=" bg-slate-800 flex  justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-24  w-4/5 ">
          <div className="w-auto text-white text-center flex flex-col gap-9">
            <div className="flex justify-center items-center gap-9">
              <IoStorefrontSharp className="w-10 h-10  sm:w-16 sm:h-16" />
              <h1 className=" font-bold font-playfair  text-3xl sm:text-4xl md:text-4xl lg:text-6xl">Smart Store</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center  items-center  h-auto w-[300px] sm:w-[400px] md:w-[500px]  rounded-md gap-2">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-white">LOGIN</h1>

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
              className="bg-orange-500 hover:bg-orange-400 text-white p-1 rounded w-2/5 font-bold text-2xl my-2"
            >
              Entrar
            </button>
            <span className="text-sm sm:text-base text-center text-white mt-2">
              Ainda não possui uma conta?
              <Link to="/register" className="text-red-500">
                {" "}
                Registre-se{" "}
              </Link>
            </span>
            <span className="text-sm sm:text-base text-center text-white ">
              Problemas com login ?
              <a className="text-red-500"> Recupere sua conta.</a>
            </span>

            {error && (
              <span className="bg-red-500 p-1 text-white rounded mt-2">
                * {error} *
              </span>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
