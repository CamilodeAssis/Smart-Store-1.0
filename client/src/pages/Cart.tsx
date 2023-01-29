import { useContext } from "react";

import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar/NavBar";

import { IoMdCart } from "react-icons/io";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { CartContext } from "../contexts/cart";
import { AuthContext } from "../contexts/auth";

export const Cart = () => {
  const { productsCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  console.log(Object.keys(productsCart).length);

  console.log(productsCart);

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
                <button className="bg-orange-500 hover:bg-orange-400 flex rounded  justify-center items-center text-white  text-3xl font-bold p-2 drop-shadow-md gap-2">
                  <IoMdCart size={40} />
                  Continue comprando
                </button>
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
            <div className="flex w-4/5 gap-4 h-[600px]">
              <div className="bg-white w-4/5 flex-col justify-center p-4 rounded">
                <div className="flex justify-center items-center gap-1">
                  <IoMdCart size={20} className="text-orange-500" />
                  <h1 className="text-orange-500 font-bold text-xl">
                    SEUS PRODUTOS
                  </h1>
                </div>

                <div className="flex justify-around items-center w-full bg-slate-200 h-64">
                  <div>img</div>
                  <div>descrição</div>
                  <div className="flex flex-col items-center justify-center h-full ">
                    <h1 className="">Quantidade</h1>
                    <div className="flex justify-center items-center gap-4">
                      <button>
                        <BsChevronCompactLeft
                          size={20}
                          className="text-orange-500"
                        />
                      </button>
                      <span className="font-bold text-lg">{1}</span>
                      <button>
                        <BsChevronCompactRight
                          size={20}
                          className="text-orange-500"
                        />
                      </button>
                      
                    </div>
                    
                  </div>
                  <div>subtotal</div>
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
