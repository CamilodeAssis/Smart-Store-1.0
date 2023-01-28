import { useContext } from "react";

import { Menu } from "../components/Menu";
import { NavBar } from "../components/NavBar/NavBar";

import { IoMdCart } from "react-icons/io";

import { CartContext } from "../contexts/cart";
import { AuthContext } from "../contexts/auth";

export const Cart = () => {
  const { productsCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  console.log(Object.keys(productsCart).length);

  return (
    <>
      {user && (
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

                  <div></div>
                </div>
                <div className="bg-white w-1/5 rounded">custos</div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      )}

      {!user && (
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

                  <div>carrinho vazio</div>
                </div>
                <div className="bg-white w-1/5 rounded">custos</div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      )}
      {Object.keys(productsCart).length   && (
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

                  <div>carinho vazio </div>
                </div>
                <div className="bg-white w-1/5 rounded">custos</div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
