import React from "react";
import { useEffect, useState } from "react";
import "./ContainerMenus.css";
import axios from "axios";


const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});

const ContainerMenus = () => {
// const [src, setSrc] = useState('');

const [menus, setMenus] = useState([{ 
name: "", 
description : "",
itemsData: [{
    id : 0,  // Fake id 
    name: "",
    imageName: "",
    description: "",
    enable: false,
    value : 0.0,
    weight: 0.0,
}]}]);


// const getItemsImages = async () => {
//     try {
//         const response = await customAxios.get("/images/" + test);
//         if (response.data != null) {
//             setSrc(response.data);
//         }
//     } catch(error) {
//         console.log(error);
//     };
// };

useEffect( () => {
    const getMenuItems = async () => {
        try {
            const response = await customAxios.get("/menuItemsData");
            if (response.data != null) {
                setMenus(response.data);
            }
        } catch(error) {
            console.log(error);
        };
    };
    getMenuItems();
}, [menus]); 
    
return (
    <div className="menuContainer">
    {/* Estou com problemas em usar 1 map só parar acessar o objecto de "itemsData"
    Como solução provisória estou dando dois maps mas creio que nao seja o certo */}
    {menus.map((menu, index, array) => {
        return(
            <>
                <h1 id="menuName">{menu.name}</h1>
                <p id="menuDescription">{menu.description}</p>
                <div className="cardDeckItem">
                {menu.itemsData.map((item,key) => {
                    return (
                        <div className="cardItem">
                            {/* <img src={item.imageName} alt=""/>   Problemas em pegar o path das imagens */}
                            <div className="cardItemText">
                                <p id="cardItemName">{item.name}</p>
                                <p id="cardItemDescription">{item.description}</p>
                                <p id="cardItemWeight">{item.weight}</p>
                                <p id="cardItemPrice">{item.value}</p>  
                            </div>  
                        </div>
                )})}
                </div>
            </>
        )})}
    </div>
    )
}

export default ContainerMenus;
