import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBox } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";



import { api } from "../data/api";

import { DataProductType } from "../types/dataProductType";

const color = "#d97706";
const desc = "Caixa";

export const Sales = () => {

  const [selectedValue, setSelectedValue] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState<DataProductType[]>();
  const [url, setUrl] = useState("");

  const { handleSubmit } = useForm();

  console.log(selectedValue);

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
        <div className="flex flex-col items-center bg-grayBG min-h-screen w-full p-10 gap-6">
          
        <div className=" grid grid-cols-3 grid-flow-row gap-6">
                <Link to="/sales/saleOrder">
                  <div className="w-auto h-32 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-pink-400 drop-shadow rounded text-white  flex justify-center items-center font-bold text-3xl  gap-10 p-6 ">
                    <FaBox className="w-16 h-16" />
                    <span></span>
                  </div>
                </Link>
                <Link to="/product/consult">
                  <div className="w-auto h-32 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-pink-400 drop-shadow rounded text-white  flex justify-center items-center font-bold text-3xl gap-10 p-6 ">
                    <FaSearch className="w-16 h-16" />
                    <span> </span>
                  </div>
                </Link>
                <Link to="/product/edit">
                <div className="w-auto h-32 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-pink-400 drop-shadow rounded text-white  flex justify-center items-center font-bold text-3xl  gap-10 p-6 ">
                    <FaFileInvoice className="w-16 h-16" />
                    <span></span>
                  </div>
                </Link>
              </div>
        

          <div className="grid grid-cols-9 grid-flow-row gap-2 w-full h-auto">
          


          </div>
        </div>
      </div>
    </section>
  );
};
