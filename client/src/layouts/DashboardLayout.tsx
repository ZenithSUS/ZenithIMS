import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="ml-64 flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
