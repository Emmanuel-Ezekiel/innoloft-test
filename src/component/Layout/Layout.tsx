import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../navigation/nav";
import Sidebar from "../sidebar/sidebar";
import ApiRequest from "../../api/Api";

const Layout = () => {
  const { getPostmanCollections } = ApiRequest();

  React.useEffect(() => {
    getPostmanCollections();
  }, []);

  return (
    <div className="bg-backgroundColor">
      <Nav />
      <section className="px-[240px] flex gap-[31px] justify-center w-full md:w-auto md:px-[11px]">
        <Sidebar />
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
