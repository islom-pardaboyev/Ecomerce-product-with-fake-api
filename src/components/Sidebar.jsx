import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import SavedProductCart from "./SavedProductCart";

function Sidebar() {
  const { showSideBar, setShowSideBar } = useContext(SidebarContext);
  const {savedProds} = useContext(ProductContext)

  let total = 0

  savedProds.forEach(item => {
    const itemTotal = parseFloat(item.price * item.amount);
    total += itemTotal;
  });
  total = total.toFixed(2);
  

  return (
    <div
      className={`fixed shadow-2xl duration-500 z-20 w-[35vw] h-screen top-0 right-0 bg-white dark:bg-neutral-700 dark:text-white overflow-y-scroll ${
        showSideBar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <header className="border-b border-black/30 dark:border-neutral-500 p-5 flex items-center justify-between">
        <div className="flex flex-col sticky top-0">
        <p className="capitalize font-medium text-xs">shopping bag ({savedProds.length})</p>
        <p className="capitalize text-xl font-bold ">total: ${total}</p>
        </div>

        <FaAngleDoubleRight
          onClick={() => setShowSideBar(!showSideBar)}
          className="cursor-pointer"
        />
      </header>
      <div className="p-5 flex flex-col overflow-y-auto gap-y-2">
      {savedProds.map(data => <SavedProductCart key={data.id} data={data}/>)}
      </div>
      
    </div>
  );
}

export default Sidebar;

