import React from "react";
import { useEffect, useState } from "react";
import "./ContainerMenus.css";
import axios from "axios";
import { isTypeNode } from "typescript";

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});



const ContainerMenus = () => {
    const [search, setSearch] = useState("")
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

/* Estava pensando em fazer uma função que faça uma requisição para o servidor, pegue a imagem e
devolva a imagem para o front 

const getItemsImages = async (imageName: string) => {
    try {
        const response = await customAxios.get(`/images/${imageName}`);
        if (response.data != null) {
            setSrc(response.data);
        }
    } catch(error) {
        console.log(error);
    };
}; */

const getMenuItems = async () => {
    try {
        const response = await customAxios.get("/menuItemsData");
        if (response.data != null) {
            setMenus(response.data);
            console.log(response.data);
        }
    } catch(error) {
        console.log(error);
    };
};

useEffect( () => {
    getMenuItems();
}, [0]); 
    
return (
    <body>
        <div className="menuContainer">
        <input placeholder="Enter Post Title" onChange={event => setSearch(event.target.value)} />
        {/* Estou com problemas em usar 1 map só parar acessar o objecto de "itemsData"
        Como solução provisória estou dando dois maps mas creio que nao seja o certo */}
        {menus.filter(searchInput => {
            if(search === "") {
                return searchInput;
            } else if (searchInput.name.toLowerCase().includes(search.toLowerCase())) {
                return searchInput;
            }
        }).map((menu, index) => {
            return(
                <div className="containerTest" id={menu.name}>
                    <h1>{menu.name}</h1>
                    <p id="menuDescription">{menu.description}</p>
                    <div className="cardDeckItem">
                    {menu.itemsData.map((item,key) => {
                        return (
                            <div key={key} className="cardItem">
                                {/* A principio é uma solução provisória para pegar as imagens do backend */}
                                <img src={"http://192.168.3.14:5000/images/" + item.imageName} alt=""/>  
                                <div className="cardItemText">
                                    <p id="cardItemName">{item.name}</p>
                                    <p id="cardItemDescription">{item.description}</p>
                                    <p id="cardItemWeight">{item.weight} gr</p>
                                    <p id="cardItemPrice">R$ {item.value}</p>  
                                </div>  
                            </div>
                        )})}
                    </div>
                </div>
            )})}
        </div>
    </body>
    )
}

export default ContainerMenus;