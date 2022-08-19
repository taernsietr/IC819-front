import React from "react";
import Trash from "../../assets/icons/trash.png";
import "./Cart.css";
import cart from "../../assets/icons/cart.png";
import imgCart from "../../assets/img/AntepastoDeBerinjela.jpg";


const Cart = (params:any) => {
    const [conter, setconter] = React.useState(0)

    return(
  <div>
    <div className="uperCart" >
       <img className="cartImage"  src={cart} alt="" />
       <h2>Carrinho</h2>
      <div className="removeAll" >
        <img width="25px" src={Trash} alt="" />
        <span className="removeText" >Remover todos produtos</span>
      </div>
    </div>
    <div className="cardProduto" >
      <div className="productRemove" >
        <img width="25px" src={Trash} alt="" />
        <span>REMOVER</span>
        </div> 
        <div className="uperTextProduct" >
          <span className="upertTextImg" > Produto</span> 
          <span className="upertTextQuant"  >Quantidade</span>
          <span className="upertTextValue"> Valor</span>
        </div>
        <div className="productInfos" >
          <img className="productImage" src={imgCart} alt="" />
  
          <div className="productsBasic" >
            <div className="productBasicUp" >
              <span>Nome do produto</span>
              <span> - peso do produto </span>
            </div>
            <div>
              <span>Cardário:</span>
              <span>nome do cordápio</span>
            </div>
          </div>
  
          <div className="inputQuantity">
             <button onClick={()=> setconter( conter -1) } className="minus" > - </button>
             <input value={conter} placeholder="00" type="number" name="" id="" /> 
              <button onClick={()=> setconter(conter + 1)} className="plus" > + </button>
           </div>
  
          <span className="productValue" >R$ Valor</span>
  
        </div>
  <hr />
  {/* ------------------------------------------------------ */}
      <div className="productRemove" >
        <img width="25px" src={Trash} alt="" />
        <span>REMOVER</span>
      </div>
  
  <div className="uperTextProduct" >
          <span className="upertTextImg" > Produto</span> 
          <span className="upertTextQuant"  >Quantidade</span>
          <span className="upertTextValue"> Valor</span>
        </div>
        <div className="productInfos" >
          <img className="productImage" src={imgCart} alt="" />
  
          <div className="productsBasic" >
            <div className="productBasicUp" >
              <span>Nome do produto</span>
              <span> - peso do produto </span>
            </div>
            <div>
              <span>Cardário:</span>
              <span>nome do cordápio</span>
            </div>
          </div>
  
          <div className="inputQuantity">
             <button className="minus" > - </button>
             <input placeholder="00" type="number" name="" id="" /> 
              <button className="plus" > + </button>
           </div>
  
          <span className="productValue" >R$ Valor</span>
  
        </div>
  
  <hr />
  
    <div className="totallyProduct" >
      <span className="leftSpan" >Total produtos(s)</span>
      <span className="rightSpan" >R$ Valor</span>
    </div>
  
    <div className="deliveryProduct" >
      <span className="leftSpan" >Entrega</span>
      <span className="rightSpan" >R$ Valor</span>
    </div>
  
  <hr />
  
  <div className="totally" >
      <span className="leftSpan" >Total Pedido</span>
      <span className="rightSpan" >R$ Valor</span>
    </div>  
    
   </div>
  
   <div className="flexPay" >
     <div className="cartFlex" >
        <button className="buttonPay" >Efetuar pagamento</button>
      </div>
      </div>
  
      
  </div>
    );
}

export default Cart;