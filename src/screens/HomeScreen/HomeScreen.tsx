import React, {useState, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContainerMenus from "../../components/ContainerMenus/ContainerMenus";
import { CartItem } from "../../types/types";
import { getCart } from "../../hooks/resources/getCart";


const HomeScreen = () => {	
	const [term,setTerm] = useState("");
	getCart();

	function changeTerm(event: any) {
		const value = event.target.value;
		setTerm(value);                                         
	}

	return (
		<>	
			<Menu search={term} changeTerm={changeTerm}/>
			<ContainerMenus filter={term} />
			<Footer/>
		</>
	);
};

export default HomeScreen;
