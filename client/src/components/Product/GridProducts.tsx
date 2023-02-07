import { useEffect, useState, useContext } from "react";

import { api } from "../../data/api";

import { DataProductType } from "../../types/dataProductType";

import { AuthContext } from "../../contexts/auth";

import { useCart } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";

type Props = {
  searchTerm: string;
};

export const GridProducts = ({ searchTerm }: Props) => {
  const { user } = useContext(AuthContext);
  const cart = useCart();

  const navigate = useNavigate();

  const [data, setData] = useState<DataProductType[]>();

  const getProductsByDepartment = async () => {
    const response = await api.getDepartmentProductByQuery(
      `?name=${searchTerm}`
    );
    if (!response) {
      <p>carregando</p>;
    }
    return setData(response.products), cart.getUrl(response.url);
  };

  const add = (data: DataProductType) => {
    if (user) {
      if (Object.keys(cart.productsCart).length < 6) {
        cart.addProductToCart(data);
      } else {
        alert("Carrinho cheio. Limite de 6 itens por carrinho");
      }
    } else {
      alert(
        "Você precisa estar logado para adicionar items ao carrinho. Você será redirecionado à página de login."
      );
      navigate("/login");
    }
  };

  useEffect(() => {
    getProductsByDepartment();
  }, []);

  return (
    <>
      <div className="flex flex-col  mt-3 ">
        <div className="w-full bg-slate-800 text-white font-bold p-2">
          <h1>{searchTerm.toUpperCase()}</h1>
        </div>
        <div className=" flex  justify-center items-center w-full">
          <div className="grid  sm:w-full grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-flow-row gap-3  h-auto p-6 " >
            {data &&
              data.map((data, index) => {
                if (data.quantity && data.quantity > 0) {
                  return (
                    <div
                      className="flex flex-col h-auto w-[160px] sm:w-auto bg-white rounded p-2 drop-shadow-md  "
                      key={index}
                    >
                      <div className="border border-orange-500 rounded text-orange-500 text-xs text-center">
                        {data.quantity && cart.formatNumber(data.quantity)}{" "}
                        unidades disponiveis
                      </div>
                      <div className="flex flex-col h-full justify-center">
                        <div className="h-24  flex justify-center items-center ">
                          <img
                            className="w-20 h-auto mb-2 "
                            src={cart.url + data.image}
                            alt=""
                          />
                        </div>

                        <h1 className="font-bold  text-center text-sm mb-2">
                          {data.name}
                        </h1>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-center text-orange-500 font-bold">
                          {data.sale_value && cart.formatMoney(data.sale_value)}
                        </span>
                        <span className="text-gray-600 text-xs">
                          Valor à vista
                        </span>
                      </div>

                      <div>
                        <div className="flex flex-col justify-center items-center  w-full mt-2">
                          <button
                            onClick={() => add(data)}
                            className="bg-orange-500 hover:bg-orange-400 text-sm flex rounded  text-white p-1 drop-shadow-md"
                          >
                            Adicionar ao carrinho
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};
