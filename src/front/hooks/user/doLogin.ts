import { useEffect, useState } from "react";
import { ClientDataType } from "../../types/types";
import axios from "axios";

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});

export const doLogin = (clientData: ClientDataType) => {
		let client  = clientData;
        console.log(client);
	}


