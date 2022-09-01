import React, {useState} from "react";
import {ItemsData} from "../../types/types";
import Item from "../Item/Item";

const CardItem = (item: ItemsData): JSX.Element  => {
	const [modalShow, setModalShow] = useState<boolean>(false);

	function closeModal() {
		setModalShow(false);
		console.log(modalShow);                                        
	}
	return (
		<>
			<div id="cardItem" className="cardItem">
				<button onClick={() => setModalShow(true)}>	 
					<img src={"http://192.168.3.14:5000/images/" + item.imageName} alt=""/>  
					<div className="cardItemText">
						<p id="cardItemName">{item.name}</p>
						<p id="cardItemDescription">{item.description}</p>
						<p id="cardItemWeight">{item.weight.toString()} gr</p>
						<p id="cardItemPrice">R$ {item.value.toString()}</p>  
					</div>  
				</button>
			</div>
			<Item show={modalShow} onClick={closeModal} name={item.name} imageName={item.imageName} description={item.description}  value={item.value} weight={item.weight}/>
		</>
	);
};

export default CardItem;
