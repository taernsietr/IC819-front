import { useEffect, useState } from "react";
import axios from "axios";

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});
type ItemsData = {
    id : number,
    name: string,
    imageName: string,
    description: string,
    enable : boolean,
    value : number,
    weight: number 
}

type Menu = {
  name: string,
  description : string,
  itemsData: ItemsData[]
}[]


export const useAPI = (url: string) => {

	const [errorMessage, setErrorMessage] = useState<string>("");
	const [menu, setMenus] = useState<Menu>([]);

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


