import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavbarProvider from "./context/NavbarContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import ProductProvider from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <SidebarProvider>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </SidebarProvider>
    </ProductProvider>
  </BrowserRouter>
);
