import React, {useEffect,useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropDownMenu.css";
import { getMenus } from "../../../hooks/resources/getMenus";
import {MenuType} from "../../../types/types";

const DropDownMenu = () => {
	const data: MenuType[] = getMenus("/menu-items");
	const [menu,setMenu] = useState(data); 

	useEffect(() => {
		if(data != menu)
			setMenu(data);
	},[data]);

	return (
		<Dropdown>
			<Dropdown.Toggle className="dropDrownButton">
				{menu
					.filter((index) => index.name == menu[0].name)
					.map((menus,key) => {
						return(<a key={key} id="dropDownButtonFirst" href={"#" + menus.name}>{menus.name}</a>);})
				}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{menu
					.filter((index) => index.name != menu[0].name)
					.map((menus,key) => {
						return(<Dropdown.Item bsPrefix="" key={key} href={"#" + menus.name}>{menus.name}</Dropdown.Item>);})}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DropDownMenu;
