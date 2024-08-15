import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { MagnifyingGlass } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";

const About = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const aboutProductCartRef = useRef(null);

  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
  document.title = "About Product";

  useEffect(() => {
    if (aboutProductCartRef.current) {
      gsap.from(aboutProductCartRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
      });
    }
  }, [aboutProductCartRef]);

  return (
    <div className="w-screen fixed top-0 left-0 h-screen dark:bg-neutral-800 dark:text-white flex items-center justify-center">
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
        <div
          ref={aboutProductCartRef}
          className="p-4 border dark:border-neutral-500 w-[1000px] flex items-center gap-36"
        >
          <img width={300} src={data.image} alt="" />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl">{data.title}</h1>
            <p className="font-bold text-rose-500 text-xl mt-2">
              $ {data.price}
            </p>
            <p className="my-5 text-sm">{data.description}</p>
            <button
              onClick={() => navigate(-1)}
              className="bg-black text-white py-3 px-5 flex items-center space-x-5"
            >
              <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />{" "}
              <span>Back</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

