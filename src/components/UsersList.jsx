import React from "react";

function UsersList({user}) {
    const {id, name, email, phone} = user
  return (
    <tr>
      <td className="px-6 py-4 dark:text-neutral-300 text-sm text-gray-900">{id}</td>
      <td className="px-6 py-4 dark:text-neutral-300 text-sm text-gray-900">{name}</td>
      <td className="px-6 py-4 dark:text-neutral-300 text-sm text-gray-900">{email}</td>
      <td className="px-6 py-4 dark:text-neutral-300 text-sm text-gray-900">{phone}</td>
    </tr>
  );
}

export default UsersList;
