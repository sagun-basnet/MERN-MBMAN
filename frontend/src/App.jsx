import { useEffect, useState } from "react";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import Footer from "./Footer";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import HomeLayout from "./layout/HomeLayout";
import Table from "./pages/Table";
import EditUser from "./pages/EditUser";
// import AdminLayout from "./layout/AdminLayout";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    // {
    //   path: "/dashboard",
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <DasboardHome />,
    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <UserManagemet />,
    //     },
    //     {
    //       path: "/dashboard/add-user",
    //       element: <AddUser />,
    //     },
    //   ],
    // },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/edit-user/:id",
      element: <EditUser />,
    },
    {
      path: "/table",
      element: <Table />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />

      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
};

export default App;
