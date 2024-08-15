import React, { useContext, useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { ProductContext } from "../context/ProductContext";
import gsap from "gsap";

function SavedProductCart({ data }) {
  const { id, amount, category, title, price, image } = data;
  const { removeFromBasket, increaseAmount, decreaseAmount } =
    useContext(ProductContext);
  const cartRef = useRef();

  useEffect(() => {
    gsap.from(cartRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    
    });
  }, []);

  return (
    <div
      ref={cartRef}
      className="px-5 min-h-[100px] py-3 rounded-md border flex items-center justify-between border-black/30 dark:border-neutral-500"
    >
      <div className="flex items-center gap-6">
        <Link to={`about/${id}`}>
          <img className="m-auto" width={60} src={image} alt="" />
        </Link>
        <div className="flex flex-col">
          <p className="font-bold w-[90%] line-clamp-2">{title}</p>
          <p className="text-red-500 capitalize">{category}</p>
          <div className="flex w-fit gap-2 mt-2 border rounded-md items-center">
            <button className=" flex-1 p-1" onClick={() => decreaseAmount(id)}>
              <FaMinus />
            </button>
            <p className=" flex-1 p-1 ">{amount}</p>
            <button className=" flex-1 p-1" onClick={() => increaseAmount(id)}>
              <FaPlus />
            </button>
          </div>
          <p>$ {(amount * parseFloat(price)).toFixed(2)}</p>
        </div>
      </div>

      <FaXmark
        onClick={() => removeFromBasket(id)}
        className="opacity-30 hover:opacity-100 cursor-pointer"
      />
    </div>
  );
}

export default SavedProductCart;
