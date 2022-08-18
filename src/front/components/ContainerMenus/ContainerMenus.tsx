import React, {useEffect,useState} from "react";
import { useAPI } from "../../hooks/API";
import "./ContainerMenus.css";
import CardMenu from "../CardMenu/CardMenu";

type ItemsData = {
    id : number,
    name: string,
    imageName: string,
    description: string,
    enable : boolean,
    value : number,
    weight: number 
}
  
type Menu = {
    name: string,
    description : string,
    itemsData: ItemsData[]
}

const ContainerMenus = () => {
    
    let data: Menu[] = useAPI("/menuItemsData");
    const [menu,setMenu] = useState(data); 

    useEffect(() => {
        if(data != menu)
            setMenu(data);
        },
    [data]);

    return (
        <div className="menuContainer">
            {menu.map((menus) =>{
                return (
                <CardMenu name={menus.name} description={menus.description} itemsData={menus.itemsData}/>
                )
            })}
        </div>
    )
}

export default ContainerMenus;





