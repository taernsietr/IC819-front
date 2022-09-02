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
import { useState } from "react";
import { setConstantValue } from "typescript";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import dishOptions from '../../assets/icons/dishOptions.png'

function CriarPrato() {
  const [checked, setChecked] = useState(false);
  const [radiovalue, setRadioValue] = useState('1');

  const radios = [
    {
      name: 'Pausar', value: '1'},
    { name: 'Ativado', value: '2' },
  ];
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


      {/* <div className="itemCardSeparation"> 
        <span className="item" >Item</span>
        <span className="price" > Preço</span>
        <span className="status" >Status</span>
      </div> */}
      
      <div className="cardDishDiv" >
            <img width='30px' src={moveCard} alt="" />
            <img width="105px" src={dishImg} alt="" />
          <div className="dishDescription">
            <h4>Nome do Produto</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </span>
          </div>

          <span className="dishValue" >R$ XX,XX</span>

          <div className="buttonStatus" >
            {/* código pego da documentação do react bootstrap sobre radios Button */}
            <ButtonGroup>    
              {radios.map((radio,idx)=>(
                <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-danger' : 'outline-danger' }
                name="radio"
                value={radio.value}
                checked={radiovalue === radio.value}
                onChange={(e)=> setRadioValue(e.currentTarget.value)}>
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>

          <Dropdown>
          <Dropdown.Toggle className="dishOptions"  >
          <img width="10px" src={dishOptions} /> 
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Editar</Dropdown.Item>
            <Dropdown.Item>Remover</Dropdown.Item>
            
            
          </Dropdown.Menu>
        </Dropdown>
        {/* */}

      </div>



  </div>
)}

export default CriarPrato;
