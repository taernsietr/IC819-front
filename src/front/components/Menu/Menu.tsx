import React from 'react';
import './Menu.css';
import menuLogo from '../../assets/icons/icon.png';
import searchSvg from '../../assets/svg/search.svg';
import cartSvg from '../../assets/svg/cart.svg'
import profileSvg from '../../assets/svg/profile.svg';
import DropDownMenu from '../DropDownMenus/DropDownMenu';

function Menu() {
    return (
        <div className='Menu'>
            <header className='menu'>
                <img id='menuIcon' src={menuLogo} alt='icon'/>
                <DropDownMenu/>
                <div className='menuSearch'>
                    <img src={searchSvg} />
                    <input placeholder='Buscar cardápio ou prato...' type='text'/>   
                </div>

                <nav className='menuOptionsClient'>
                    <img id='cart' src={cartSvg} />
                    <img id='profile' src={profileSvg}/>
                </nav>
            </header>
        </div>
    );
}

export default Menu;
