import React from "react";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <CustomRoutes />
    </main>
  );
}

export default App;
