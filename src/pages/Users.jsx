import React from "react";
import { useFetch } from "../hook/useFetch";
import { Bars, MagnifyingGlass } from "react-loader-spinner";
import UsersTile from "../components/UsersTitle";
import UsersList from "../components/UsersList";

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

  return (
    <section className="container h-screen overflow-y-auto mx-auto mt-5">
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
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
