import React, { useEffect, useRef } from "react";
import { useFetch } from "../hook/useFetch";
import { MagnifyingGlass } from "react-loader-spinner";
import UsersTile from "../components/UsersTitle";
import UsersList from "../components/UsersList";
import { gsap } from "gsap";

function Users() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const titles = [
    {
      id: 1,
      title: "ID",
    },
    {
      id: 2,
      title: "Name",
    },
    {
      id: 3,
      title: "Email",
    },
    {
      id: 4,
      title: "Phone",
    },
  ];
  const tableRef = useRef();

  document.title = "Users";

  useEffect(() => {
    if (tableRef.current) {
      gsap.from(tableRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.3,
      });
    }
  }, []); 

  return (
    <section className="container h-screen overflow-y-auto mx-auto">
      {loading ? (
        <div className="w-full fixed top-0 left-0 h-screen flex items-center justify-center">
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
        <table
          ref={tableRef}
          className="min-w-full divide-y mt-32 divide-gray-200"
        >
          <thead className="bg-gray-50 dark:bg-neutral-500 duration-300">
            <tr>
              {titles.map((title) => (
                <UsersTile key={title.id} title={title} />
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((user) => (
              <UsersList user={user} key={user.id} />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Users;

