import React from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/Navbar";

const Layout = () => {
  return (
    <Flex flexDirection="column">
      <NavComponent />
      <Outlet />
    </Flex>
  );
};

export default Layout;
