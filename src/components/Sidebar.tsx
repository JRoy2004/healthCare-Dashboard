import React from "react";
import { generalLinks, toolLinks, setting } from "../data/navigationLinks";
import SidebarCategory from "./sidebar/sidebarCategory";
import SidebarItems from "./sidebar/sidebarItems";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primary-ultralight w-[172px] hidden lg:flex justify-between flex-col items-center p-4 ">
      <div>
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
      <SidebarItems link={setting} />
    </aside>
  );
};

export default Sidebar;
