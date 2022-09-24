import React, {useState, useEffect} from "react";
import "./ProductAdd.css";
import ProductAddImg from "../../assets/icons/productAdd.png";
import DishPicture from "./lasanha-bolonhesa.jpg";
import { getAddCart } from "../../hooks/user/cart";
import { CartItem, ProductAddItem } from "../../types/types";

const ProductAdd = () => {

	const [item, setItem] = useState({ item: { id: "", name: "", imageName: "", description: "", value: 0, weight: 0 }, quantity: 0 });
	const itemResponse: CartItem = getAddCart();

	useEffect(() => {
		if(itemResponse !== item) {
				setItem(itemResponse);
			};
	},[itemResponse]);


	const totalPrice = item.item.value * item.quantity;

	return(
		<div className="addProductMain">
			<div className="CartaddBody">
				<div className="productAddDiv" >
					<img  width="85px" className="imgAdd" src={ProductAddImg} alt="" />
					<h1> Produto adicionado no carrinho</h1>  
				</div>
				<div className="productInfo" >
					<div className="productNamePic" >
						<img src={`http://localhost:8080/images/${item.item.imageName}`} alt=""/>
						<h3 className="productName" >{item.item.name}</h3>
						<div className="productSelectInfo" >
							<span className="span">Peso: {item.item.weight}</span>
							<span className="span">Quantidade: {item.quantity}</span>
							<span className="span">Valor unitário: {item.item.value}</span>
						</div>
						<h3 className="totalValue" >Total: R${totalPrice} </h3>
					</div>
    
				</div>
				
				<div className="submitDiv" >
					<a href="http://localhost:3000"><button className="button" type="submit">Continuar comprando</button></a>
					<a href="http://localhost:3000/cart"><button className="button" type="submit">Ir para o carrinho</button></a>
					
				</div>
			</div>
		</div>
	);
}

export default ProductAdd;