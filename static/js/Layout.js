import { Outlet, Link } from "react-router-dom";
import './App.css';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./navigation.js";
import chevron from './chevrond.png';
import chevronr from './chevronr.png';
import Footer from './footer.js';




const Layout = () => {
  return (
    <>
      
      <NavBar />

      <Outlet />

      <Footer/>
    </>
  )
};

export default Layout;