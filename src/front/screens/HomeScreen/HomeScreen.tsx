import React, {useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContainerMenus from "../../components/ContainerMenus/ContainerMenus";


const HomeScreen = () => {
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
