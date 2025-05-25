import React from "react";
import { Menu, X, Search, Bell, Plus } from "lucide-react";
import { generalLinks, setting, toolLinks } from "../data/navigationLinks";
import SidebarCategory from "./sidebar/sidebarCategory";
import SidebarItems from "./sidebar/sidebarItems";

interface MobileHeaderProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) => {
  return (
    <div className="lg:hidden flex flex-1 flex-col">
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
        <div className="bg-primary-ultralight flex-1 w-full flex justify-between flex-col items-start p-4 ">
          <div className="flex-1">
            <div className="mb-8">
              <SidebarCategory>General</SidebarCategory>
              <nav>
                {generalLinks.map((link) => (
                  <SidebarItems link={link} key={link.title} />
                ))}
              </nav>
            </div>

            <div>
              <SidebarCategory>Tools</SidebarCategory>
              <nav>
                {toolLinks.map((link) => (
                  <a key={link.id} href="#" className="sidebar-link">
                    <link.icon size={20} />
                    <span>{link.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="ml-12">
            <SidebarItems link={setting} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
