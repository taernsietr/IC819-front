import React from 'react';
import '../CriarPratos/CriacaoPrato.css'
import addDish from  '../../assets/img/addImageDish.png'

function CriacaoPrato( ) {
  return(
<div className="newDishDiv">
  <div className="newDish">
      <h1 > Novo Prato </h1>

      <div className="dishName" >
        <label htmlFor="nome">Nome do Prato (OBRIGATÓRIO)  </label>
        <input required type="text"  name="nome" id="" />
        <span>0/40 Caracteres // falta fazer o contador  </span>
      </div>

      <div className="cardapioType" >
        <label htmlFor="typeDish"> CARDÁPIOS (OBRIGATÓRIO)</label>
        <select required name="typeDish" id="">
          <option value="Type1">Todos os Cardápios</option>
          <option value="Type2">Cardapio2</option>
          <option value="Type3">Cardapio3</option>
        </select>
      </div>  

      <div className="dishDescription" >
        <label htmlFor="Description" >Descrição do Prato </label>
        <textarea  name="Description"  id=""></textarea>
        <span>0/250 caracteres // falta o contador   </span>
      </div>

      <div className="weightLabel" >
        <label htmlFor="dishWeight" >Peso </label>
          <div className="dishWeight" >
            <input required type="text"   name="dishWeight" id="" />
            <select name="" id="">
              <option value="g">g</option>
              <option value="K">K</option>
            </select>
          </div>
      </div>

      <div className="valueKgDiv" >
        <label htmlFor="dishWeight">ValorKg </label>
          <div className="priceFlex">
            <b> <span>  R$</span></b>
            <input type="text" name="" id=""/>
          </div>
      </div>

    <div className="quantityAvailable">
      <label htmlFor="quantity" >Quantidade em Estoque </label>
      <input type="text" name="quantity" id="" />
    </div>

    <div className="dishImgDiv" >
      <h5>Imagem do prato</h5>
        <div className="borderImg">
          <img className="imgDish" src={addDish} alt="" />
        </div>
    </div>

    <div className="cartFlex" >
        <button className="buttonPay" >Salvar</button>
    </div>

  </div>
</div>
)}

export default CriacaoPrato
