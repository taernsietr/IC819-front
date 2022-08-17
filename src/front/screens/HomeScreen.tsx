import React, {FC, useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import ContainerMenus from "../components/ContainerMenus/ContainerMenus";

const HomeScreen = () => {

  return (
    <div className="App">
    <Menu/>
    <ContainerMenus/>
    </div>
  )
}

export default HomeScreen;
