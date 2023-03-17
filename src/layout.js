import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarIndex";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;