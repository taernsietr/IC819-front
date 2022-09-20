import React, {useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContainerMenus from "../../components/ContainerMenus/ContainerMenus";
import { CartItem } from "../../types/types";
// import {Cart} from "../../hooks/user/cart"
// import { useQuery} from "react-query";

// const getProducts = async(): Promise<CartItem[]> => {
// 	return await (await fetch("http://localhost:8080/items")).json();
// };

const HomeScreen = () => {
	// const {data, isLoading,error} = useQuery<CartItem[]>("products",getProducts);

	// const getTotalItems = () => null;

	// const handleAddToCart = (clickedItem: CartItem) => null;	

	// const handleRemoveFromCart = () => null;

	// console.log(data)
	// if(isLoading) console.log("carregando objeto menu");
	// if(error) console.log("Ocorreu um erro");
	// const cart = Cart;
	// console.log(cart)
	
	const [term,setTerm] = useState("");

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
