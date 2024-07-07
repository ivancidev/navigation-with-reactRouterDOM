import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./root.css";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
