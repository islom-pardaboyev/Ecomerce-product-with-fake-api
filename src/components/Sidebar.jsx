import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import SavedProductCart from "./SavedProductCart";

function Sidebar() {
  const { showSideBar, setShowSideBar } = useContext(SidebarContext);
  const {savedProds} = useContext(ProductContext)

  let total = 0

  savedProds.forEach(item => total += item.price * item.amount)
  
  console.log(total);
  

  return (
    <div
      className={`fixed shadow-2xl duration-500 z-20 w-[35vw] top-0 right-0 bg-white h-full ${
        showSideBar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <header className="border-b border-black/30 p-5 flex items-center justify-between">
        <p className="capitalize font-bold text-md">shopping bag (0)</p>

        <FaAngleDoubleRight
          onClick={() => setShowSideBar(!showSideBar)}
          className="cursor-pointer"
        />
      </header>
      <div className="p-5 flex flex-col gap-y-2">
      {savedProds.map(data => <SavedProductCart key={data.id} data={data}/>)}
      </div>
    </div>
  );
}

export default Sidebar;
