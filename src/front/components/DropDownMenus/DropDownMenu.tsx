import React from 'react';
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDownMenu.css';
import arrowSvg from '../../assets/svg/arrow.svg';
import axios from 'axios';
import { get } from 'https';

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});



function DropDownMenu() {
    const [object, setObject] = useState([ {
        name: ""
        }
    ]);
    
    useEffect( () => {
        const getMenuNames = async () => {
            try {
                const response = await customAxios.get("/menuItemsData");
                if (response.data != null) {
                    console.log(response.data)
                    setObject(response.data);
                }
            } catch(error) {
                console.log(error);
            };
        };

        getMenuNames();
    }); 



    return (
        <Dropdown >
            <Dropdown.Toggle className="dropDrownButton">
                {object[0].name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {object
                    .filter((index) => index.name != object[0].name)
                    .map((res,key) => {
                        return(
                            <Dropdown.Item bsPrefix="" key={key} href="/">{res.name}</Dropdown.Item>
                        )
                    })}
            </Dropdown.Menu>
        </Dropdown>
    );
}


export default DropDownMenu;
