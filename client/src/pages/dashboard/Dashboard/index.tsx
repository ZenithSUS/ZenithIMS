import { BiPackage } from "react-icons/bi";
import DashboardItemCard from "./DashboardItemCard";
import { CiWarning } from "react-icons/ci";
import { LuArrowDownToLine } from "react-icons/lu";
import { BsArrowBarUp } from "react-icons/bs";

function Dashboard() {
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
          icon={BiPackage}
          value={10}
        />

        <DashboardItemCard
          description="Low Stock Items"
          subDescription="Need restocking"
          bgcolor="orange"
          icon={CiWarning}
          value={2}
        />

        <DashboardItemCard
          description="Stock-In Items"
          subDescription="322 total quantity"
          bgcolor="green"
          icon={LuArrowDownToLine}
          value={322}
        />

        <DashboardItemCard
          description="Stock-Out Today"
          subDescription="37 total quantity"
          bgcolor="purple"
          icon={BsArrowBarUp}
          value={37}
        />
      </div>
    </div>
  );
}

export default Dashboard;
