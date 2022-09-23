import { useEffect, useState } from "react";
import axios from "axios";
import { CartItem, CartResponse } from "../../types/types";

const customAxios = axios.create({
		baseURL: "http://localhost:8080/",
		withCredentials: true,
	})

export async function createCart() {
	try {
		const response = await customAxios.get("/");
		console.log(response.data);
	} catch(error) {
		console.log(error);
	}
}

export const getCart = () => {

	const [cart, setCart] = useState<CartResponse>({code: "", result: { items: [], itemsPrice: 0}});

	useEffect(() => {
		async function getCartUser () {
			try {
				const response = await customAxios.get("/get-cart");
				if (response.data != null) {
					setCart(response.data);
				}
			} catch(error) {
				console.log(error);
				// setErrorMessage("Algo não deu certo, tente novamente");
			}
		}
		getCartUser();
	}, []);

	return cart;
};

