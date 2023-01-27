import { createContext, useState, useEffect, useContext } from "react";

import { AuthContext } from "./auth";

import { DataProductType } from "../types/dataProductType";

type Props = {
  children: React.ReactNode;
};

interface CartContextProps {
  productsCart: any;
  addProductToCart: (product: any) => void;
  removeProductFromCart: () => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: Props) => {
  const { user, doLogout } = useContext(AuthContext);
  const [productsCart, setProductsCart] = useState({});

  useEffect(() => {
    const cartLocalStorage = window.localStorage.getItem(`${user.logged_in_user_name} cart`);
    if (cartLocalStorage && user) {
      setProductsCart(JSON.parse(cartLocalStorage));
    }
  }, [user]);

  const addProductToCart = (product: any) => {
    setProductsCart((old: any) => {
      let quantity = 0;
      if (old[product.id]) {
        quantity = old[product.id].quantity;
      }
      const newCart = {
        ...old,
        [product.id]: {
          quantity: quantity + 1,
          product,
        },
      };
      window.localStorage.setItem(`${user.logged_in_user_name} cart`, JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeProductFromCart = () => {};

  const contextValue = {
    productsCart,
    addProductToCart,
    removeProductFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
