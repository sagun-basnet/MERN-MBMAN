import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
