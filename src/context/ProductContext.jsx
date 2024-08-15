import React, { createContext, useState } from "react";
import { useFetch } from "../hook/useFetch";
import toast from "react-hot-toast";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  const [savedProds, setSavedProds] = useState([]);

  function addToBasket(id) {
    const newProd = data.find((prod) => prod.id == id);

    if (!newProd) {
      return;
    }

    const isAlreadyInBasket = savedProds.some((prod) => prod.id === id);

    if (isAlreadyInBasket) {
      toast.error("This Products is already Exist");
    } else {
      setSavedProds([...savedProds, { ...newProd, amount: 1 }]);
      toast.success("Product Added");
    }
  }

  function removeFromBasket(id) {
    const newProds = savedProds.filter((prod) => prod.id !== id);
    toast.success("Product removed from basket")

    setSavedProds(newProds);
  }

  function increaseAmount(id) {
    const newCart = savedProds.find((prod) => prod.id === id);

    if (newCart) {
      if (newCart.amount < newCart?.rating?.count) {
        newCart.amount += 1;
        setSavedProds([...savedProds]);
      }
    }
  }

  function decreaseAmount(id) {
    const newCart = savedProds.find((prod) => prod.id === id);
    if (newCart) {
      if (newCart.amount > 1) {
        newCart.amount -= 1;
        setSavedProds([...savedProds]);
      }
    }
  }

  return (
    <ProductContext.Provider
      value={{
        data,
        loading,
        savedProds,
        addToBasket,
        setSavedProds,
        removeFromBasket,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
