import { useState, useContext, useEffect } from "react";

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
    <div className="bg-gradient-to-b from-blue-800  via-purple-800 to-purple-600 flex  justify-center items-center h-screen">
      <div className="flex flex-col justify-between items-center gap-24  w-2/3 ">
        <div className="w-auto text-white text-center flex flex-col gap-9">
          <h1 className="font-bold text-3xl">SmartManager</h1>
          <p>Sistema de gerenciamento</p>
        </div>

        <div className="flex flex-col justify-center  items-center bg-white h-auto w-[400px]  px-6 py-6 rounded-md gap-2">
          <h1 className="text-2xl font-bold mb-4 text-blue-700">LOGIN</h1>

          <div className="flex items-center flex-col w-full gap-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled}
              type="text"
              placeholder="E-MAIL"
              className="border rounded w-11/12 h-10 focus:outline-none "
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              disabled={disabled}
              type="password"
              placeholder="SENHA"
              className="border rounded w-11/12 h-10 focus:outline-none"
            />
          </div>
          <span className="text-center mt-2 mb-2">
            Problemas com login ?{" "}
            <a className="text-red-500">Recurepe sua senha.</a>{" "}
          </span>
          <button
            onClick={handleSubmit}
            disabled={disabled}
            className="bg-blue-700 hover:bg-blue-500 text-white p-1 rounded w-2/5 font-bold text-2xl "
          >
            Entrar
          </button>
        </div>

        <p>{error}</p>

      </div>
    </div>
  );
};
