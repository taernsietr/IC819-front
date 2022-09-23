const countVowels = require("./countVowels");
const text = require("./countVowels.json");

// Verifica se a entrada é do tipo string"

test("Verifica se a entrada é do tipo string", () => {
    for (i = 0; i < text.textCountVowels.text.length; i++) {
        expect((typeof text.textCountVowels.text[i]) == "string").toBeTruthy();
    }
});

// Verficar o limite de caractares, o limite é = 30

test("Verficar o limite de caractares, o limite é = 30", () => {
    for (c = 0; c < text.textCountVowels.text.length; c++) {
        expect(text.textCountVowels.text[c].length).toBeLessThanOrEqual(30);
    }
});

// Verifica se a resposta do contador de vogais não é um NaN"

test("Verifica se a resposta do contador de vogais não é um NaN", () => {
    for (d = 0; d < text.textNumberVowels.number.length; d++) {
        expect(text.textNumberVowels.number[d] == NaN).not.toBeTruthy();
    }
});


// Verifica  se o valor de entrada não é null 

test("Verifica se o valor não é null ", () => {
    for (i = 0; i <  text.textCountVowels.text.length; i++) {
      expect(text.textCountVowels.text[i] == null).not.toBeNull();
    }
});

// Verifica se o valor de entrada não é undefined

test("Verifica se o valor de entrada não é undefined", () => {
    for (i = 0; i <  text.textCountVowels.text.length; i++) {
      expect(text.textCountVowels.text[i] == undefined).not.toBeUndefined();
    }
});
  
// Verifica se o valor de retorno no json  != tipo number

test("Verifica se o valor da condição 'valor == tipo numero 'é falsa", () => {
    for (i = 0; i <  text.textNumberVowels.number.length; i++) {
      expect((typeof text.textNumberVowels.number[i]) != "number").toBeFalsy();
    }
});


// Verifica o resultado da função retorna o mesmo que o json com as respostas
  
test("Verifica o resultado da função retorna o mesmo que o json com as respostas", () => {
    for (let i = 0; i < text.textCountVowels.text.length; i++) {
        expect(countVowels(text.textCountVowels.text[i])).toBe(text.textNumberVowels.number[i]);
      }
})

// Verifica o resultado da função retorna um numero maior do que o length da string de entrada
  
test("Verifica o resultado da função retorna o mesmo que o json com as respostas", () => {
    for (let i = 0; i < text.textCountVowels.text.length; i++) {
        let response = countVowels(text.textCountVowels.text[i]);
        expect(response).toBeLessThanOrEqual(text.textCountVowels.text[i].length);
      }
})
