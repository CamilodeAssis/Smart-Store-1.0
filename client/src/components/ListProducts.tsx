import { useEffect, useState } from "react";
import { api } from "../data/api";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { useForm } from "react-hook-form";


import { DataProductType } from "../types/dataProductType";


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

  useEffect(() => {
    handleClickSubimit();
  }, []);

  return (
    <section className="flex ">
      <Menu />
      <div className="w-full">
        <NavBar color={color} desc={desc} />
        <div className="flex flex-col bg-grayBG min-h-screen w-full p-12 items-center">
          <form
            method="get"
            className="flex justify-between gap-3 w-4/5 mb-12"
            action=""
            onSubmit={handleSubmit(handleClickSubimit)}
          >
            <input
              className="flex-1 text-lg rounded focus:outline-blue-500  "
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-400"
            >
              Pesquisar
            </button>
          </form>
          
          <div className="grid grid-cols-4 grid-flow-row gap-8 w-full">
            {data &&
              data.map((data, index) => (
                <div
                  className="flex flex-col  h-auto justify-center items-center  bg-white rounded p-4 drop-shadow-md  "
                  key={index}
                > 
                  
                  <div className="h-full w-full flex justify-center items-center ">
                  <img className="w-36 h-auto mb-2 " src={url + data.image} alt="" />
                  </div>
                  <h1 className="font-bold  text-center">{data.name}</h1>
                  <p>{data.description}</p>
                  <br />
                  <div className="bg-blue-500 w-full text-center text-white font-bold rounded">Quantidade em estoque: {data.quantity}</div>
                  
  
                </div>
                 
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
