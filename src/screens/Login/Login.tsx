import React, { useState } from "react";
import "../Register/Register.css";
import logoIcon from "../../assets/icons/icon.png";
import LoginImage from "../../assets/img/loginBackgroundImage.png";
import {ClientDataType} from "../../types/types";  
import { doLogin } from "../../hooks/user/doLogin";

const Login = () => {
  
	const [clientData, setClientData] = useState<ClientDataType>({name: ""});

	async function handleClientDataChange(event: any, nomeParametro: string) {
		const value = event.target.value;
		const object = Object.assign({}, clientData);
		object[nomeParametro as keyof ClientDataType] = value;
		setClientData(object);                                             
	}

	function submitData() {
		doLogin(clientData);
	}

	return (
		<div className="loginDiv">
			<div className="leftDiv">
				<img src={LoginImage} />
			</div>
			<div className="rightDiv">
				<div className="flexLogin">
					<img src={logoIcon} />
					<div className="flexInput">
						<h1>Informe os dados abaixo</h1>
						<input className="textInput" type="text" name="" id="" placeholder="Nome" onChange={event => {handleClientDataChange(event,"name");}}/>
						<input className="textInput" type="text" name="" id="" placeholder="Senha" onChange={event => {handleClientDataChange(event,"passworHash");}}/>
						<button className="submitInput" type="submit" onClick={submitData}>Entrar</button>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Login;
