import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import ContainerMenus from './components/ContainerMenus/ContainerMenus'

const App = () => {


  
  return (
    <div className="App">
      <Menu />
      <ContainerMenus />
          {/* Componente de menu mobile

          <div className="menuMobileOptionsClient">
            <nav className="cardBottom">
                <img id="cartBottom" src="cart.svg" />
                <p id="cardBottomText">Carrinho</p>
            </nav>

            <nav className="cardBottom">
                <img id="profileBottom" src="profile.svg"/>
                <p>Perfil</p>
            </nav>
        </div>
        */}
      <Footer/>
    </div>
  );
}

export default App;
