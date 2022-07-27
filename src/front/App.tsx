import React from 'react';
// import from './assets/icons';
// import logo from './assets/svg/logo.svg';
import './App.css';

function App() {
  return (
<div className="App">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet"/>
    <title>Home</title>
</head>
<header className="menu">
    <img id="menuIcon" src="" alt="icon"/>
    <div className="menuDropDown">
            <p>Pratos clássicos</p> 
            <img src="arrow.svg" alt=""/>
    </div>

    <div className="menuSearch">
        <img src="search.svg" />
        <input placeholder="Buscar cardápio ou prato..." type="text"/>   
    </div>

    <nav className="menuOptionsClient">
        <img id="cart" src="cart.svg" />
        <img id="profile" src="profile.svg"/>
    </nav>
</header>



<body>
    <div className="menuContainer">
        <h1 id="menuName">Pratos classicos</h1>
        <p id="menuDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className="cardDeckItem">
            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>

            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>

            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>

            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>

            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>

            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>

            <div className="cardItem">
                <img src="Antepasto de berinjela.jpg" alt=""/> 
                <div className="cardItemText">
                    <p id="cardItemName">Antespasto de berinjela</p>
                    <p id="cardItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p id="cardItemWeight">(250gr)</p>
                    <p id="cardItemPrice">R$ 10,00</p>
                </div>
            </div>
        </div>
    </div>

</body>

<div className="menuMobileOptionsClient">
    <nav className="cardBottom">
        <img id="cartBottom" src="cart.svg" />
        <p id="cardBottomText">Carrinho</p>
    </nav>

    <nav className="cardBottom">
        <img id="profileBottom" src="profile.svg"/>
        <p>Perfil</p>
    </nav>
</div>

<footer>
<div id="containerImgText">
    <img id="iconFooter" src="icon-white.png" alt=""/>
    <div className="footerText">
        <h3>Endereço</h3>
        <p>Bairro Lorem ipsum dolor sit ame</p>
        <p>Rua Lorem ipsum dolor sit ame</p>
    </div>
</div>

    <nav className="socialMedias">
        <a href=""> <img src="insta.svg" alt=""/></a>
        <a href=""> <img src="facebook.svg" alt=""/></a>
    </nav>
</footer>
</div>
  );
}

export default App;
