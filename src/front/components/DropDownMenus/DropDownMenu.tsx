import React from 'react';
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDownMenu.css';
import axios from 'axios';

const customAxios = axios.create({ baseURL: "http://localhost:5000"});

function DropDownMenu() {
    const [menu, setMenu] = useState([ {
        name: ""
        }
    ]);
    
    useEffect( () => {
        const getMenuNames = async () => {
            try {
                const response = await customAxios.get("/menuData");
                if (response.data != null) {
                    setMenu(response.data);
                }
            } catch(error) {
                console.log(error);
            };
        };

        getMenuNames();
    },[menu]); 

    function changeButtonName(menuName: string): string {
        menu[0].name = menuName;
        return menu[0].name;
    }
    
    return (
        <Dropdown>
          
            <Dropdown.Toggle className="dropDrownButton">
            <a id="dropDownButtonFirst" href={"#" + menu[0].name}>
                {menu[0].name}
                </a>
            </Dropdown.Toggle>
       
            <Dropdown.Menu>
                {menu
                    .filter((index) => index.name != menu[0].name)
                    .map((menus,key) => {
                        return(
                            <Dropdown.Item onClick={()=> {
                                changeButtonName(menus.name)
                            }} bsPrefix="" key={key} href={"#" + menus.name}>{menus.name}</Dropdown.Item>
                        )
                    })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenu;
