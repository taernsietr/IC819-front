import React from "react";
import CardItem from "../CardItem/CardItem";
import {MenuFilter} from '../../types/types'
  
const CardMenu = ( menu:MenuFilter) => {
    let removeH1 = document.getElementById("menuTitle") as HTMLElement;
    let removeP = document.getElementById("menuDescription") as HTMLElement;
    return (

        <div className="cardDeckItem">
            <div className="cardDeckItemText">
                <h1 id="menuTitle">{menu.name}</h1>
                <p id="menuDescription">{menu.description}</p>
            </div>
            {menu.itemsData.filter(searchInput => {
                if(menu.filter === "") {
                    const exists = document.body.contains(removeH1)
                    console.log(exists)
                    return searchInput;
                } else if (searchInput.name.toLowerCase().includes(menu.filter.toLowerCase())) {
                    if(removeH1 && removeP) {
                        removeH1.remove()
                        removeP.remove()
                    }
          
                    return searchInput;
                }
                    
            }).map((items) => {
                console.log(items)
                return (
                    <CardItem name={items.name} imageName={items.imageName} description={items.description} enable={items.enable} value={items.value} weight={items.weight}/>
                )
            })}
        </div>
    )
}

export default CardMenu;

