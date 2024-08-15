import React, { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

export const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <SidebarContext.Provider value={{showSideBar, setShowSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
