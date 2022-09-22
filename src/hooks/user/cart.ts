import {CartItem} from "../../types/types";
import axios from "axios";
const customAxios = axios.create({ baseURL: "http://localhost:8080/"});

export const addToCart = async (itemToCart: CartItem) =>  {
	try {
		const response = await customAxios.post("/adicionarItem", itemToCart);
	    console.log(response.data);
	} catch(error) {
	    console.log(error);
	}
};


