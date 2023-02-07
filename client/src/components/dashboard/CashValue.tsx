import { useContext, useEffect, useState } from "react";
import { SumContext } from "../../contexts/sum";
import { DataPurchaseType } from "../../types/dataPurchaseType";

import { GoAlert } from "react-icons/go";

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
      <div className=" grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 grid-flow-row gap-6  ">
        <div className="flex flex-col  w-auto h-40 bg-white hover:border hover:border-orange-500 rounded p-2 drop-shadow cursor-pointer">
          <h1 className=" text-orange-500 font-bold uppercase text-xs lg:text-lg text-center">
            Balanço {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center  w-auto h-40 bg-white rounded p-4">
            <span
              className={`${
                soma > 0 ? "text-green-400" : "text-red-400"
              } font-bold  text-base sm:text-lg lg:text-2xl  2xl:text-3xl`}
            >
              + {formatMoney(soma)}
            </span>
          </div>
        </div>
        <div className="w-auto h-40 bg-white rounded hover:border hover:border-orange-500 flex flex-col p-2 cursor-pointer drop-shadow">
          <h1 className="text-orange-500 uppercase  font-bold text-xs lg:text-lg text-center ">
            Vendas {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center gap-6 flex-1 ">
            <div className="flex  flex-col gap-2 sm:flex-row sm:gap-4  text-xs lg:text-base 2xl:text-lg">
              <div className="flex flex-col items-center border border-slate-800 rounded p-0.5 2xl:p-2 text-slate-800 font-bold ">
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
        <div className="flex flex-col  w-auto h-40 bg-white hover:border hover:border-orange-500 rounded p-2 drop-shadow cursor-pointer">
          <h1 className=" text-orange-500 font-bold uppercase text-xs lg:text-lg text-center">
            despesas {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center  w-auto h-40 bg-white rounded p-4">
            <span
              className={`${
                soma > 0 ? "text-red-400" : "text-green-400"
              } font-bold text-base sm:text-lg lg:text-2xl  2xl:text-3xl`}
            >
              - {formatMoney(totalValue)}
            </span>
          </div>
        </div>
        <div className="flex flex-col  w-auto h-40 bg-white hover:border hover:border-orange-500 rounded p-2 drop-shadow cursor-pointer">
          <h1 className=" text-orange-500 font-bold uppercase text-xs lg:text-lg text-center">
            entrada {currentMonthName}
            <hr />
          </h1>
          <div className="flex flex-col justify-center items-center  w-auto h-40 bg-white rounded p-4">
            <span
              className={`${
                soma > 0 ? "text-green-400" : "text-red-400"
              } font-bold  text-base sm:text-lg lg:text-2xl  2xl:text-3xl`}
            >
              + {formatMoney(totalSalesValue)}
            </span>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center w-full gap-6 rounded mt-12">
        <div className="bg-red-200 text-red-500 text-center font-bold flex justify-center items-center gap-2  h-16 w-full rounded drop-shadow uppercase p-2 cursor-pointer hover:bg-red-100">
          {" "}
          <GoAlert className="w-10 h-10" />{" "}
          <h1>Atenção! itens com numero baixo no estoque.</h1>
        </div>
        <div className="bg-slate-300 text-slate-800  font-bold flex justify-center items-center gap-2  h-16 w-full rounded drop-shadow uppercase p-2 cursor-pointer hover:bg-slate-100">
          LOREM
        </div>
      </div>
    </>
  );
};
