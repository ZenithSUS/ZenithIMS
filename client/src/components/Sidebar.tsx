import { LuLayoutDashboard, LuArrowDownToLine } from "react-icons/lu";

import { BiPackage } from "react-icons/bi";
import { BsArrowBarUp } from "react-icons/bs";
import { CiSettings, CiWarning } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

type MenuItem = {
  title: string;
  path: string;
  icon: IconType;
};

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    title: "Items",
    path: "/dashboard/items",
    icon: BiPackage,
  },
  {
    title: "Stock-In",
    path: "/dashboard/stock-in",
    icon: LuArrowDownToLine,
  },
  {
    title: "Stock-Out",
    path: "/dashboard/stock-out",
    icon: BsArrowBarUp,
  },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: GrTransaction,
  },
  {
    title: "Low Stock",
    path: "/dashboard/low-stock",
    icon: CiWarning,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: CiSettings,
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-sidebar text-sidebar-text fixed top-0 left-0 h-screen w-64 p-4">
      <ul className="mt-6 space-y-2">
        {menuItems.map(({ title, path, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg p-3 transition-all ${
                  isActive
                    ? "bg-sidebar-accent text-white"
                    : "hover:bg-sidebar-accent"
                }`
              }
            >
              <Icon className="text-xl" />
              <span>{title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
