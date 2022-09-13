import React from "react";
// import from "./assets/icons";
// import logo from "./assets/svg/logo.svg";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

/* Testando sync do sequelize
async function() {
	try {
		await sequelize.sync();
		console.log("Database synced successfully.");
	} catch (error) {
		console.error("Could not sync database:", error);
	}
}();
*/

function App() {
	return (
		<div className="App">
			<Menu/>
        
			<body>
				<div className="menuContainer">
					<h1 id="menuName">Pratos classicos</h1>
					<p id="menuDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					<div className="cardDeckItem">
						<div className="cardItem">
							<img src="Antepasto de berinjela.jpg" alt=""/> 
							<div className="cardItemText">
								<p id="cardItemName">Antespasto de berinjela</p>
								<p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
								<p id="cardItemWeight">(250gr)</p>
								<p id="cardItemPrice">R$ 10,00</p>
							</div>
						</div>

					</div>
				</div>
			</body>

			<div className="menuMobileOptionsClient">
				<nav className="cardBottom">
					<img id="cartBottom" src="cart.svg" />
					<p id="cardBottomText">Carrinho</p>
				</nav>

				<nav className="cardBottom">
					<img id="profileBottom" src="profile.svg"/>
					<p>Perfil</p>
				</nav>
			</div>
			<Footer/>

		</div>
	);
}

export default App;
