import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./screens/Cart/Cart";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductAdd from "./screens/ProductAdd/ProductAdd";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeScreen/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/cart" element={<Cart/>}/>
				<Route path="/productAdd" element={<ProductAdd/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;