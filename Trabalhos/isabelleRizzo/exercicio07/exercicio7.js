// juntar arrays em um único array
function joinArrays(input1, input2) {
  console.log(`[joinArrays] input1 = ${input1} || input2 = ${input2};`);
  const joinedArrays = Array.from(input1).concat(Array.from(input2));
  console.log(`[joinArrays] joinedArrays = ${joinedArrays};`);
  return joinedArrays;
}

// comparar o caracter atual com os já usados
function compareCharacters(character, usedCharacters) {
  let isDuplicated = false;

  for (let i = 0; i == (usedCharacters.length - 1); i++) {
    if (character === usedCharacters[i]) {
      console.log(`[compareCharacters] character == usedCharacters[${i}] -> c = ${character}, uC = ${usedCharacters[i]};`);

      isDuplicated = true;
      break;
    }
  }

  console.log(`[compareCharacters] isDuplicated = ${isDuplicated};`);
  return isDuplicated;
}

function removeDuplicatedItems(joinedArrays) {
  const arrayLength = joinedArrays.length;
  let usedCharacters = [joinedArrays[0]];

  for (let i = 1; i < arrayLength; i++) {
    const character = joinedArrays[i];
    const isCharacterDuplicated = compareCharacters(character, usedCharacters);

    if (!isCharacterDuplicated) {
      console.log(`[removeDuplicatedItems] usedCharacters.push(${character});`);
      usedCharacters.push(character);
    }
  }

  return usedCharacters;
}

function exercicio7([array1, array2]) {
  const joinedArrays = joinArrays(array1, array2);
  const result = removeDuplicatedItems(joinedArrays);

  return result;
}

module.exports = {
  compareCharacters,
  exercicio7,
  joinArrays,
  removeDuplicatedItems
}