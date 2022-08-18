import React, {FC, useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContainerMenus from "../../components/ContainerMenus/ContainerMenus";

const HomeScreen = () => {
  const [term,setTerm] = useState("");

  function changeTerm(event: any) {
      let value = event.target.value
      setTerm(value);                                         
    }
    
  return (
    <div>
      <Menu search={term} changeTerm={changeTerm}/>
        <ContainerMenus filter={term} />
    </div>
  )
}

export default HomeScreen;
