import { useEffect, useState } from "react";
import axios from "axios";

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});

export default () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [menu, setMenus] = useState([{
    name: "", 
    description : "",
    itemsData: [{
        id : 0,  // Fake id 
        name: "",
        imageName: "",
        description: "",
        enable: false,
        value : 0.0,
        weight: 0.0,
    }]}]);

    const getMenuItems = async () => {
        try {
            const response = await customAxios.get("/menuItemsData");
            if (response.data != null) {
                setMenus(response.data);
            }
        } catch(error) {
            setErrorMessage("Algo não deu certo, tente novamente");
        };
    };


    useEffect(() => {
        getMenuItems();
    }, []); 

    return [getMenuItems, menu, errorMessage];
}