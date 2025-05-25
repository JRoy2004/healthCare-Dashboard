import React from "react";
import { Search, Bell, Plus } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white flex items-center justify-between  ">
      <div className="w-[184px] py-6 ml-[-12px] bg-primary-ultralight">
        <div className="flex justify-center items-center">
          <span className="text-primary-medium font-semibold text-xl">
            Health
          </span>
          <span className="text-primary-dark font-semibold text-xl">care.</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-white">
        <div className=" h-8 w-full flex items-center justify-center ">
          <Search className="relative left-8  text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search"
            className=" pl-10 pr-4 py-2 rounded-lg bg-white border-primary-light border text-sm w-[90%] focus:outline-none"
          />
          <button className="p-2  rounded-lg relative right-10">
            <Bell size={20} color="rgba(47,50,156,255)" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-center gap-4 justify-end bg-primary-ultralight my-[-20px] py-[22px] ml-5 pr-6">
        <div className="flex items-center justify-center rounded-lg w-8 h-8 bg-primary-medium">
          <span className="text-lg">🧔‍♂️</span>
        </div>

        <button className="p-1 bg-indigo-600 text-white rounded-lg z-1">
          <Plus strokeWidth={3} />
        </button>
      </div>
    </header>
  );
};

export default Header;
