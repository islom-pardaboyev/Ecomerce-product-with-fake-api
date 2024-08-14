import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Users = lazy(() => import("../pages/Users"));
const Products = lazy(() => import("../pages/Products"));
const About = lazy(() => import("../pages/About"));

function CustomRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            }
          >
            <Users />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            }
          >
            <Products />
          </Suspense>
        }
      />
      <Route
        path="/about/:id"
        element={
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            }
          >
            <About/>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default CustomRoutes;
