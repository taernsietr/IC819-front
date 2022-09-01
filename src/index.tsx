import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./front/screens/Cart/Cart";
import HomeScreen from "./front/screens/HomeScreen/HomeScreen";
import ProductAdd from "./front/screens/ProductAdd/ProductAdd";
import Register from "./front/screens/Register/Register";
import Login from "./front/screens/Login/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
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

