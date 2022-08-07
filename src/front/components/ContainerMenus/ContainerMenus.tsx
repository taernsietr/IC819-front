import React from 'react';
import { useEffect, useState } from "react";
import './ContainerMenus.css';
import axios from 'axios';

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});

const ContainerMenus = () => {

const [menu, setMenu] = useState([{ 
name: "", 
description : "",
itemsData: [{
    id : 0,  // Fake id 
    name: "",
    description: "",
    enable: false,
    value : 0.0,
    weight: 0.0,
}]}]);

useEffect( () => {
    const getMenuItems = async () => {
        try {
            const response = await customAxios.get("/menuItemsData");
            if (response.data != null) {
                setMenu(response.data);
            }
        } catch(error) {
            console.log(error);
        };
    };

    getMenuItems();
}, [0]); 
    
return (
    <div className="menuContainer">
        {menu.map((res, index, array) => {
          return(
            <>
            <h1 id="menuName">{res.name}</h1>
            <p id="menuDescription">{res.description}</p>
            <div className="cardDeckItem">
                <div className="cardItem">
                    <img src="Antepasto de berinjela.jpg" alt=""/> 
                    <div className="cardItemText">
                        <p id="cardItemName">{res.itemsData[array].name}</p>
                        {/* <p id="cardItemDescription">{array[index].description}</p>
                        <p id="cardItemWeight">{array[index].weight}</p>
                        <p id="cardItemPrice">{array[index].value}</p>   */}
                    </div>  
                </div>
            </div>
            </>
        )})}
    </div>
    )
}

export default ContainerMenus;
