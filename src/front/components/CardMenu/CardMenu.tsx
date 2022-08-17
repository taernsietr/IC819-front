import React from "react";
import CardItem from "../CardItem/CardItem";
import {Menu, ItemsData} from '../../types/types'
  

const CardMenu = (menu:Menu) => {
    return (
        
        <div className="cardDeckItem">
            <h1>{menu.name}</h1>
            <p id="menuDescription">{menu.description}</p>
            {menu.itemsData.map((items) => {
                return (
                    <CardItem name={items.name} imageName={items.imageName} description={items.description} enable={items.enable} value={items.value} weight={items.weight}/>
                )
            })}
        </div>
    )
}

export default CardMenu;
