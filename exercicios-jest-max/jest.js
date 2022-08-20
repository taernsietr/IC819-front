function Frase(frase,numPalavras ) {
 let aux = frase.split(" ",numPalavras);
    return aux;
}


// console.log(Frase("testando aqui a função que desenvolvi ", 2));


function Letras_Valores(palavra) {
  
  let arr = [];
  let letras = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
  var arrLetra = palavra.split("");
  var Length = arrLetra.length;

  if ((Length % 2) !== 0 ) { // define que o número recebido é impar
    let middle = Length/2
    let aux = Math.round(middle)
    console.log(aux);
    arrLetra.splice((aux-1),1) // A PARTIR DISSO REMOVER A PALAVRA DO MEIO, E CONSEGUIR SOMAR O ARRAY DO COMEÇO ATÉ O MEIO
    console.log(arrLetra);
  }
      
      // Faz com que cada entrada no array seja comparada com um número de acordo com sua posição 
      // no alfabeto
      arrLetra.map((letras)=> {
      arr.push((letras.charCodeAt(0)- 97) + 1);
  });



  // soma dos elementos
  let somaPrimera = 0;
    for(k = 0; k < (arr.length)/2; k++ ){ // soma os elementos até metade do array
      somaPrimera = (somaPrimera + arr[k] )
      console.log(somaPrimera);
  }

  let somaSegunda = 0;
    for(let j = (arr.length) - ((arr.length)/2); j<(arr.length); j++ ){ // soma os elementos até metade do array
      somaSegunda = (somaSegunda + arr[j] )
      console.log(somaSegunda);
  }

  if (somaPrimera === somaSegunda) { // verifica se a palavra é balanceada
    console.log('true');
  }
  else{ 
    console.log('false');
  }  
    return arr;
  };
  
console.log(Letras_Valores('aaaa'));

module.exports = Frase;
module.exports = Letras_Valores;