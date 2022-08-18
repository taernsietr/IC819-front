import React, { useState } from "react";
import './Register.css';
import logoIcon from "../../assets/icons/icon.png";
import LoginImage from '../../assets/img/login_background_image.png'
import {ClientDataType} from "../../types/types"
import axios from "axios";

const customAxios = axios.create({ baseURL: "http://192.168.3.14:5000/"});


const Register= () => {
  
  const [clientData, setClientData] = useState<ClientDataType>({name:""});

  async function handleClientDataChange(event: any, nomeParametro: string) {
    let value = event.target.value
    let object = Object.assign({}, clientData);
    object[nomeParametro as keyof ClientDataType] = value;
    setClientData(object);                                             
  }

  async function submitHandler(event: any) {
  //   event.preventDefault();
  //   try {
  //     const response = await customAxios.post(url, clientData);
  //     // tratar sucesso
  // } catch(error) {
  //     //tratar error
  // };
  }

  console.log(clientData);

  return (
    <div className='loginDiv'>

      <div className='leftDiv'>
        <img src={LoginImage} />
      </div>

      <div className='rightDiv'>

        <div className='flexLogin'>
          <img src={logoIcon} />

          <div className="flexInput">
            <h1>Informe os dados abaixo</h1>

            <input className="textInput" type="text" name="" id="" placeholder="E-mail" onChange={event => {handleClientDataChange(event,"name")}}/>
            <input className="textInput" type="text" name="" id="" placeholder="Número" onChange={event => {handleClientDataChange(event,"phone")}}/>
            <input className="textInput" type="text" name="" id="" placeholder="CPF"/>
            <input className="textInput" type="text" name="" id="" placeholder="Senha" onChange={event => {handleClientDataChange(event,"passworHash")}}/>
            <input className="textInput" type="text" name="" id="" placeholder="Confirme sua Senha"/>
            <input className="submitInput" type="button" id="" onSubmit={event => submitHandler(event)} placeholder="Cadastrar" value="Cadastrar"/>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Register;
