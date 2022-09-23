import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./screens/Cart/Cart";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductAdd from "./screens/ProductAdd/ProductAdd";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import Checkout from "./screens/Checkout/checkout";
import CriarPrato from "./screens/CriarPratos/CriarPrato";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeScreen/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/cart" element={<Cart/>}/>
				<Route path="/productAdd" element={<ProductAdd/>}/>
				<Route path="/checkout" element={<Checkout/>}/>
				<Route path="/createItem" element={<CriarPrato/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;