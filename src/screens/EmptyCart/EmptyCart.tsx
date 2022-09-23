import React from "react";
import EmptyIcon from "../../assets/svg/sad.svg"
import './EmptyCart.css'

const EmptyCart = () => {
  return(
    <div className="main">
        <h1>Seu Carrinho Está vazio ;(</h1>
          <img width="70px" src={EmptyIcon} alt=""  />
          <a href="http://localhost:3000/">Retornar a home</a>
    </div>
  )
}

export default EmptyCart;