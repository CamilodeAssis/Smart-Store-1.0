import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { Link, useNavigate } from "react-router-dom";

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
import { Login } from "./Login";

export const Cart = () => {
  const navigate = useNavigate();

  const {
    productsCart,
    formatMoney,
    removeProductFromCart,
    addQuantity,
    decQuantity,
    sumValue,
    sumTotal,
    handleClickBuy,
    status,
  } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [freteValue, setFreteValue] = useState(0);

  const handleClickBuyOrder = () => {
    Object.keys(productsCart).map((key) => {
      const date = new Date();
      const data = {
        userId: user.logged_in_user_id,
        date,
        product_name: productsCart[key].product.name,
        quantity: productsCart[key].quantity,
        sale_value: productsCart[key].subValue,
        username: user.logged_in_user_name,
      };
      if (data) {
        handleClickBuy(data);
        window.localStorage.removeItem(`${user.logged_in_user_name} cart`);
        window.location.reload();
      }
    });
  };

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
          <div className="flex flex-col items-center  bg-grayBG min-h-screen w-full p-6">
            <div className="flex w-full lg:w-4/5 gap-4 h-auto justify-center ">
              <div className="bg-white w-4/5 h-auto flex-col justify-center p-4 rounded">
                <div className="flex flex-col md:flex-row justify-between items-center gap-1 mb-4 ">
                  <h1 className="text-orange-500 font-bold  lg:text-2xl ">
                    SEUS PRODUTOS
                  </h1>
                  <button
                    onClick={() =>
                      Object.keys(productsCart).forEach((index) =>
                        removeProductFromCart(index)
                      )
                    }
                    className=" rounded text-white bg-red-500 font-bold p-1 flex justify-center items-center  text-[8px] sm:text-xs lg:text-base gap-1 hover:bg-red-400 "
                  >
                    <BsTrash className=" w-3 h-3 lg:w-4 lg:h-4" />
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
                        className="flex  items-center  justify-around flex-col xl:flex-row w-full h-auto gap-2  border rounded p-1  text-xs "
                      >
                        <div className="h-40 lg:w-32 flex  2xl:justify-center items-center p-0 lg:p-2   ">
                          <img
                            className="w-20 lg:w-20 "
                            src={
                              productsCart[index].url +
                              productsCart[index].product.image
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col  xl:gap-4 justify-center ">
                          <span className="font-bold  sm:text-lg lg:text-base  text-center xl:text-left ">
                            {productsCart[index].product.name}
                          </span>
                          <span className="sm:text-lg lg:text-base text-center xl:text-left ">
                            {productsCart[index].product.description}
                          </span>
                        </div>
                        <div className="flex  sm:flex-col   justify-center items-center  w-auto     gap-1 2xl:gap-4">
                          <h1 className="font-bold text-orange-500 sm:text-lg lg:text-base   xl:text-left ">
                            Quantidade
                          </h1>

                          <div className="flex  items-center gap-4 h-6 ">
                            <button
                              onClick={() =>
                                decQuantity(index, productsCart[index].quantity)
                              }
                            >
                              <BsChevronCompactLeft className="text-orange-500 w-3 h-3 sm:w-5 sm:h-5" />
                            </button>
                            <div className=" w-6 text-center focus:outline-none  sm:text-lg lg:text-base  ">
                              {productsCart[index].quantity}{" "}
                            </div>

                            <button
                              onClick={() =>
                                addQuantity(index, productsCart[index].quantity)
                              }
                            >
                              <BsChevronCompactRight className="text-orange-500 w-3 h-3 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>
                        <div className="flex  flex-col   justify-center items-center w-auto   gap-1 2xl:gap-4">
                          <h1 className="text-orange-500 font-bold sm:text-lg lg:text-base   xl:text-left ">
                            Preço por unidade
                          </h1>
                          <span className=" flex items-center justify-center sm:text-lg lg:text-base   xl:text-left ">
                            {formatMoney(
                              productsCart[index].product.sale_value
                            )}
                          </span>
                        </div>
                        <div className="flex  flex-col  justify-center items-center w-auto    gap-1 2xl:gap-4">
                          <h1 className="text-orange-500 font-bold sm:text-lg lg:text-base   xl:text-left ">
                            Subtotal
                          </h1>
                          <span className=" flex items-center justify-center sm:text-lg lg:text-base   xl:text-left">
                            {formatMoney(productsCart[index].subValue)}
                          </span>
                        </div>

                        <div className="flex 2xl:justify-center 2xl:items-center">
                          <button
                            onClick={() => removeProductFromCart(index)}
                            className=" rounded text-red-500 font-bold p-1 flex justify-center items-center text-sm gap-1 hover:bg-red-500 hover:text-white"
                          >
                            <BsTrash className="w-3 h-3 xl:w-4 lg:h-4" />
                            <span className="text-lg xl:text-base  ">
                              Remover
                            </span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="border mt-4 rounded p-2">
                  <h1 className="font-bold text-orange-500 mb-1">FRETE</h1>
                  <div className="flex  gap-1 text-sm lg:text-base">
                    <input
                      type="radio"
                      value={30.99}
                      name="frete"
                      onChange={(e) => setFreteValue(Number(e.target.value))}
                    />
                    Sedex - R$30,99
                  </div>

                  <div className="flex  gap-1 text-sm lg:text-base">
                    <input
                      type="radio"
                      value={25.5}
                      name="frete"
                      onChange={(e) => setFreteValue(Number(e.target.value))}
                    />
                    Correio - R$25,50
                  </div>
                </div>
              </div>
              <div className="bg-white w-[25%] xl:w-1/5 rounded  h-80 p-3 flex-col gap-4 hidden sm:flex">
                <div className="text-orange-500 flex justify-center items-center gap-1">
                  <h1 className="text-[10px]  lg:text-sm xl:text-xl font-bold ">
                    SUA COMPRA
                  </h1>
                  <GoChecklist className=" w-3 h-3 lg:w-5 lg:h-5" />
                </div>
                <h2 className="text-xs  xl:text-sm text-center">
                  Soma total dos produtos: <br /> {formatMoney(sumValue)}
                  <hr />
                </h2>

                <span className="text-xs xl:text-sm text-center">
                  Frete: {formatMoney(freteValue)}
                  <hr />
                </span>

                <div className="flex flex-col border border-green-600 justify-center items-center rounded text-green-600 p-1">
                  <span className="text-xs xl:text-sm md:text-center">
                    Valor total á vista:
                  </span>
                  <span className="font-bold text-sm xl:text-xl">
                    {formatMoney(sumValue + freteValue)}
                  </span>
                </div>

                <Link
                  onClick={() =>
                    alert("Você será redirecionado para página de pagamentos!")
                  }
                  to="/cart"
                  className="flex justify-center items-center"
                >
                  <button
                    onClick={handleClickBuyOrder}
                    className="border border-orange-500 w-44 hover:bg-orange-500 hover:text-white flex rounded  justify-center items-center text-orange-500 text-xs xl:text-sm  font-bold p-1  gap-2"
                  >
                    Ir para o pagamento
                  </button>
                </Link>
                <Link to="/" className="flex justify-center items-center">
                  <button className="bg-orange-500 border border-orange-500 w-44 hover:bg-white hover:text-orange-500  flex rounded  justify-center items-center text-white  text-xs xl:text-sm  font-bold p-1  gap-2">
                    Continue comprando
                  </button>
                </Link>
                {status.type === "success" ? (
                  <p className=" text-green-500 mt-3 text-center">
                    {status.message}
                  </p>
                ) : (
                  ""
                )}
                {status.type === "success" && status.error === true ? (
                  <p className=" text-red-500 mt-3 text-center">
                    {status.message}
                  </p>
                ) : (
                  ""
                )}
                {status.type === "error" ? (
                  <p className="text-red-500 mt-3 text-center">
                    {status.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="bg-white w-4/5 mt-3 rounded  h-80 p-3 flex-col gap-4 flex sm:hidden">
              <div className="text-orange-500 flex justify-center items-center gap-1">
                <h1 className="text-[10px]  lg:text-sm xl:text-xl font-bold ">
                  SUA COMPRA
                </h1>
                <GoChecklist className=" w-3 h-3 lg:w-5 lg:h-5" />
              </div>
              <h2 className="text-xs  xl:text-sm text-center">
                Soma total dos produtos: <br /> {formatMoney(sumValue)}
                <hr />
              </h2>

              <span className="text-xs xl:text-sm text-center">
                Frete: {formatMoney(freteValue)}
                <hr />
              </span>

              <div className="flex flex-col border border-green-600 justify-center items-center rounded text-green-600 p-1">
                <span className="text-xs xl:text-sm md:text-center">
                  Valor total á vista:
                </span>
                <span className="font-bold text-sm xl:text-xl">
                  {formatMoney(sumValue + freteValue)}
                </span>
              </div>

              <Link
                onClick={() =>
                  alert("Você será redirecionado para página de pagamentos!")
                }
                to="/cart"
                className="flex justify-center items-center"
              >
                <button
                  onClick={handleClickBuyOrder}
                  className="border border-orange-500 w-44 hover:bg-orange-500 hover:text-white flex rounded  justify-center items-center text-orange-500 text-xs xl:text-sm  font-bold p-1  gap-2"
                >
                  Ir para o pagamento
                </button>
              </Link>
              <Link to="/" className="flex justify-center items-center">
                <button className="bg-orange-500 border border-orange-500 w-44 hover:bg-white hover:text-orange-500  flex rounded  justify-center items-center text-white  text-xs xl:text-sm  font-bold p-1  gap-2">
                  Continue comprando
                </button>
              </Link>
              {status.type === "success" ? (
                <p className=" text-green-500 mt-3 text-center">
                  {status.message}
                </p>
              ) : (
                ""
              )}
              {status.type === "success" && status.error === true ? (
                <p className=" text-red-500 mt-3 text-center">
                  {status.message}
                </p>
              ) : (
                ""
              )}
              {status.type === "error" ? (
                <p className="text-red-500 mt-3 text-center">
                  {status.message}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex ">
        <Menu />
        <div className="w-full flex flex-col items-center">
          <NavBar />
          <div className="flex justify-center  gap-4  bg-white min-h-screen ">
            <div className="flex flex-col  items-center mt-60 gap-5">
              <h1 className="text-4xl font-bold  text-slate-800">
                Você precisa logar em uma conta para acessar seu carrinho!
              </h1>
              <Link to="/login">
                <button className="bg-orange-500 hover:bg-orange-400 flex rounded  justify-center items-center text-white  text-3xl font-bold p-2 drop-shadow-md gap-2">
                  Fazer Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
