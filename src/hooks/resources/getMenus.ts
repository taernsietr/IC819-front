import { useEffect, useState } from "react";
import axios from "axios";
import {Menu} from "../../types/types";

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});

export const getMenus = (url: string) => {
 
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [menu, setMenus] = useState<Menu[]>([]);

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


