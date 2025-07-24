import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import NavbarComponent from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <NavbarComponent />

        <Outlet />
  
      <Footer />
    </>
  );
}
