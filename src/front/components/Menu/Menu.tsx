import React from "react";
import "./Menu.css";
import menuLogo from "../../assets/icons/icon.png";
import cartSvg from "../../assets/svg/cart.svg";
import profileSvg from "../../assets/svg/profile.svg";
import DropDownMenu from "./DropDownMenus/DropDownMenu";
import searchSvg from "../../assets/svg/search.svg";
import {PropsEvent} from "../../types/types";

const Menu = (props: PropsEvent) => {

	return (
		<header className="menu">
			<a id="menuIconLink" href="/">
				<img id="menuIcon" src={menuLogo} alt="icon"/>
			</a>
              
			<DropDownMenu/>
			<div className="menuSearch">
				<img src={searchSvg}/>
				<input placeholder="Buscar cardápio..."  onChange={props.changeTerm} type="text"/>   
			</div>
			<nav className="menuOptionsClient">
				<a href="http://localhost:3000/cart">
					<img id="cart" src={cartSvg} />
				</a>
				<a href="http://localhost:3000/register">
					<img id="profile" src={profileSvg}/>
				</a>
			</nav>
		</header>
	);
};

export default Menu;
