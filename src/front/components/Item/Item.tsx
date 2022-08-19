import React from "react";
import "./Item.css";
import  Modal  from "react-bootstrap/Modal";

import exit from "../../assets/icons/exit.png";
import addCart from "../../assets/img/addCart.png";
import ImageCover from "../../assets/img/AntepastoDeBerinjela.jpg";


const Item = (props:any) => {
	return (
  
		<Modal size="lg" 
			aria-labelledby="contained-modal-title-vcenter"
			centered
			{...props}
        
			// show = {handleClose}
		>
			<Modal.Body>
    
				<div className="produtoCard">
					<div className="imageHeader" >
						{/* imagem */}
						<div className="exitButtonDiv"  onClick={props.onHide} >
							<img className="exitButton"   src={exit} />
						</div>
						<div className="mainDishDiv" >
							<img className="mainDish" src={ImageCover} />
						</div>
					</div>
  
					<h1> Nome Produto  </h1>
					<span className="productDescription" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </span>
					<h3> Opção congelada {/* script */}  </h3>
  
					<div className="setQuantity">
						<span> R$ {/* script*/} 20,00 </span>
						<div className="inputQuantity">
							<button className="minus" > - </button>
							<input placeholder="0" type="number" name="" id="" /> 
							<button className="plus" > + </button>
						</div>
    
					</div>
					<hr/>
					<h3> Opção congelada {/* script */}  </h3>
					<div className="setQuantity">
						<span> R$ {/* script*/} 20,00 </span>
						<div className="inputQuantity">
							<button className="minus" > - </button>
							<input  placeholder="0" type="number" name="" id="" /> 
							<button className="plus" > + </button>
						</div>
      
					</div>
  
					<div className="cartFlex" >
						<img className="addCart" src={addCart}/>
					</div>
  
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default Item;