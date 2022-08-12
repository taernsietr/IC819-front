import React from "react";
import { useEffect, useState } from "react";
import "./ContainerMenus.css";
import searchSvg from '../../assets/svg/search.svg';

const ContainerMenus = () => {
return (
    <body>
        <div className="menuContainer">

                <div className='menuSearch'>
                    <img src={searchSvg} />
                    <input placeholder='Buscar prato...'  onChange={event => setSearch(event.target.value)} type='text'/>   
                </div>
        {/* Estou com problemas em usar 1 map só parar acessar o objecto de "itemsData"
        Como solução provisória estou dando dois maps mas creio que nao seja o certo */}
        {menus.map((menu, index) => {
            return(




                // <div id={menu.name} className="containerTest">
                //     <h1>{menu.name}</h1>
                //     <p id="menuDescription">{menu.description}</p>
                //     <div className="cardDeckItem">
                //     {/* Não sei como retirar o containerTest quando não contem um item que foi procuraddo no filtro abaixo */}
                //     {menu.itemsData.filter(searchInput => {
                //         if(search === "") {
                //             return searchInput;
                //         } else if (searchInput.name.toLowerCase().includes(search.toLowerCase())) {
                //             return searchInput;
                //         }
                //     }).map((item,key) => {
                //         return (
                //             <div id="cardItem" key={key} className="cardItem">
                //                 {/* A principio é uma solução provisória para pegar as imagens do backend */}
                //                 <img src={"http://192.168.3.14:5000/images/" + item.imageName} alt=""/>  
                //                 <div className="cardItemText">
                //                     <p id="cardItemName">{item.name}</p>
                //                     <p id="cardItemDescription">{item.description}</p>
                //                     <p id="cardItemWeight">{item.weight} gr</p>
                //                     <p id="cardItemPrice">R$ {item.value}</p>  
                //                 </div>  
                //             </div>
                //         )})}
                //     </div>
                // </div>
            )})}
        </div>
    </body>
    )
}

export default ContainerMenus;