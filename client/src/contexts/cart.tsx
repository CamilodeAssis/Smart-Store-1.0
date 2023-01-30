import { createContext, useState, useEffect, useContext } from "react";

import { AuthContext } from "./auth";

import { DataProductType } from "../types/dataProductType";

type Props = {
  children: React.ReactNode;
};

interface CartContextProps {
  productsCart: any;
  addProductToCart: (product: any) => void;
  removeProductFromCart: (productId: any) => void;
  getUrl: (url: string) => void;
  url: string;
  formatNumber: (number: number) => string;
  formatMoney: (money: number) => string;
  subTotal: (value: number, quantity: number) => string;
  changeQuantity: (value: any, newQuantity: any) => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: Props) => {
  const { user, doLogout } = useContext(AuthContext);
  const [productsCart, setProductsCart] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    const cartLocalStorage = window.localStorage.getItem(
      `${user.logged_in_user_name} cart`
    );
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
          url,
        },
      };
      window.localStorage.setItem(
        `${user.logged_in_user_name} cart`,
        JSON.stringify(newCart)
      );
      return newCart;
    });
  };

  const removeProductFromCart = (productId: any) => {
    setProductsCart((old: any) => {
      const newCart: any = {};
      Object.keys(old).forEach((id) => {
        if (id !== productId) {
          newCart[id] = old[id];
        }
      });
      window.localStorage.setItem(
        `${user.logged_in_user_name} cart`,
        JSON.stringify(newCart))
      return newCart;
    });
  };

  const changeQuantity = (productId: any, newQuantity: any) => {
    setProductsCart((old: any) => {
      const newCart: any = {};
      Object.keys(old).forEach((id) => {
        const newProduct = {...old[id]}
        if (id === productId) {
          newProduct.quantity = newQuantity;
        }
        newCart[id] = newProduct;
      });
      window.localStorage.setItem(
        `${user.logged_in_user_name} cart`,
        JSON.stringify(newCart))
      return newCart;
    });

  }

  const getUrl = (url: string) => {
    setUrl(url);
  };

  const formatNumber = (number: number) => {
    const formatedNumber = new Intl.NumberFormat("pt-BR", {
      minimumIntegerDigits: 2,
    }).format(number);

    return formatedNumber;
  };

  const formatMoney = (money: number) => {
    const dinheiroFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(money);

    return dinheiroFormatado;
  };

  const subTotal = (value: number, quantity: number) => {
    const subtotal = value * quantity;

    return formatMoney(subtotal);
  };

  const contextValue = {
    productsCart,
    addProductToCart,
    removeProductFromCart,
    getUrl,
    url,
    formatNumber,
    formatMoney,
    subTotal,
    changeQuantity
   

  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
