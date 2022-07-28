import React from 'react';
import './Footer.css';
import iconWhite from "../../assets/icons/icon-white.png"
import instagramSvg from "../../assets/svg/insta.svg"
import facebookSvg from "../../assets/svg/facebook.svg"

function Footer() {

    return (
        <div className='Footer'>
            <footer>
                <div id="containerImgText">
                    <img id="iconFooter" src={iconWhite} alt=""/>
                    <div className="footerText">
                        <h3>Endereço</h3>
                        <p>Bairro Lorem ipsum dolor sit ame</p>
                        <p>Rua Lorem ipsum dolor sit ame</p>
                    </div>
                </div>

                <nav className="socialMedias">
                    <a href=""> <img src={instagramSvg} alt=""/></a>
                    <a href=""> <img src={facebookSvg} alt=""/></a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;


