import React from "react";
import "./ProductAdd.css";
import ProductAddImg from "../../assets/icons/productAdd.png";
import DishPicture from "../../assets/img/AntepastoDeBerinjela.jpg";

const ProductAdd = (): JSX.Element => {
	return(
		<div className="addProductMain">
			<div className="CartaddBody">
				<div className="productAddDiv" >
					<img  width="85px" className="imgAdd" src={ProductAddImg} alt="" />
					<h1> Produto adicionado no carrinho</h1>  
				</div>

				<div className="productInfo" >
					<div className="productNamePic" >
						<img src={DishPicture} alt=""/>
						<h3 className="productName" >Nome do Produto</h3>
						<div className="productSelectInfo" >
							<span className="span">Quantidade: X - Peso: xxxg</span>
							<span className="span">Quantidade: X - Peso: xxxg</span>
						</div>
						<h3 className="totalValue" >Total: R$ XX,00</h3>
					</div>
    
				</div>
				
				<div className="submitDiv" >
					<button className="button" type="submit">Continuar comprando</button>
					<button className="button" type="submit">Ir para o carrinho</button>
				</div>
			</div>
		</div>
	);
}

export default ProductAdd;