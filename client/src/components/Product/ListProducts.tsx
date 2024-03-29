import { useEffect, useState } from "react";
import { api } from "../../data/api";
import { Menu } from "../Menu";
import { NavBar } from "../NavBar/NavBar";
import { useForm } from "react-hook-form";


import { DataProductType } from "../../types/dataProductType";


export const ListProducts = () => {


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
  }, [searchTerm]);

  return (
    <section className="flex ">
      <Menu />
      <div className="w-full flex flex-col items-center">
        <NavBar />
        <div className="flex flex-col bg-grayBG min-h-screen w-4/5 my-2 p-2 lg:p-12 items-center">
          <form
            method="get"
            className="flex justify-center items-center gap-3 w-full md:w-4/5 mb-12 flex-col md:flex-row"
            action=""
            onSubmit={handleSubmit(handleClickSubimit)}
          >
            <input
              className="flex-1 text-lg rounded focus:outline-none drop-shadow h-6 md:h-8 "
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold rounded p-0.5 md:p-2 drop-shadow h-6 md:h-8 w-3/5 md:w-auto"
            >
              Pesquisar
            </button>
          </form>
          <div className="flex justify-center items-center">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6  grid-flow-row gap-2 w-full h-auto`}
            >
              {data &&
                data.map((data, index) => (
                  <div
                    className="flex flex-col h-auto w-44  bg-white rounded p-1 drop-shadow-md  "
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
                      <span className="text-center text-xs">
                        {" "}
                        {data.description}
                      </span>
                    </div>

                    <div>
                      <div className=" w-full text-center text-xs rounded ">
                        <hr />
                        <span className="text-center text-xs ">
                          {" "}
                          Numero de registro: {data.id}
                        </span>
                        <hr />
                        Quantidade em estoque:{" "}
                        {data.quantity && formatNumber(data.quantity)}
                        <hr />
                      </div>
                    </div>
                    <div className="flex justify-center text-xs items-center gap-2 w-full mt-2">
                      <button className="bg-orange-500 p-1 text-white rounded w-4/5 hover:bg-orange-400">
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
