import React, {useState} from "react";
import {ItemsData} from "../../types/types";
import Item from "../Item/Item";

const CardItem = (item: ItemsData) => {
	const [modalShow, setModalShow] = useState<boolean>(false);

	return (
		<div id="cardItem" className="cardItem">
			<button onClick={() => setModalShow(true)}>
			<Item show={modalShow} onHide={()=> setModalShow(false)}/>
				<img src={"http://192.168.3.14:5000/images/" + item.imageName} alt=""/>  
				<div className="cardItemText">
					<p id="cardItemName">{item.name}</p>
					<p id="cardItemDescription">{item.description}</p>
					<p id="cardItemWeight">{item.weight.toString()} gr</p>
					<p id="cardItemPrice">R$ {item.value.toString()}</p>  
				</div>  
		</button>
		</div>
	);
};

export default CardItem;
