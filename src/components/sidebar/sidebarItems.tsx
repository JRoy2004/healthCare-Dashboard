import { NavLink } from "../../data/navigationLinks";

const SidebarItems = ({ link }: { link: NavLink }) => {
  return (
    <a
      key={link.id}
      href="#"
      className={`sidebar-link ${link.isActive ? "active" : ""} ${
        link.id === "setting" ? "-ml-12" : ""
      }`}
    >
      <link.icon size={20} />
      <span>{link.title}</span>
    </a>
  );
};

export default SidebarItems;
