import "./App.css";
import { CssBaseline } from "@mui/material";
import DashboardLayout from "./components/DashboardLayout";
import RevenueByCountryChart from "./components/RevenueByCountryChart";
import MauVsDauChart from "./components/MAUvsDAUChart";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <DashboardLayout />
      <DataTable />
      <RevenueByCountryChart />
      <MauVsDauChart />
    </div>
  );
}

export default App;
