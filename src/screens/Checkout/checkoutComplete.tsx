import React from "react";
import checkouImg from '../../assets/icons/checkout.png';
import './checkoutComplete.css'

function CheckoutComplete() {
  return(
    <div className="completeDiv" >
      <div className="checkoutCompleteDiv" >
          <h2>PEDIDO REALIZADO COM SUCESSO!!</h2>
          <img src={checkouImg} alt="" />
      </div>
    </div>
  )
}
export default CheckoutComplete;