import { useEffect, useState } from "react";
import axios from "axios";
import {MenuType} from "../../types/types";

const customAxios = axios.create({
		baseURL: "http://localhost:8080/",
		withCredentials: true,
	})

export const getMenus = (url: string) => {
 
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [menu, setMenus] = useState<MenuType[]>([]);

	useEffect(() => {
		async function getMenus () {
			try {
				const response = await customAxios.get(url);
				if (response.data != null) {
					setMenus(response.data);
				}
			} catch(error) {
				setErrorMessage("Algo não deu certo, tente novamente");
			}
		}
		getMenus();
	}, [url,setMenus]);


	return menu;
};


