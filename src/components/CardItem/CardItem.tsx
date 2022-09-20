import React, {useState} from "react";
import {ItemsData} from "../../types/types";
import Item from "../Item/Item";

const CardItem = (item: ItemsData)  => {
	const [modalShow, setModalShow] = useState<boolean>(false);

	function closeModal() {
		setModalShow(false);
		console.log(modalShow);                                        
	}
	return (
		<>
			<div id="cardItem" className="cardItem">
				<button onClick={() => setModalShow(true)}>	 
					<img src={"http://localhost:8080/images/" + item.imageName} alt=""/>  
					<div className="cardItemText">
						<p id="cardItemName">{item.name}</p>
						<p id="cardItemDescription">{item.description}</p>
						<p id="cardItemWeight">{item.weight.toString()}gr</p>
						<p id="cardItemPrice">R$ {item.value.toString()}</p>  
					</div>  
				</button>
			</div>
			<Item show={modalShow} onKeyPress={closeModal} onClick={closeModal} id={item.id} name={item.name} imageName={item.imageName} description={item.description}  value={item.value} weight={item.weight}/>
		</>
	);
};

export default CardItem;
