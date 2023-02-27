import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./layout.css";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="background-glow" />

      <Outlet />
    </>
  );
}

export default Layout;
