import React from "react";
import checkoutImage from '../../assets/icons/checkout.png';
import '../Checkout/checkout.css'

function Checkout() {
  return (

    <div>
<div className="pageTitle" >
      <h1>CHECKOUT</h1>
      <img  className='checkoutImg' width='38px' src={checkoutImage} alt="" />
    </div>
    
    <div className="orderDiv" >

    

  <div className="orderDetails" >
    <h4>Detalhes do pedido</h4>

    <div className="order">
      <span> <b>Nome:  Nome do produto </b> </span>
      <span> Tamanho: xxxg </span>
      <span> Quantidade: X </span>
      <span> Preço do pedido: R$ xx,xx </span>
    </div>

    <div className="order">
      <span> <b>Nome:  Nome do produto </b> </span>
      <span> Tamanho: xxxg </span>
      <span> Quantidade: X </span>
      <span> Preço do pedido: R$ xx,xx </span>
    </div>

    <div className="order">
      <span> <b>Nome:  Nome do produto </b> </span>
      <span> Tamanho: xxxg </span>
      <span> Quantidade: X </span>
      <span> Preço do pedido: R$ xx,xx </span>
    </div>

    <h4 className="priceOrder"  >PREÇO TOTAL DO PEDIDO: R$ XX,XX</h4>
  </div>


    <div className="orderDelivery" >
        <h3> Endereço de Entrega </h3>
       
      <input type="text" placeholder="CEP"  name="" id="" />
      <div className="lograNumber" >
      <input type="text" placeholder="Logradouro"  name="" id="" />
      <input className="numberInput" type="text" placeholder="Número"  name="" id="" />
      </div>  
      <input type="text" placeholder="Complmeento"  name="" id="" />
      <input type="text" placeholder="Bairro"  name="" id="" />
      <input type="text" placeholder="Referência" name="" id="" />
      <input type="text" placeholder="Cidade" name="" id="" />



    <div className="cartFlex" >
        <button className="buttonPay" >Efetuar pagamento</button>
    </div>

    </div>


  </div>

</div>

  )}

  export default Checkout;