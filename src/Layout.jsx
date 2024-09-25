import React, { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import FooterContact from "./Companent/FooterContact/FooterContact";
import Navbar from "./Companent/Navbar/Navbar";
import Footer from "./Companent/Footer/Footer";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterContact />
      <Footer />
    </div>
  );
}

export default Layout;
