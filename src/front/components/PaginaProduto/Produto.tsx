import React from "react";
import exit from './Group 126.png';
import '../PaginaProduto/Produto.css';
import addCart from './addCart.png';

function Produto() {
  return (


  <div className="produtoCard">

      {/* imagem */}
      <img src={exit} />
    <h1> Nome Produto  </h1>
      <span className="productDescription" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </span>
    <h3> Opção congelada {/* script */}  </h3>

      <div className="setQuantity">
        <span> R$ {/* script*/} 20,00 </span>
        <div className="inputQuantity">
          <button className="minus" > - </button>
          <input placeholder="0" type="number" name="" id="" /> 
          <button className="plus" > + </button>
        </div>
    
    </div>

    <br />
    <div className="setQuantity">
        <span> R$ {/* script*/} 20,00 </span>
        <div className="inputQuantity">
          <button className="minus" > - </button>
          <input  placeholder="0" type="number" name="" id="" /> 
          <button className="plus" > + </button>
        </div>
    
    </div>

    <img className="addCart" src={addCart}/>

  </div>




  );

}

export default Produto;



