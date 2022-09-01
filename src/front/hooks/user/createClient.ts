import { useEffect, useState } from "react";
import { ClientDataType } from "../../types/types";
import axios from "axios";

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});

export const createClient = (clientData: ClientDataType) => {
		let client  = clientData;
        console.log(client);
	}
    
	//   try {
	//     const response= await customAxios.post(url, clientData);
	//     // tratar sucesso
	// } catch(error) {
	//     //tratar error
	// };

	

