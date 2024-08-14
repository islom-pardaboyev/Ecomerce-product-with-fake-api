import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { MagnifyingGlass } from "react-loader-spinner";

const About = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
  console.log(data);

  return (
    <div className="w-screen fixed top-0 left-0 h-screen flex items-center justify-center">
      {loading ? (
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
      ) : (
        <div className="p-4 border flex items-start gap-3">
          <img width={300} src={data.image} alt="" />
          <div>{data.title}</div>
        </div>
      )}
    </div>
  );
};

export default About;
