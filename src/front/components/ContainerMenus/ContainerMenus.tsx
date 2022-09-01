import React, {useEffect,useState} from "react";
import { getMenus } from "../../hooks/resources/getMenus";
import "./ContainerMenus.css";
import CardMenu from "../CardMenu/CardMenu";
import {Menu,PropsFilter} from "../../types/types";

const ContainerMenus = (props: PropsFilter): JSX.Element => {
    
	const data: Menu[] = getMenus("/menuItemsData");
	const [menu,setMenu] = useState(data); 

	useEffect(() => {
		if(data != menu)
			setMenu(data);
	},[data]);

	return (
		<div className="menuContainer">
			{menu
				// .filter((menu) => menu.available  == true)
				.map((menus,key) => {
					return(<CardMenu key={key} name={menus.name} description={menus.description} itemsData={menus.itemsData} filter={props.filter}/> );})
			}
		</div>
	);
};

export default ContainerMenus;





