import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import ContainerMenus from './components/ContainerMenus/ContainerMenus'
import HomeScreen from './screens/HomeScreen';

const App = () => {  
  return (
    <div className="App">
      <HomeScreen/>
    </div>
  );
}

export default App;
