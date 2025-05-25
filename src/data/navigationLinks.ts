import {
  LayoutDashboard,
  History,
  Calendar,
  ClipboardList,
  BarChart,
  Microscope,
  MessageSquare,
  LifeBuoy,
  Settings,
} from "lucide-react";

export interface NavLink {
  id: string;
  title: string;
  icon: any;
  isActive?: boolean;
}

export const generalLinks: NavLink[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    id: "history",
    title: "History",
    icon: History,
  },
  {
    id: "calendar",
    title: "Calendar",
    icon: Calendar,
  },
  {
    id: "appointments",
    title: "Appointments",
    icon: ClipboardList,
  },
  {
    id: "statistics",
    title: "Statistics",
    icon: BarChart,
  },
  {
    id: "tests",
    title: "Tests",
    icon: Microscope,
  },
];

export const toolLinks: NavLink[] = [
  {
    id: "chat",
    title: "Chat",
    icon: MessageSquare,
  },
  {
    id: "support",
    title: "Support",
    icon: LifeBuoy,
  },
];

export const setting: NavLink = {
  id: "setting",
  title: "Setting",
  icon: Settings,
};
