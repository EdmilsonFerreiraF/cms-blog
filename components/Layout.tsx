import React from "react";
import Header from "./Header";

interface Children {
  children: JSX.Element;
}

const Layout = ({ children }: Children) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
