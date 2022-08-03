import React from "react";
import './LoginInput.css';
import logoIcon from '../../assets/icons/icon.png';
import LoginImage from './login_background_image.png'

function LoginInput() {

  return (

    <div className='LoginDiv'>

      <div className='leftDiv'>
        <img src={LoginImage} />
      </div>

      <div className='rightDiv' >

        <div className='FlexLogin' >
          <img src={logoIcon} />

          <div className="FlexInput" >

            <h1>Informe os dados abaixo</h1>

            <h2> como deseja continuar </h2>

            <input className="textInput" type="text" name="" id="" placeholder="E-mail" />
            <input className="textInput" type="text" name="" id="" placeholder="Senha" />
            <input className="textInput" type="text" name="" id="" placeholder="Confirme sua Senha" />
            <input className="submitInput" type="button" id="" placeholder="Cadastrar" value="Cadastrar" />
          </div>
        </div>

      </div>

    </div >
  );

}

export default LoginInput;
