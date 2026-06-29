import { BiPackage } from "react-icons/bi";
import DashboardItemCard from "./DashboardItemCard";
import { CiWarning } from "react-icons/ci";
import { LuArrowDownToLine, LuLoader } from "react-icons/lu";
import { BsArrowBarUp } from "react-icons/bs";
import useDashboard from "./useDashboard";
import { MdErrorOutline } from "react-icons/md";

function Dashboard() {
  const { dashboardData, isLoading, isError } = useDashboard();

  return (
    <div className="flex flex-col gap-2">
      {/* Dashboard Title */}
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-ink-secondary">
          Welcome back, Admin! Here's what's happening with your inventory.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardItemCard
          description="Total Items"
          subDescription="All Categories"
          bgcolor="blue"
          icon={isLoading ? LuLoader : isError ? MdErrorOutline : BiPackage}
          value={dashboardData?.data.totalItems ?? 0}
        />

        <DashboardItemCard
          description="Low Stock Items"
          subDescription="Need restocking"
          bgcolor="orange"
          icon={isLoading ? LuLoader : isError ? MdErrorOutline : CiWarning}
          value={dashboardData?.data.totalLowStock ?? 0}
        />

        <DashboardItemCard
          description="Stock-In Items"
          subDescription="322 total quantity"
          bgcolor="green"
          icon={
            isLoading ? LuLoader : isError ? MdErrorOutline : LuArrowDownToLine
          }
          value={dashboardData?.data.totalStockIn ?? 0}
        />
        <DashboardItemCard
          description="Stock-Out Today"
          subDescription="37 total quantity"
          bgcolor="purple"
          icon={isLoading ? LuLoader : isError ? MdErrorOutline : BsArrowBarUp}
          value={dashboardData?.data.totalStockOutToday ?? 0}
        />
      </div>
    </div>
  );
}

export default Dashboard;
