import React from "react";
import { useFetch } from "../hook/useFetch";
import { MagnifyingGlass } from "react-loader-spinner";
import { FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ShowProductsCart from "../components/ShowProductsCart";

function Products() {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  return (
    <section className="container mx-auto">
      {loading ? (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <div className="grid grid-cols-12 items-center gap-8 mt-5 justify-between">
          {data.map((product) => (
            <ShowProductsCart product={product} key={product.id}/>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
