import React, {FC, useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContainerMenus from "../../components/ContainerMenus/ContainerMenus";
import Item from "../../components/Item/Item";

const HomeScreen = () => {
  const [term,setTerm] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setModalShow(false);

  function changeTerm(event: any) {
      let value = event.target.value
      setTerm(value);                                         
    }
    
  return (
    <>
      <Menu search={term} changeTerm={changeTerm}/>
        <ContainerMenus filter={term} />
        <div>
      <button onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>
    <Item
      show={modalShow}
      onHide={()=> setModalShow(false)}
    />
    </div>
    </>
  )
}

export default HomeScreen;
