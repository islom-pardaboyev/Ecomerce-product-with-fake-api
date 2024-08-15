import React, { createContext, useEffect, useState } from "react";

export const NavbarContext = createContext();

function NavbarProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <NavbarContext.Provider value={{ setDarkMode, darkMode }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarProvider;
