import React, { useState } from "react";
import "./Register.css";
import logoIcon from "../../assets/icons/icon.png";
import LoginImage from "../../assets/img/loginBackgroundImage.png";
import {ClientDataType} from "../../types/types";  
import { createClient } from "../../hooks/user/createClient";
import { filterInput } from "./filterRegister";

const Register= ()  => {
  
	const [clientData, setClientData] = useState<ClientDataType>({name: "", cpf: "", email: "", phone: "", passwordHash: ""});
	const [error, setError] = useState<boolean>(false);

	function handleClientDataChange(event: any, nomeParametro: string) {
		const value = event.target.value;
		const object = Object.assign({}, clientData);
		object[nomeParametro as keyof ClientDataType] = value;
		setClientData(object);                                  
	}
	
	const verifyInput  = (event: any) => {
		setError(true);
	  };

	function InputError() {
		let filter = filterInput(clientData);
		return (
			<div>
				<p>{filter.name ? "name tem mais de 10 caracteres" : "Agora ta safe"}</p>
				<p>{filter.cpf ? "cpf tem mais de 10 caracteres" : "Agora ta safe"}</p>
				<p>{filter.email ? "email tem mais de 10 caracteres" : "Agora ta safe"}</p>
				<p>{filter.phone ? "phone tem mais de 10 caracteres" : "Agora ta safe"}</p>
				<p>{filter.passwordHash ? "passwordHash tem mais de 10 caracteres" : "Agora ta safe"}</p>
			</div>
		);
	}
	
	// function submitData() {
	// 	createClient(clientData);
	// }

	return (
		// <div className="loginDiv">

		// 	<div className="leftDiv">
		// 		<img src={LoginImage} />
		// 	</div>

		// 	<div className="rightDiv">

		// 		<div className="flexLogin">
		// 			<img src={logoIcon} />

					<div className="flexInput">
						<h1>Informe os dados abaixo</h1>
						<input className="textInput" type="text" name="" id="" placeholder="Nome" onChange={event => {handleClientDataChange(event,"name");}}/>
						<input className="textInput" type="text" name="" id="" placeholder="CPF" onChange={event => {handleClientDataChange(event,"cpf");}} />
						<input className="textInput" type="text" name="" id="" placeholder="E-mail" onChange={event => {handleClientDataChange(event,"email");}}/>
						<input className="textInput" type="text" name="" id="" placeholder="Número" onChange={event => {handleClientDataChange(event,"phone");}}/>
						<input className="textInput" type="text" name="" id="" placeholder="Senha" onChange={event => {handleClientDataChange(event,"passwordHash");}}/>
						{/* <input className="textInput" type="text" name="" id="" placeholder="Confirme sua Senha"/> */}
						<button className="submitInput" onClick={verifyInput}>Cadastrar</button>
						{error && <InputError/>}
					</div>
			// 	</div>
			// </div>
//		</div >
	);
};

export default Register;
