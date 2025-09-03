import React from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import Dashboard from "./Dashboard";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <>
      <AdminSideBar />
      <main className="main-wrapper">
        <AdminHeader />
        <Outlet />

        <AdminFooter />
      </main>
    </>
  );
};

export default AdminHome;
