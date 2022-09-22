import React, {useState, useEffect} from "react";
import "./Item.css";
import  Modal  from "react-bootstrap/Modal";
import { CartItem, ItemModal } from "../../types/types";
import exit from "../../assets/icons/exit.png";
import addCart from "../../assets/img/addCart.png";
import { addToCart } from "../../hooks/user/cart";

const Item = (props: ItemModal) => {
	const [quantity,setQuantity] = useState<number>(0);
	
	function addQuantity() {
		setQuantity( quantity + 1);
	}

	function decreaseQuantity() {
		if (quantity <= 0) {
			return quantity;
		} else {
			setQuantity( quantity - 1);
		}
	}

	function addItemToCart(): void {
		let itemToCart: CartItem =
		{
			item: {
				id: props.id,
				name: props.name,
				imageName: props.imageName,
				description: props.description,
				enable: props.enable,
				availableInStock: props.availableInStock,
				value : props.value,
				weight: props.weight,
				
			},
			quantity: quantity
		}; 
		addToCart(itemToCart);
		console.log("Console do front, componente ITEM: ", itemToCart);
	}

	// Função para fechar o modal caso o usuário aperte esc
	useEffect(() => {
		const keyDownHandler = (event: any) => {
		  if (event.key === 'Escape') {
				props.onKeyPress();
		  }
		};
		document.addEventListener("keydown", keyDownHandler);
		
		return () => {
		  document.removeEventListener("keydown", keyDownHandler);
		};
	  }, []);

	return (		
		<>	
			<Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show = {props.show}>
				<Modal.Body>
					<div className="produtoCard">
						<div className="imageHeader" >
							<div className="exitButtonDiv"  onClick={props.onClick} >
								<img className="exitButton"   src={exit} />
							</div>
							<div className="mainDishDiv" >
								<img className="mainDish" src={"http://localhost:8080/images/" + props.imageName} />
							</div>
						</div>

						<h1> {props.name} </h1>
						<span className="productDescription" > {props.description}</span>
						<h3>{props.weight} gr</h3>

						<div className="setQuantity">
							<span> R$ {props.value}</span>
							<div className="inputQuantity">
								<button onClick={decreaseQuantity} className="minus" > - </button>
								<input  placeholder={quantity.toString()} type="number" name="" id="" /> 
								<button onClick={addQuantity} className="plus" > + </button>
							</div>
    
						</div>
  
						<div className="cartFlex" onClick={addItemToCart} >
							<img className="addCart" src={addCart}/>
						</div>
  
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Item;