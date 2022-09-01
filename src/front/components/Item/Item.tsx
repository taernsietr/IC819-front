import React from "react";
import "./Item.css";
import  Modal  from "react-bootstrap/Modal";
import { ItemModal } from "../../types/types";

import exit from "../../assets/icons/exit.png";
import addCart from "../../assets/img/addCart.png";

const Item = (props: ItemModal): JSX.Element => {
	return (
		<Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show = {props.show}>
			<Modal.Body>
				<div className="produtoCard">
					<div className="imageHeader" >
						<div className="exitButtonDiv"  onClick={props.onClick} >
							<img className="exitButton"   src={exit} />
						</div>
						<div className="mainDishDiv" >
							<img className="mainDish" src={"http://192.168.3.14:5000/images/" + props.imageName} />
						</div>
					</div>

					<h1> {props.name} </h1>
					<span className="productDescription" > {props.description}</span>
					<h3>{props.weight}</h3>
  
					<div className="setQuantity">
						<span> R$ {props.value}</span>
						<div className="inputQuantity">
							<button className="minus" > - </button>
							<input placeholder="0" type="number" name="" id="" /> 
							<button className="plus" > + </button>
						</div>
    
					</div>
					{/* <hr/>
					<h3> Opção congelada  </h3>
					<div className="setQuantity">
						<span> R$  20,00 </span>
						<div className="inputQuantity">
							<button className="minus" > - </button>
							<input  placeholder="0" type="number" name="" id="" /> 
							<button className="plus" > + </button>
						</div>
      
					</div> */}
  
					<div className="cartFlex" >
						<img className="addCart" onClick={() => alert("Produto adicionado")} src={addCart}/>
					</div>
  
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default Item;