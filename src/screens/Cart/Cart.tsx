import React, { useState, useEffect } from "react";
import "./Cart.css";
import Trash from "../../assets/icons/trash.png";
import cartIcon from "../../assets/icons/cart.png";
import { CartItem, CartResponse } from "../../types/types";
import { getCart } from "../../hooks/resources/cart";
import  EmptyCart  from "../EmptyCart/EmptyCart";
import { removeAllCart, removeFromCart } from "../../hooks/user/cart";


const Cart = () => {

	function removeItemFromCart(item: any) {
		removeFromCart(item);
		window.location.reload();
	}

	function removeAllItemsFromCart() {
		removeAllCart();
		window.location.reload();
	}


	const cartResponse: CartResponse = getCart();
	const [cart, setCart] = useState(cartResponse);


	useEffect(() => {
		if(cartResponse != cart)
			setCart(cartResponse);
	},[cartResponse]);

	console.log("Carrinho: ", cart);
	// Cart vazio
	// Cart com itens
	if(cart.result.items.length < 1) {
		return (
			<EmptyCart/>
		);
	} 
	return(
		
	<div>
		<div className="uperCart" >
			<img className="cartImage" src={cartIcon} alt="" />
			<h2>Carrinho</h2>

			<div className="removeAll" >
				<img width="25px" src={Trash} alt="" />
				<button onClick={removeAllItemsFromCart} className="removeText" >Remover todos produtos</button>
			</div>
		</div>

		<div className="cardDeck">
			{
				cart.result.items.map((item, key) => {
					return(	
							<div className="cartItem">
								<div className="productRemove" >
									<img width="25px" src={Trash} alt="" />
									<button onClick={() => removeItemFromCart(item)}>REMOVER</button>
								</div> 
								<div className="productInfos" >
									<img className="productImage" src={`http://localhost:8080/images/${item.item.imageName}`} alt="" />
									<div className="productsBasic" >
										<div className="productBasicUp" >

											<span>Nome: {item.item.name}</span> <br/>
											<span>Peso: {item.item.weight}</span> <br/>
											<span>Quantidade: {item.quantity}</span>
										</div>
									</div>

									<span className="productValue" >Preço unitário: R${item.item.value}</span>

								</div>
								<hr />						
							</div>
				)})
		}
	</div>


	<hr/>

	<div className="totally" >
		<span className="leftSpan" >Total Pedido</span>
		<span className="rightSpan" >R$ {cart.result.itemsPrice}</span>
	</div>

	<div className="flexPay" >
				<div className="cartFlex" >
				<button className="buttonPay" >Efetuar pagamento</button>
					<a href="http://localhost:3000/checkout">Clica aqui que efetua o pagamento de verdade</a>
				</div>
	</div>
  
</div>


)};

export default Cart;

      
