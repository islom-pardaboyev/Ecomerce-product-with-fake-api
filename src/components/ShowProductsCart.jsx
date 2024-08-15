import React, { useContext, useEffect, useRef } from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { gsap } from "gsap";

function ShowProductsCart({ product }) {
  const productRef = useRef();

  useEffect(() => {
    gsap.from(productRef.current, {
      y: 100,
      opacity: 0,
      duration: 2
    });
  }, []);

  const { id, image, title, category, price } = product;
  const { addToBasket } = useContext(ProductContext);
  return (
    <div
      ref={productRef}
      className="col-span-3 overflow-hidden h-[430px] flex flex-col group relative"
    >
      <div className="absolute top-4 -right-11 group-hover:right-4 duration-300 flex items-center gap-3 flex-col">
        <Link
          to={`/about/${id}`}
          className="p-3 bg-red-500 shadow-lg cursor-pointer"
        >
          <FaEye className="text-white" />
        </Link>
        <p
          onClick={() => addToBasket(id)}
          className="p-3 bg-white shadow-lg cursor-pointer"
        >
          <FaPlus />
        </p>
      </div>
      <Link
        to={`/about/${id}`}
        className="border dark:border-neutral-400 min-h-[300px] flex items-center justify-between"
      >
        <img
          className="object-cover mx-auto group-hover:scale-110 duration-300"
          width={150}
          src={image}
          alt={title}
        />
      </Link>

      <p className="capitalize mt-2 text-sm dark:text-neutral-200 text-neutral-500">
        {category}
      </p>
      <Link
        to={`/about/${id}`}
        className="font-bold text-lg dark:text-white hover:underline line-clamp-2 mt-2"
      >
        {title}
      </Link>
      <p className="font-bold mt-2 dark:text-white">$ {price}</p>
    </div>
  );
}

export default ShowProductsCart;
