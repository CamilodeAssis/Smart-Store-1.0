import { useContext, useEffect } from 'react'
import { SumContext } from '../../contexts/sum';
export const CashValue = () => {
  const {totalValue, totalSalesValue}  = useContext(SumContext);




  return (
    <>
      <div className=" grid grid-cols-2 grid-flow-row gap-6 ">
        <div className="flex justify-center w-auto h-40 bg-slate-800 drop-shadow rounded p-2">
          <h1 className="text-white font-bold ">
            
          </h1>
          {totalSalesValue && totalValue && (totalSalesValue - totalValue)}
        </div>
        <div className="flex flex-col justify-center items-center gap-6 w-auto h-40 bg-white rounded p-2">
          <h1 className=" font-bold ">Vendas  </h1>
        </div>
      </div>
    </>
  );
};
