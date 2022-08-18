import React, { useState } from 'react';
import './Menu.css';
import menuLogo from '../../assets/icons/icon.png';
import cartSvg from '../../assets/svg/cart.svg'
import profileSvg from '../../assets/svg/profile.svg';
import DropDownMenu from './DropDownMenus/DropDownMenu';
import searchSvg from '../../assets/svg/search.svg';

const Menu = () => {
    return (
            <header className='menu'>
                <img id='menuIcon' src={menuLogo} alt='icon'/>
                <DropDownMenu/>
                <div className='menuSearch'>
                    <img src={searchSvg}/>
                    <input placeholder='Buscar cardápio ou prato...' type='text'/>   
                </div>
                <nav className='menuOptionsClient'>
                    <a href="http://localhost:5000/menuItemsData">
                    <img id='cart' src={cartSvg} />
                    </a>
                    <a href="http://localhost:5000/menuData">
                    <img id='profile' src={profileSvg}/>
                    </a>
                </nav>
            </header>
    );
}

export default Menu;
