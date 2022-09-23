import React from "react";
import CardItem from "../CardItem/CardItem";
import {MenuFilter} from "../../types/types";
  
const CardMenu = ( menu:MenuFilter)  => {
	return (

		<div id={menu.name} className="cardDeckItem">
			<div id="cardDeckItemText">
				<h1 id="menuTitle">{menu.name}</h1>
				<p id="menuDescription">{menu.description}</p>
			</div>
			{menu.itemsData.filter(searchInput => {
				if(menu.filter === "") {
					// Testing filter search
					// let cardDeckItemText = document.getElementById("cardDeckItemText") as HTMLElement;
					// let menuTitle = document.createElement("h1")as HTMLElement;
					// const menuTitleText = document.createTextNode("aaa");
					// menuTitle.setAttribute("id", "menuTitle");
					// menuTitle.appendChild(menuTitleText);
					// cardDeckItemText.appendChild(menuTitle)
                    
					// console.log(cardDeckItemText)
					return searchInput;
				} else if (searchInput.name.toLowerCase().includes(menu.filter.toLowerCase())) {
					// if(removeH1 && removeP) {
					//     removeH1.remove()
					//     removeP.remove()
					// } 
                  
					return searchInput;
				}
                    
			}).map((items, key) => {
				return (
					<CardItem key={key} id={items.id} name={items.name} imageName={items.imageName} description={items.description} enable={items.enable} value={items.value} weight={items.weight}/>
				);
			})}
		</div>
	);
};

export default CardMenu;

