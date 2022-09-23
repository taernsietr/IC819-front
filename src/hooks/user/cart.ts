import {useState, useEffect} from 'react';
import {CartItem, CartResponse, ProductAddItem} from "../../types/types";
import axios from "axios";
const customAxios = axios.create({
		baseURL: "http://localhost:8080/",
		withCredentials: true,
	})



export const addToCart = async (itemToCart: CartItem) =>  {
	try {
		const response = await customAxios.post("/add-carrinho", itemToCart);
	} catch(error) {
	    console.log(error);
	}
};


export const removeFromCart = async (item: CartItem) =>  {
	try {
		const response = await customAxios.post("/remover-item", item);
	    console.log(response.data);
	} catch(error) {
	    console.log(error);
	}
};



// Tinha que estar no cart de recurso
export const getAddCart = () =>  {
	const [item, setItem] = useState<CartItem>({item: {id: "", name: "", imageName: "", description: "", value: 0, weight: 0 }, quantity: 0});

	useEffect(() => {
		async function getLastAddCart() {
			try {
				const response = await customAxios.get("/get-item-adicionado");
				if (response.data != null) {
					setItem(response.data);
				}
			} catch(error) {
				console.log(error);
				// setErrorMessage("Algo não deu certo, tente novamente");
			}
		}
		getLastAddCart();
	}, []);


	return item;
};


export const removeAllCart = () => {

		async function removeAllFromCart () {
			try {
				const response = await customAxios.get("/limpar-carrinho");
			} catch(error) {
				console.log(error);
				// setErrorMessage("Algo não deu certo, tente novamente");
			}
		}
		removeAllFromCart()
};
