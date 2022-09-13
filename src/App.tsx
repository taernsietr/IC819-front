import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./screens/Cart/Cart";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductAdd from "./screens/ProductAdd/ProductAdd";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import {CartProvider} from "react-use-cart";

const App = () => {
	return (
		<CartProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeScreen/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/cart" element={<Cart/>}/>
				<Route path="/productAdd" element={<ProductAdd/>}/>
			</Routes>
		</BrowserRouter>
		</CartProvider>
	);
};

export default App;