import { useContext, useEffect, useState } from "react";
import { SumContext } from "../../contexts/sum";
import { DataPurchaseType } from "../../types/dataPurchaseType";

import { GoAlert } from 'react-icons/go'

export const ItemDashboard = () => {
  const {
    totalValue,
    totalSalesValue,
    currentMonthName,
    data,
    formatMoney,
    totalSalesQuantity,
  } = useContext(SumContext);
  const [sumSales, setSumSales] = useState();

  const soma = totalSalesValue - totalValue;

  useEffect(() => {}, [totalValue]);

  return (
    <>
      <div className=" grid grid-cols-2 grid-flow-row gap-6 ">
        <div className="flex flex-col  w-auto h-40 bg-white rounded p-2 drop-shadow">
          <h1 className=" text-orange-500 font-bold uppercase text-lg text-center">
            Balanço {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center  w-auto h-40 bg-white rounded p-4">
            <span
              className={`${
                soma > 0 ? "text-green-400" : "text-red-400"
              } font-bold text-3xl`}
            >
              {formatMoney(soma)}
            </span>
          </div>
        </div>
        <div className="w-auto h-40 bg-white rounded flex flex-col p-2  drop-shadow">
          <h1 className="text-orange-500 uppercase font-bold text-lg text-center ">
            Vendas {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center gap-6 flex-1 ">
            <div className="flex gap-4  text-lg">
              <div className="flex flex-col items-center border border-slate-800 rounded p-2 text-slate-800 font-bold">
                <span className="">Total de vendas</span>
                <span>{data && Object.keys(data).length}</span>
              </div>
              <div className="flex flex-col items-center border border-slate-800 rounded p-2 text-slate-800 font-bold">
                <span>Unid. vendidas</span>
                <span>{totalSalesQuantity}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-auto h-40 bg-white rounded p-2 drop-shadow">
          <h1 className=" text-orange-500 font-bold uppercase text-lg text-center">
            Balanço {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center  w-auto h-40 bg-white rounded p-4">
            <span
              className={`${
                soma > 0 ? "text-green-400" : "text-red-400"
              } font-bold text-3xl`}
            >
              {formatMoney(soma)}
            </span>
          </div>
        </div>
        <div className="flex flex-col  w-auto h-40 bg-white rounded p-2 drop-shadow">
          <h1 className=" text-orange-500 font-bold uppercase text-lg text-center">
            Balanço {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center  w-auto h-40 bg-white rounded p-4">
            <span
              className={`${
                soma > 0 ? "text-green-400" : "text-red-400"
              } font-bold text-3xl`}
            >
              {formatMoney(soma)}
            </span>
          </div>
          
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-6 rounded mt-12"> 
        <div className="bg-red-200 text-red-500 font-bold flex justify-center items-center gap-2  h-16 w-full rounded drop-shadow uppercase p-2 cursor-pointer hover:bg-red-100"> <GoAlert size={30}/> <h1>Atenção! itens com numero baixo no estoque</h1></div>
        <div className="bg-slate-300 text-slate-800  font-bold flex justify-center items-center gap-2  h-16 w-full rounded drop-shadow uppercase p-2 cursor-pointer hover:bg-slate-100">LOREM</div>
      </div>
    </>
  );
};
