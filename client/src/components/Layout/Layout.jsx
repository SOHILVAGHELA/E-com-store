import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  { Toaster } from 'react-hot-toast';
const Layout = (props) => {
  return (
    <>
      <div>
        <Header></Header>
        <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {props.children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Layout;
