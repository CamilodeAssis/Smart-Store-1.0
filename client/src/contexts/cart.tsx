import { createContext, useState, useEffect, useContext } from "react";

import { AuthContext } from "./auth";

import { DataProductType } from "../types/dataProductType";
import { string } from "yup";

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
  addQuantity: (index: string, value: number) => void;
  decQuantity: (index: string, value: number) => void;
  subValue: any;
  sumValue: number;
  sumTotal: () => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: Props) => {
  const { user, doLogout } = useContext(AuthContext);
  const [productsCart, setProductsCart] = useState<any>({});
  const [url, setUrl] = useState("");
  const [sumValue, setSumValue] = useState(0);
  const [subValue, setSubValue] = useState(0);



  useEffect(() => {
    const cartLocalStorage = window.localStorage.getItem(
      `${user.logged_in_user_name} cart`
    );
    if (cartLocalStorage && user) {
      setProductsCart(JSON.parse(cartLocalStorage));
    }
  }, [user]);

  const sumTotal = () => {
    let sum = 0;
    const keys = Object.keys(productsCart);

    keys.map((key) => {
      sum += productsCart[key].subValue;
      setSumValue(sum);
    });
  };

  const addProductToCart = (product: any) => {
    sumTotal()
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
          subValue: product.sale_value,
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
      let sum = 0;
      const keys = Object.keys(newCart);

      for (const key of keys) {
        sum += newCart[key].subValue;
        setSumValue(sum);
      }

      window.localStorage.setItem(
        `${user.logged_in_user_name} cart`,
        JSON.stringify(newCart)
      );
      return newCart;
    });
  };

  const addQuantity = (index: string, valor: number) => {
    setProductsCart((old: any) => {
      const newCart: any = {};
      Object.keys(old).forEach((id) => {
        const newProduct = { ...old[id] };
        if (id === index) {
          newProduct.quantity = valor + 1;
          newProduct.subValue =
            newProduct.product.sale_value * newProduct.quantity;
        }
        newCart[id] = newProduct;
      });
      let sum = 0;
      const keys = Object.keys(newCart);

      for (const key of keys) {
        sum += newCart[key].subValue;
        setSumValue(sum);
      }
      window.localStorage.setItem(
        `${user.logged_in_user_name} cart`,
        JSON.stringify(newCart)
      );
      return newCart;
    });
  };

  const decQuantity = (index: string, valor: number) => {
    setProductsCart((old: any) => {
      const newCart: any = {};
      Object.keys(old).forEach((id) => {
        const newProduct = { ...old[id] };
        if (id === index) {
          if (newProduct.quantity >= 2) {
            newProduct.quantity = valor - 1;
            newProduct.subValue =
              newProduct.product.sale_value * newProduct.quantity;
          }
        }
        newCart[id] = newProduct;
      });
      let sum = 0;
      const keys = Object.keys(newCart);

      for (const key of keys) {
        sum += newCart[key].subValue;
        setSumValue(sum);
      }

      window.localStorage.setItem(
        `${user.logged_in_user_name} cart`,
        JSON.stringify(newCart)
      );
      return newCart;
    });
  };

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

  const contextValue = {
    productsCart,
    addProductToCart,
    removeProductFromCart,
    getUrl,
    url,
    formatNumber,
    formatMoney,
    addQuantity,
    decQuantity,
    subValue,
    sumValue,
    sumTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
