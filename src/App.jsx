import React from "react";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

library.add(fas);

function App() {
  return (
    <main className="flex flex-col">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <CustomRoutes />
      <Sidebar />
    </main>
  );
}

export default App;
