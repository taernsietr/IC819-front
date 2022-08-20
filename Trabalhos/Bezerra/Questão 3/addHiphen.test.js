const addHiphen = require("./addHiphen");
const text = require("./addHiphen.json");

// Verifica se a entrada é do tipo string"

test("Verifica se o tipo é string", () => {
    for (i = 0; i < text.textWithoutHiphen.text.length; i++) {
        expect((typeof text.textWithoutHiphen.text[i]) == "string").toBeTruthy();
    }
});

// Verficar o limite de caractares, o limite é = 40

test("erficar o limite de caractares, o limite é = 40", () => {
    for (i = 0; i < text.textWithoutHiphen.text.length; i++) {
        expect(text.textWithoutHiphen.text[i].length).toBeLessThanOrEqual(40);
    }
});

// Verifica se as frases contém caracter "espaço" para poderem serem alteradas pela função 

test("Verifica se as frases contém caracter 'espaço' para poderem serem alteradas pela função", () => {
    for (i = 0; i < text.textWithoutHiphen.text.length; i++) {
        expect(text.textWithoutHiphen.text[i]).toMatch(/ /);
    }
});

// Verifica se as frases contém o caracter ' - ' no lugar do espaço depois de passadas pela função

test("Verifica se as frases contém o caracter ' - ' no lugar do espaço", () => {
    for (i = 0; i < text.textWithoutHiphen.text.length; i++) {
        expect(addHiphen(text.textWithoutHiphen.text[i])).toMatch(/-/);
    }
});

// Verifica  se o valor de entrada não é null 

test("Verifica  se o valor de entrada não é null", () => {
    for (i = 0; i <  text.textWithoutHiphen.text.length; i++) {
      expect(text.textWithoutHiphen.text[i] == null).not.toBeNull();
    }
});

// Verifica se o valor de entrada não é undefined

test("Verifica se o valor de entrada não é undefined", () => {
    for (i = 0; i <  text.textWithoutHiphen.text.length; i++) {
      expect(text.textWithoutHiphen.text[i] == undefined).not.toBeUndefined();
    }
});
  
// Verifica se o valor de entrada  != tipo numero 

test("Verifica se o valor de entrada  != tipo numero ", () => {
    for (i = 0; i <  text.textWithoutHiphen.text.length; i++) {
      expect((typeof text.textWithoutHiphen.text[i]) == "number").toBeFalsy();
    }
});

// Verifica o resultado da função retorna o mesmo que o json com as respostas
  
test("Verifica o resultado da função retorna o mesmo que o json com as respostas", () => {
    for (let i = 0; i < text.textWithoutHiphen.text.length; i++) {
        expect(addHiphen(text.textWithoutHiphen.text[i])).toBe(text.textWithHiphen.text[i]);
      }
})

test("Verifica se todos os caracteres são minusculos", () => {
    for (let i = 0; i < text.textWithoutHiphen.text.length; i++) {
        expect(text.textWithoutHiphen.text[i]).toEqual(expect.stringMatching(/\s[a-z0-9]/));
      }
})

