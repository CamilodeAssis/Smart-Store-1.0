import { useEffect, useState } from "react";

import { api } from "../data/api";

import { DataProductType } from "../types/dataProductType";

type Props = {
  searchTerm: string;
};

export const GridProducts = ({ searchTerm }: Props) => {
  const [data, setData] = useState<DataProductType[]>();
  const [url, setUrl] = useState();

  console.log(data);

  const getProductsByDepartment = async () => {
    const response = await api.getDepartmentProductByQuery(
      `?name=${searchTerm}`
    );
    if (!response) {
      <p>carregando</p>;
    }
    return setData(response.products), setUrl(response.url);
  };

  const formatMoney = (money: number) => {
    const dinheiroFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(money);

    return dinheiroFormatado;
  };

  useEffect(() => {
    getProductsByDepartment();
  }, []);

  return (
    <div className="flex flex-col  mt-3 ">
      <div className="w-full bg-slate-800 text-white font-bold p-2">
        <h1>{searchTerm.toUpperCase()}</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-6 grid-flow-row gap-2 w-full h-auto p-10">
          {data &&
            data.map((data, index) => (
              <div
                className="flex flex-col h-[260px] w-[200px] bg-white rounded p-2 drop-shadow-md  "
                key={index}
              >
                <div className="border border-orange-500 rounded text-orange-500 text-xs text-center">
                  {data.quantity} unidades disponiveis
                </div>
                <div className="flex flex-col h-full justify-center">
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
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-center text-orange-500 font-bold">
                    {data.sale_value && formatMoney(data.sale_value)}
                  </span>
                  <span className="text-gray-600 text-xs">Valor à vista</span>
                </div>

                <div>
                  <div className="flex flex-col justify-center items-center  w-full mt-2">
                    <button className="bg-orange-500 hover:bg-orange-400 text-sm flex rounded  text-white p-1 drop-shadow-md">
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
