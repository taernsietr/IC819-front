import axios from "axios";
const customAxios = axios.create({ baseURL: "http://localhost:8080/"});

export async function getCart() {
	try {
		const response = await customAxios.get("/");
	    console.log(response.data);
	} catch(error) {
	    console.log(error);
	}
}


