import React from "react";

const ResultsDetail = ({result}) => {
    return (
        <div id="cardItem" className="cardItem">
        <img src={"http://192.168.3.14:5000/images/" + result.imageName} alt=""/>  
        <div className="cardItemText">
            <p id="cardItemName">{result.name}</p>
            <p id="cardItemDescription">{result.description}</p>
            <p id="cardItemWeight">{result.weight} gr</p>
            <p id="cardItemPrice">R$ {result.value}</p>  
        </div>  
    </div>
    )
}

export default ResultsDetail;