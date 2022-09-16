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

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Produto/> */}
      <Carrinho/>
      <Footer />



    </div>
  );
}

export default App;
