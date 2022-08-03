import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDownMenu.css';
import arrowSvg from '../../assets/svg/arrow.svg';

function DropDownMenu() {
    let menuItemsData = [
        { "name": "Marmitas fit" },
        { "name": "Massas" },
        { "name": "Marmitas gourmet" },
        { "name": "Nhoque" },
      ];

    return (
        <Dropdown className="dropDownComponent">
            <Dropdown.Toggle id="dropDownButton">
                <p>Cardápios</p>
                <img src={arrowSvg} alt="" id='arrowSvg'/>
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropDownDeck'>
                {menuItemsData.map((res, index)=> {
                    return (
                    <Dropdown.Item id="dropDownItem" href="">{res.name}</Dropdown.Item>
                )})}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenu;
