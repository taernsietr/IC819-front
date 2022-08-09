import React from "react";
import exit from './Group 126.png';
import '../PaginaProduto/Produto.css';
import addCart from './addCart.png';
import  Modal  from 'react-bootstrap/Modal';
import ImageCover from '../PaginaProduto/AntepastoCover.png';

function Produto(props:any) {
  return (

<Modal size="lg" 
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
>
<Modal.Body>
  <div className="produtoCard">
    <div className="imageHeader" >
      {/* imagem */}
      <div className="exitButtonDiv" >
        <img className="exitButton" src={exit} />
      </div>
      <div className="mainDishDiv" >
       <img className="mainDish" src={ImageCover} />
      </div>
    </div>

      <h1> Nome Produto  </h1>
        <span className="productDescription" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </span>
      <h3> Opção congelada {/* script */}  </h3>

       <div className="setQuantity">
          <span> R$ {/* script*/} 20,00 </span>
          <div className="inputQuantity">
           <button className="minus" > - </button>
           <input placeholder="0" type="number" name="" id="" /> 
            <button className="plus" > + </button>
         </div>
  
     </div>
     <hr/>
     <h3> Opção congelada {/* script */}  </h3>
     <div className="setQuantity">
         <span> R$ {/* script*/} 20,00 </span>
         <div className="inputQuantity">
           <button className="minus" > - </button>
           <input  placeholder="0" type="number" name="" id="" /> 
           <button className="plus" > + </button>
          </div>
    
      </div>

    <div className="cartFlex" >
      <img className="addCart" src={addCart}/>
    </div>

  </div>
</Modal.Body>
</Modal>
  );
}

function app() {
  const [modalShow, setModalShow] = React.useState(false);
  return(
    <div>
      <button onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>
    <Produto
      show={modalShow}
      onHide={()=> setModalShow(false)}
    />
    </div>
  );
}

export default app;



