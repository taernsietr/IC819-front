import React from "react";
import '../PaginaProduto/ProdutoAdicionado.css';
import ProductAdd from './ProductAdd.png';
import DishPicture from './AntepastoCover.png';

function ProdutoAdicionado() {
  return(
    <div className="addProductMain">
      <div className="productAddDiv" >
        <img  width="85px" className="imgAdd" src={ProductAdd} alt="" />
        <h1> Produto adicionado no carrinho</h1>  
      </div>

  <div className="productInfo" >
    <div className="productNamePic" >
        <img src={DishPicture} alt=""/>
        <h3 className="productName" >Nome do Produto</h3>
      <div className="productSelectInfo" >
        <span>Quantidade: X - Peso: xxxg</span>
        <span>Quantidade: X - Peso: xxxg</span>
      </div>
      <h3 className="totalValue" >Total: R$ XX,00</h3>
    </div>
    
  </div>
  
    

  <div className="submitDiv" >
    <button type="submit">Continuar comprando</button>
    <button type="submit">Ir para o carrinho</button>
  </div>
    </div>
  );
}

export default ProdutoAdicionado;