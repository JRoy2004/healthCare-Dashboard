import React from "react";
import { Menu, X, Search, Bell, Plus } from "lucide-react";
import { generalLinks, toolLinks } from "../data/navigationLinks";

interface MobileHeaderProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) => {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between p-4 bg-primary-ultralight">
        <div className="flex items-center">
          <button
            className="mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex justify-center items-center">
            <span className="text-primary-medium font-semibold text-xl">
              Health
            </span>
            <span className="text-primary-dark font-semibold text-xl">
              care.
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-primary-ultralight">
          <div className=" h-8 w-full flex items-center justify-center ">
            <Search
              className="relative left-8  text-gray-400 -ml-4 mr-4 xs:ml-0 xs:mr-0"
              size={16}
            />
            <input
              type="text"
              placeholder="Search"
              className=" pl-10 pr-4 py-2 hidden xs:block rounded-lg bg-white border-primary-light border text-sm w-[90%] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center gap-4 justify-end bg-primary-ultralight my-[-20px] py-[22px] ml-5 pr-6">
          <button className="p-4  rounded-lg ">
            <Bell size={20} color="rgba(47,50,156,255)" />
          </button>
          <div className="flex items-center justify-center rounded-lg w-8 h-8 bg-primary-medium">
            <span className="text-lg">🧔‍♂️</span>
          </div>

          <button className="p-1 bg-indigo-600 text-white rounded-lg z-1">
            <Plus strokeWidth={3} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white absolute z-10 w-full shadow-lg">
          <div className="p-4">
            <h3 className="text-xs uppercase text-gray-400 font-medium mb-2">
              General
            </h3>
            <nav className="flex flex-col gap-2">
              {generalLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg ${
                    link.isActive
                      ? "bg-blue-50 text-primary-dark"
                      : "text-gray-600"
                  }`}
                >
                  <link.icon size={20} />
                  <span>{link.title}</span>
                </a>
              ))}
            </nav>

            <h3 className="text-xs uppercase text-gray-400 font-medium mt-4 mb-2">
              Tools
            </h3>
            <nav className="flex flex-col gap-2">
              {toolLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-600"
                >
                  <link.icon size={20} />
                  <span>{link.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
