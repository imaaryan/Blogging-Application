import NavBar from '../components/NavBar.jsx';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer.jsx';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
