import React, {useState, useEffect} from "react";
import checkoutImage from "../../assets/icons/checkout.png";
import "../Checkout/checkout.css";
import pixLogo from "../../assets/icons/Pix_logo.png";
import { getCart } from "../../hooks/resources/cart";
import { CartResponse } from "../../types/types";

const Checkout = () =>{
  
	const cartResponse: CartResponse = getCart()
	const [cart, setCart] = useState(cartResponse);
  // const [totalItems, setTotalItems] = useState("");
  const [fee, setFee] = useState<number>(0)

  useEffect(() => {
		if(cartResponse != cart) {
      setCart(cartResponse);
    } 
	},[cartResponse]);

  // async function getID() {
  //   const element = await document.getElementById("price");
  //   setTotalItems(element)
  //   console.log(element);
  // } 
  
	return (

		<div>
			<div className="pageTitle" >
				<h1>CHECKOUT</h1>
				<img  className='checkoutImg' width='38px' src={checkoutImage} alt="" />
			</div>
    
			<div className="orderDiv" >

				<div className="orderDetails" >
					<h4>Detalhes do pedido</h4>

        {cart.result.items.map( (item, index) => {
          let price = item.item.value * item.quantity;
          return (
            <div className="order">
						<span> <b>Nome:  {item.item.name} </b> </span>
						<span> Peso: {item.item.weight} </span>
						<span> Quantidade: {item.quantity} </span>
            <span> Preço unitário: R${item.item.value} </span>
						<span id="price"> Preço total R${price}</span>
					</div>
          )
        })}
					<h4 className="priceOrder"> PREÇO TOTAL DO PEDIDO: R${cart.result.itemsPrice}</h4>
				</div>


				<div className="orderDelivery" >
					<h3> Endereço de Entrega </h3>
       
					<input type="text" placeholder="CEP"  name="" id="" />
					<div className="lograNumber" >
						<input type="text" placeholder="Logradouro"  name="" id="" />
						<input className="numberInput" type="text" placeholder="Número"  name="" id="" />
					</div>  
					<input type="text" placeholder="Complemento"  name="" id="" />
					<input type="text" placeholder="Bairro"  name="" id="" />
					<input type="text" placeholder="Referência" name="" id="" />
					<input type="text" placeholder="Cidade" name="" id="" />



					<div className="cartFlex" >
						<button onClick={()=> setFee(4)} className="buttonPay">Calcular Frete</button>
					</div>

				</div>


			</div>

			<div className="prices" >
				<span> <b> PREÇO TOTAL DO ITENS: R$ {}  </b> </span>
				<span> <b> PREÇO TOTAL DO FRETE:  R$  {fee} </b> </span>
				<span className="finalPrice" ><b> PREÇO TOTAL:   </b></span>
			</div>

			<div className="paymentDiv" >
				<span className="divName" >Métodos de pagamento</span>

				<div className="changePayment"  >
					<img width="30px" src={pixLogo} alt="" />
					<span>PIX</span>
					<span className='changeButton' > Mudar Método </span>
				</div>
    
				<span className="methodDescription" >Pague com Pix a qualquer momento! Os pagamentos são simples, práticos e realizados em segundos. </span>

			</div>

			<div className="paymentButtonDiv" >
				<button className="paymentButton" >EFETUAR PAGAMENTO</button>
			</div>

		</div>

	);};

export default Checkout;