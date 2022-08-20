const data = require("./exercicio7Data.json");

// retorna a concatenação dos dois arrays
function joinArrays(input1, input2) {
  // console.log(`[joinArrays] input1 = ${input1} || input2 = ${input2};`);
  const joinedArrays = Array.from(input1).concat(Array.from(input2));
  // console.log(`[joinArrays] joinedArrays = ${joinedArrays};`);
  return joinedArrays;
}

// comparar o caracter atual com os já usados
// function isCharacterDuplicated(character, usedCharacters) {
//   let isDuplicated = false;
//   console.log(`[isCharacterDuplicated] usedCharacters.length = ${usedCharacters.length};`);

//   for (let i = 0; i == (usedCharacters.length - 1); i++) {
//     console.log(`[isCharacterDuplicated] i = ${i}; character.toString() = ${character.toString()}; usedCharacters[i].toString() = ${usedCharacters[i].toString()}`);

//     if (character.toString() == usedCharacters[i].toString()) {
//       console.log(`[isCharacterDuplicated] character == usedCharacters[${i}] -> c = ${character}, uC = ${usedCharacters[i]};`);
//       isDuplicated = true;
//     }
//   }

//   console.log(`[isCharacterDuplicated] isDuplicated = ${isDuplicated};`);
//   return isDuplicated;
// }

function removeDuplicatedItems(joinedArrays) {
  const arrayLength = Array.from(joinedArrays).length;

  // console.log(`[removeDuplicatedItems] arrayLength = ${arrayLength};`);
  
  let usedCharacters = [joinedArrays[0]];

  for (let i=1; i < arrayLength; i++) {
    let character = joinedArrays[i];

    // console.log(`[removeDuplicatedItems] character = ${character};`);
    // console.log(`[removeDuplicatedItems] usedCharacters = ${usedCharacters};`);

    const isDuplicated = usedCharacters.find(v => v == character);
    // console.log(`[removeDuplicatedItems] isDuplicated = ${isDuplicated};`);

    if(isDuplicated == undefined) {
      usedCharacters.push(character);
      console.log(`[removeDuplicatedItems] character não duplicado`);
    } else {
      console.log(`[removeDuplicatedItems] character duplicado`);
    }

    
    // if (!isCharacterDuplicated(character, usedCharacters)) {
    //   console.log(`[removeDuplicatedItems] caractere ${character} não duplicado`);
    //   usedCharacters.push(character);
    // }
  }

  // retorna o array sem repetições
  return usedCharacters;
}


// function teste() {
  //   const inputs = data.inputs;
  //   let generatedOutput = [];
  
  //   for(let i = 0; i < (inputs.length-1); i = i + 2) {
    //     // juntar uma dupla de arrays
    //     const joinedArrays = joinArrays(inputs[i], inputs[i+1]);
    
    //     if (joinedArrays !== []) {
      //       const result = removeDuplicatedItems(joinedArrays);
      //       console.log(`result = ${result};`)
      //       generatedOutput.push(result);
      //     } else {
        //       // colocar joinedArrays direto no output
        //       generatedOutput.push(joinedArrays);
        //     }
        //   }
        
        //   console.log(`generatedOutput = ${generatedOutput};`)
        
        //   console.log(`generatedOutput == data.outputs -> ${Array.from(generatedOutput) == Array.from(data.outputs)}`)
        // }
        
let generatedOutput = [];
test('Teste normal de cada caso', () => {
  const inputs = data.inputs;

  for (let i = 0; i < (inputs.length - 1); i = i + 2) {
    // juntar uma dupla de arrays
    const joinedArrays = joinArrays(inputs[i], inputs[i + 1]);

    if (joinedArrays !== []) {
      const result = removeDuplicatedItems(joinedArrays);
      // console.log(`result = ${result};`)
      generatedOutput.push(result);
    } else {
      // colocar joinedArrays direto no output
      generatedOutput.push(joinedArrays);
    }
  }

  // console.log(`generatedOutput = ${generatedOutput};`);
});

test('Verifica se o json de teste e o json resultante está igual', () => {

  expect(generatedOutput).toEqual(data.outputs);
});
