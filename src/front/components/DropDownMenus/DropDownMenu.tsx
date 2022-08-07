import React from 'react';
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDownMenu.css';
import axios from 'axios';

const customAxios = axios.create({ baseURL: "http://localhost:5000"});

function DropDownMenu() {
    const [object, setObject] = useState([ {
        name: ""
        }
    ]);
    
    useEffect( () => {
        const getMenuNames = async () => {
            try {
                const response = await customAxios.get("/menuData");
                if (response.data != null) {
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
