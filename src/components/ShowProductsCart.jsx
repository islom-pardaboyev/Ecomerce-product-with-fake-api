import React, { useContext } from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function ShowProductsCart({product}) {
    const {id, image, title, category, price} = product
    const {addToBasket} = useContext(ProductContext)
  return (
    <div
      className="col-span-3 overflow-hidden h-[430px] flex flex-col group relative"
    >
      <div className="absolute top-4 -right-11 group-hover:right-4 duration-300 flex items-center gap-3 flex-col">
        <Link
          to={`/about/${id}`}
          className="p-3 bg-red-500 shadow-lg cursor-pointer"
        >
          <FaEye className="text-white" />
        </Link>
        <p onClick={() => addToBasket(id)} className="p-3 bg-white shadow-lg cursor-pointer">
          <FaPlus />
        </p>
      </div>
      <Link to={`/about/${id}`} className="border min-h-[300px] flex items-center justify-between">
        <img
          className="object-cover mx-auto group-hover:scale-110 duration-300"
          width={150}
          src={image}
          alt={title}
        />
      </Link>

      <p className="capitalize mt-2 text-sm text-neutral-500">
        {category}
      </p>
      <Link
        to={`/about/${id}`}
        className="font-bold text-lg hover:underline line-clamp-2 mt-2"
      >
        {title}
      </Link>
      <p className="font-bold mt-2">$ {price}</p>
    </div>
  );
}

export default ShowProductsCart;
