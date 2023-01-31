import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { Link } from "react-router-dom";

import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar/NavBar";

import { IoMdCart } from "react-icons/io";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsTrash,
} from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

import { CartContext, useCart } from "../contexts/cart";
import { AuthContext } from "../contexts/auth";
import { object } from "yup";

export const Cart = () => {
  const {
    productsCart,
    formatMoney,
    removeProductFromCart,
    addQuantity,
    decQuantity,
    sumValue,
    sumTotal,
  } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [freteValue, setFreteValue] = useState(0);

  useEffect(() => {
    sumTotal();
  }, []);

  if (user) {
    if (Object.keys(productsCart).length === 0) {
      return (
        <section className="flex ">
          <Menu />
          <div className="w-full flex flex-col items-center">
            <NavBar />
            <div className="flex justify-center  gap-4  bg-white min-h-screen ">
              <div className="flex flex-col  items-center mt-60 gap-5">
                <h1 className="text-4xl font-bold  text-slate-800">
                  Seu carrinho está vazio!
                </h1>
                <Link to="/">
                  <button className="bg-orange-500 hover:bg-orange-400 flex rounded  justify-center items-center text-white  text-3xl font-bold p-2 drop-shadow-md gap-2">
                    <IoMdCart size={40} />
                    Continue comprando
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return (
      <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar />
          <div className="flex flex-col items-center  bg-grayBG min-h-screen w-full p-12">
            <div className="flex w-4/5 gap-4 h-auto">
              <div className="bg-white w-4/5 h-auto flex-col justify-center p-4 rounded">
                <div className="flex justify-between items-center gap-1 mb-4 ">
                  <h1 className="text-orange-500 font-bold text-2xl ">
                    SEUS PRODUTOS
                  </h1>
                  <button className=" rounded text-white bg-red-500 font-bold p-1 flex justify-center items-center text gap-1 hover:bg-red-400 ">
                    <BsTrash size={16} />
                    <span>Remover todos os produtos</span>
                  </button>
                </div>

                <div
                  className={`grid  gap-4 ${
                    Object.keys(productsCart).length > 0
                      ? " grid-rows-" + Object.keys(productsCart).length
                      : ""
                  } `}
                >
                  {Object.keys(productsCart).map((index) => {
                    return (
                      <div
                        key={index}
                        className="flex  w-full h-auto gap-6 border rounded p-4 "
                      >
                        <div className="h-48 flex justify-center items-center p-2   ">
                          <img
                            className="w-32 h-auto"
                            src={
                              productsCart[index].url +
                              productsCart[index].product.image
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 justify-center ">
                          <span className="font-bold text-base flex-wrap ">
                            {productsCart[index].product.name}
                          </span>
                          <span>{productsCart[index].product.description}</span>
                        </div>
                        <div className="flex flex-col justify-center items-center w-40  gap-4">
                          <h1 className="font-bold text-orange-500">
                            Quantidade
                          </h1>

                          <div className="flex  items-center gap-4">
                            <button
                              onClick={() =>
                                decQuantity(index, productsCart[index].quantity)
                              }
                            >
                              <BsChevronCompactLeft
                                size={20}
                                className="text-orange-500"
                              />
                            </button>
                            <div className=" w-6 text-center focus:outline-none">
                              {productsCart[index].quantity}{" "}
                            </div>

                            <button
                              onClick={() =>
                                addQuantity(index, productsCart[index].quantity)
                              }
                            >
                              <BsChevronCompactRight
                                size={20}
                                className="text-orange-500"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-40  gap-4">
                          <h1 className="text-orange-500 font-bold">
                            Preço por unidade
                          </h1>
                          <span className=" flex items-center justify-center ">
                            {formatMoney(
                              productsCart[index].product.sale_value
                            )}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center  w-40 gap-4">
                          <h1 className="text-orange-500 font-bold">
                            Subtotal
                          </h1>
                          <span className=" flex items-center justify-center">
                            {formatMoney(productsCart[index].subValue)}
                          </span>
                        </div>

                        <div className="flex justify-center items-center">
                          <button
                            onClick={() => removeProductFromCart(index)}
                            className=" rounded text-red-500 font-bold p-1 flex justify-center items-center text-sm gap-1 hover:bg-red-500 hover:text-white"
                          >
                            <BsTrash size={16} />
                            <span>Remover</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="border mt-4 rounded p-2">
                  <h1 className="font-bold text-orange-500 mb-1">FRETE</h1>
                  <div className="flex  gap-1">
                    <input
                      type="radio"
                      value={30.99}
                      name="frete"
                      onChange={(e) => setFreteValue(Number(e.target.value))}
                    />
                    Sedex - R$30,99
                  </div>

                  <div className="flex  gap-1">
                    <input
                      type="radio"
                      value={25.5}
                      name="frete"
                      onChange={(e) => setFreteValue(Number(e.target.value))}
                    />
                    Transportadora - R$25,50
                  </div>
                </div>
              </div>
              <div className="bg-white w-1/5 rounded h-80 p-3 flex flex-col gap-4">
                <div className="text-orange-500 flex justify-center items-center gap-1">
                  <h1 className="text-xl font-bold ">SUA COMPRA</h1>
                  <GoChecklist size={20} />
                </div>
                <h2 className="text-sm">
                  Soma total dos produtos: {formatMoney(sumValue)}
                  <hr />
                </h2>

                <span className="text-sm w-full">
                  Frete: {formatMoney(freteValue)}
                  <hr />
                </span>

                <div className="flex flex-col border border-green-600 justify-center items-center rounded text-green-600 p-1">
                  <span>Valor total á vista:</span>
                  <span className="font-bold text-xl">
                    {formatMoney(sumValue + freteValue)}
                  </span>
                </div>

                <Link to="/payment" className="flex justify-center items-center">
                  <button className="border border-orange-500 w-44 hover:bg-orange-500 hover:text-white flex rounded  justify-center items-center text-orange-500   font-bold p-1  gap-2">
                    Ir para o pagamento
                  </button>
                </Link>
                <Link to="/" className="flex justify-center items-center">
                  <button className="bg-orange-500 border border-orange-500 w-44 hover:bg-white hover:text-orange-500  flex rounded  justify-center items-center text-white   font-bold p-1  gap-2">
                    Continue comprando
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex ">
        <Menu />
        <div className="w-full">
          <NavBar />
          <div className="flex flex-col items-center  bg-grayBG min-h-screen w-full p-12">
            <div className="flex w-4/5 gap-4 h-[600px]">
              <div className="bg-white w-4/5 flex-col justify-center p-4 rounded">
                <div className="flex justify-center items-center gap-1">
                  <IoMdCart size={20} className="text-orange-500" />
                  <h1 className="text-orange-500 font-bold text-xl">
                    SEUS PRODUTOS
                  </h1>
                </div>
                <div>precisa logar</div>
              </div>
              <div className="bg-white w-1/5 rounded">
                <h1></h1>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    );
  }
};
