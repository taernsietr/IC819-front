import React from 'react';
// import from './assets/icons';
// import logo from './assets/svg/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import LoginInput from './components/LoginInput/LoginInput';
import Produto from './components/PaginaProduto/Produto';
import ProdutoAdicionado from './components/PaginaProduto/ProdutoAdicionado';
import Carrinho from '../front/components/Carrinho/Carrinho';
import Checkout from '../front/components/Checkout/checkout';
import CriarPrato from './components/CriarPratos/CriarPrato';

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Produto/> */}
      {/* <Carrinho/> */}
      {/* <Checkout/> */}
      <CriarPrato/>
      <Footer />



    </div>
  );
}

export default App;
