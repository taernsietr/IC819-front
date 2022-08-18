import React from "react";
import {Menu, ItemsData} from '../../types/types'



const CardItem = (item: ItemsData) => {
    return (
        <div id="cardItem" className="cardItem">
            <img src={"http://192.168.3.14:5000/images/" + item.imageName} alt=""/>  
            <div className="cardItemText">
                <p id="cardItemName">{item.name}</p>
                <p id="cardItemDescription">{item.description}</p>
                <p id="cardItemWeight">{item.weight.toString()} gr</p>
                <p id="cardItemPrice">R$ {item.value.toString()}</p>  
            </div>  
        </div>
    )
};

export default CardItem;
