import React from "react";

function UsersTile({ title }) {
  
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{title.title}</th>
  );
}

export default UsersTile;
