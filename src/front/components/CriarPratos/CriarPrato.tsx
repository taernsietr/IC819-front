import { func } from "prop-types";
import React from "react";
import '../CriarPratos/CriarPrato.css';
import addDish from '../../assets/icons/addDish.png';
import Dish from '../../assets/icons/dish.png';
import Portions from '../../assets/icons/portions.png';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchIcon from '../../assets/icons/searchIcon.png';
import moveCard from '../../assets/icons/moveCard.png';
import dishImg from '../../assets/img/Antepasto de berinjela.jpg';


function CriarPrato() {
return( 
  <div> 
      <div className="topButtonSelect" >

          <div className="flexButton">
            <img src={addDish}  />
            <button className="buttonStyle" type="submit"> Criar Prato</button>
          </div>

          <div className="flexButton" >
            <img src={Dish}/>
            <button className="buttonStyle" type="submit"> Cardápio</button>
          </div>

          <div className="flexButton" >
            <img src={Portions}/>
            <button className="buttonStyle" type="submit"> Porções</button>
          </div>

      </div>

      <div className="searchDiv">
        <Dropdown  >
          <Dropdown.Toggle className="dropdownMenu" variant="sucess" >
            Todos os Pratos
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Aqui será exibido uma opção de exibição </Dropdown.Item>
            <Dropdown.Item>Aqui será exibido uma opção de exibição</Dropdown.Item>
            <Dropdown.Item>Aqui será exibido uma opção de exibição </Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>

        <div className="searchDish"  >
          <img src={SearchIcon}  />
          <input className="searchInput" placeholder="Buscar nos cardápios" type="text" name="" id="" />
        </div>

      </div  >  
      <div className='menuDescription'  >
        <h1>Pratos</h1>
      </div>


      <div className="itemCardSeparation"> 
        <span className="item" >Item</span>
        <span className="price" > Preço</span>
        <span className="status" >Status</span>
      </div>
      
      <div className="cardDishDiv" >
            <img width='30px' src={moveCard} alt="" />
            <img width="105px" src={dishImg} alt="" />
          <div className="dishDescription">
            <h4>Nome do Produto</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </span>
          </div>
          <span>R$ XX,XX</span>

          <div>
            <button type="submit">Pausar</button>
            <button type="submit">Ativado</button>
          </div>

        <img src="" alt="" srcset="" />

      </div>



  </div>
)}

export default CriarPrato;
