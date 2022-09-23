import { useEffect, useState } from "react";
import { ClientDataType } from "../../types/types";
import axios from "axios";

const customAxios = axios.create({
		baseURL: "http://localhost:8080/",
		withCredentials: true,
	})

export const doLogin = (clientData: ClientDataType) => {
		let client  = clientData;
        console.log(client);
	}


