import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar/NavBar";

import { IoMdCart } from "react-icons/io";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsTrash,
} from "react-icons/bs";

import { CartContext, useCart } from "../contexts/cart";
import { AuthContext } from "../contexts/auth";

export const Cart = () => {
  const { productsCart, url, formatMoney, subTotal, removeProductFromCart, changeQuantity } =
    useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [newQuantity, setNewQuantity] = useState(0);

  const changeQuantityCart = (id: string)  => (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    changeQuantity(id, e.target.value);
  }

  useEffect( () => {}, [productsCart])

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
                <div className="flex justify-center items-center gap-1 mb-4 ">
                  <IoMdCart size={24} className="text-orange-500" />
                  <h1 className="text-orange-500 font-bold text-2xl ">
                    SEUS PRODUTOS
                  </h1>
                </div>
                <div
                  className={`grid grid-rows-${
                    Object.keys(productsCart).length
                  } grid-flow-col gap-4 `}
                >
                  {Object.keys(productsCart).map((index) => (
                    <div
                      key={index}
                      className="flex  w-full h-auto gap-6 border rounded p-4 "
                    >
                      <div className="h-auto flex justify-center items-center p-2   ">
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
                        <span className="font-bold text-base flex-wrap">
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
                          onClick={() => setNewQuantity(newQuantity - 1)}
                          >
                            <BsChevronCompactLeft
                              size={20}
                              className="text-orange-500"
                            />
                          </button>
                          <div
                          className=" w-6 text-center focus:outline-none"
                          onChange={changeQuantityCart(index)}
                          >{productsCart[index].quantity} </div>
                          
                          <button 
                            onClick={() => parseInt(productsCart[index].quantity) + 1}
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
                          {formatMoney(productsCart[index].product.sale_value)}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center items-center  w-40 gap-4">
                        <h1 className="text-orange-500 font-bold">Subtotal</h1>
                        <span className=" flex items-center justify-center">
                          {subTotal(
                            productsCart[index].product.sale_value,
                            productsCart[index].quantity
                          )}
                        </span>
                      </div>

                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => removeProductFromCart(index)}
                          className=" rounded text-red-500 font-bold p-1 flex justify-center items-center text-sm gap-1 hover:bg-red-500 hover:text-white"
                        >
                          <BsTrash size={16} />
                          <span>Remover item</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white w-1/5 rounded">custos</div>
            </div>
            <div></div>
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
              <div className="bg-white w-1/5 rounded">custos</div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    );
  }
};
