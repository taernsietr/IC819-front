import React, {useState } from "react";
import {CartItem} from "../../types/types";

export const cartController = (order: CartItem) =>  {
	const [cart, setCart] = useState<CartItem[]>([]);

	function addOrder(order: CartItem) {
		setCart([...cart,order]);
		console.log(cart);
		return cart;
	}
	addOrder(order);
};


