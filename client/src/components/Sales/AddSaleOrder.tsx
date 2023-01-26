import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Menu } from "../../components/Menu";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBox } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";

import { api } from "../../data/api";

import { DataProductType } from "../../types/dataProductType";

const color = "#d97706";
const desc = "Caixa";

export const AddSaleOrder = () => {
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
          <label>Produto </label>
          <select
            className="border rounded-md drop-shadow h-8 focus:outline-none mb-3"
            value={selectedValue}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedValue(e.target.value)
            }
          >
            {data &&
              data.map((produto, index) => (
                <option
                  className="bg-gray-100 cursor-pointer"
                  key={index}
                  value={produto.name}
                >
                  {produto.name}
                </option>
              ))}
          </select>

          <div className="grid grid-cols-9 grid-flow-row gap-2 w-full h-auto"></div>
        </div>
      </div>
    </section>
  );
};
