import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));
const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
const Items = lazy(() => import("@/pages/dashboard/Items"));
const StockIn = lazy(() => import("@/pages/dashboard/StockIn"));
const StockOut = lazy(() => import("@/pages/dashboard/StockOut"));
const LowStock = lazy(() => import("@/pages/dashboard/LowStock"));
const Transactions = lazy(() => import("@/pages/dashboard/Transactions"));
const Settings = lazy(() => import("@/pages/dashboard/Settings"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/items" element={<Items />} />
            <Route path="/dashboard/stock-in" element={<StockIn />} />
            <Route path="/dashboard/stock-out" element={<StockOut />} />
            <Route path="/dashboard/transactions" element={<Transactions />} />
            <Route path="/dashboard/low-stock" element={<LowStock />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
