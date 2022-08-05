import React from 'react';
import { useEffect, useState } from "react";
import './ContainerMenu.css';
import axios from 'axios';

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});

const ContainerMenus = () => {

    
function DropDownMenu() {
    const [object, setObject] = useState([ {
        name: ""
        }
    ]);
    
    useEffect( () => {
        const getMenuNames = async () => {
            try {
                const response = await customAxios.get("/menuItemsData");
                if (response.data != null) {
                    console.log(response.data)
                    setObject(response.data);
                }
            } catch(error) {
                console.log(error);
            };
        };

        getMenuNames();
    }); 


    return(
        <div className="menuContainer">
        <h1 id="menuName">Pratos classicos</h1>
        <p id="menuDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className="cardDeckItem">
            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>

        </div>
    </div>
    )
}

export default ContainerMenus
