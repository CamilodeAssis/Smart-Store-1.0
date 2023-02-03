import React, { createContext, useEffect, useState } from "react";

import { DataPurchaseType } from "../types/dataPurchaseType";
import { DataProductType } from "../types/dataProductType";
import { api } from "../data/api";

type Props = {
  children: React.ReactNode;
};

interface SumContextProps {
  totalValue: any;
  totalSalesValue: any;
  currentMonthName: string;
  data: any;
  totalSalesQuantity: any;
  formatMoney: (number: number) => string;
}

export const SumContext = createContext<SumContextProps>({} as SumContextProps);

export const SumProvider = ({ children }: Props) => {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outrubro",
    "Novembro",
    "Dezembro",
  ];
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentMonthName = ` ${monthNames[currentMonth]}-${currentYear}`;

  const [data, setData] = useState<DataPurchaseType[]>();
  const [products, setProducts] = useState<DataProductType[]>();

  const [totalValue, setTotalValue] = useState<number>();
  const [totalSalesValue, setTotalSalesValue] = useState<number>();
  const [totalSalesQuantity, setTotalSalesValueQuantity] = useState<number>();

  useEffect(() => {
    loadSales();
    loadProducts();
  }, []);

  const loadSales = async () => {
    let response = await api.getSales();

    if (!response) {
      <p>Carregando...</p>;
    }
    return setData(response);
  };

  const loadProducts = async () => {
    let response = await api.getProducts();
    if (response) {
      setProducts(response);
    }

    <p>Carregando...</p>;
    return setProducts(response);
  };

  const addLocalStorage = () => {
    if (products && data) {
      window.localStorage.setItem("products", JSON.stringify(products));
      window.localStorage.setItem("sales", JSON.stringify(data));
    }
  };

  const addState = () => {
    setTotalValue(
      products?.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.amount_value),
        0
      )
    );
    setTotalSalesValue(
      data?.reduce(
        (accumulator, currentValue) =>
          accumulator + Number(currentValue.sale_value),
        0
      )
    );
    setTotalSalesValueQuantity(
      data?.reduce(
        (accumulator, currentValue) =>
          accumulator + Number(currentValue.quantity),
        0
      )
    );
  };

  setTotalSalesValueQuantity

  window.addEventListener("load", () => {
    addLocalStorage();
    addState();
    
  });

  const formatMoney = (money: number) => {
    const dinheiroFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(money);

    return dinheiroFormatado;
  };

  const contextValue: SumContextProps = {
    totalValue,
    totalSalesValue,
    currentMonthName,
    data,
    formatMoney,
    totalSalesQuantity
   
  };

  return (
    <SumContext.Provider value={contextValue}>{children}</SumContext.Provider>
  );
};
