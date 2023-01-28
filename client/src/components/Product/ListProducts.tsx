import { useEffect, useState } from "react";
import { api } from "../../data/api";
import { Menu } from "../Menu";
import { NavBar } from "../NavBar/NavBar";
import { useForm } from "react-hook-form";
import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";

import { DataProductType } from "../../types/dataProductType";
import { el } from "date-fns/locale";

export const ListProducts = () => {
  const color = "#3b82f6";
  const desc = "Consultar estoque";

  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState<DataProductType[]>();
  const [url, setUrl] = useState("");

  const { handleSubmit } = useForm();

  const handleClickSubimit = async () => {
    const response = await api.getProductByQuery(`?name=${searchTerm}`);
    if (!response) {
      <p>carregando</p>;
    }
    return setData(response.products), setUrl(response.url);
  };

  const formatNumber = (number: number) => {
    const formatedNumber = new Intl.NumberFormat("pt-BR", {
      minimumIntegerDigits: 2,
    }).format(number);

    return formatedNumber;
  };

  useEffect(() => {
    handleClickSubimit();
  }, []);

  return (
    <section className="flex ">
      <Menu />
      <div className="w-full flex flex-col items-center">
        <NavBar />
        <div className="flex flex-col bg-grayBG min-h-screen w-4/5 my-2 p-12 items-center">
          <form
            method="get"
            className="flex justify-between gap-3 w-4/5 mb-12"
            action=""
            onSubmit={handleSubmit(handleClickSubimit)}
          >
            <input
              className="flex-1 text-lg rounded focus:outline-none drop-shadow "
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-400 hover:to-yellow-500 text-white font-bold rounded p-2 drop-shadow"
            >
              Pesquisar
            </button>
          </form>

          <div className="grid grid-cols-9 grid-flow-row gap-2 w-full h-auto">
            {data &&
              data.map((data, index) => (
                <div
                  className="flex flex-col h-auto  bg-white rounded p-2 drop-shadow-md  "
                  key={index}
                >
                  <div className="flex flex-col h-full j mb-2">
                    <div className="h-24  flex justify-center items-center ">
                      <img
                        className="w-20 h-auto mb-2 "
                        src={url + data.image}
                        alt=""
                      />
                    </div>

                    <h1 className="font-bold  text-center text-sm mb-2">
                      {data.name}
                    </h1>
                    <p className="text-center text-xs"> {data.description}</p>
                  </div>

                  <div>
                    <div className=" w-full text-center text-xs  font-bold rounded ">
                      <hr />
                      Quantidade em estoque: {data.quantity && formatNumber(data.quantity)}
                      <hr />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
