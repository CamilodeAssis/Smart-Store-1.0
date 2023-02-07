import { useContext, useEffect, useState } from "react";
import { api } from "../../data/api";
import { Menu } from "../Menu";
import { NavBar } from "../NavBar/NavBar";

import { DataType } from "../../types/dataType";
import { AuthContext } from "../../contexts/auth";
import { Footer } from "../Footer";

export const ListUsers = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState<DataType[]>();

  const apiData = async () => {
    const data = await api.getUsers();
    if (!data) {
      <p>carregando</p>;
    }
    return setData(data);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <section className="flex ">
        <Menu />
        <div className="w-full flex flex-col items-center">
          <NavBar />
          <div className="flex flex-col bg-grayBG min-h-screen w-4/5 my-2 p-2 lg:p-12 items-center">
            <div className="flex items-center justify-center  gap-4 w-full">
              <form
                action=""
                className="flex justify-center items-center gap-3 w-full md:w-4/5 mb-12 flex-col md:flex-row"
              >
                <input
                  className="flex-1 w-full text-lg rounded focus:outline-none drop-shadow h-6 md:h-8"
                  type="text"
                  name=""
                  id=""
                />
                <button className="bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold rounded p-0.5 md:p-2 drop-shadow h-6 md:h-8 w-3/5 md:w-auto ">
                  Buscar
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 grid-flow-row gap-2 w-full h-auto">
                {data &&
                  data.map((dataUser, index) => (
                    <div className="flex flex-col justify-between items-center bg-white border  w-[200px] lg:w-[280px]  rounded gap-4 p-2  ">
                      <div className="flex justify-center items-center">
                        <div className=" flex justify-center items-center rounded-full overflow-hidden  w-20 h-20 border border-orange-500">
                          <img
                            className="w-20 h-auto mb-2 "
                            src={user.url + dataUser.image}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="text-sm  ">
                        <ul>
                          <li>
                            <b>Nome:</b> {dataUser.name}
                          </li>
                          <li>
                            <b>Username:</b> {dataUser.username}
                          </li>
                          <li>
                            <b>Email:</b> {dataUser.email}
                          </li>
                          <li>
                            <b>Tipo:</b> {dataUser.type}
                          </li>
                        </ul>
                      </div>
                      <div className="flex justify-center items-center gap-2 w-full">
                        <button className="bg-orange-500 p-1 text-white rounded w-4/5 hover:bg-orange-400">
                          Editar
                        </button>
                        <button className="bg-red-500 p-1 text-white rounded w-4/5 hover:bg-red-400">
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
