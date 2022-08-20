const hyphenate = require("./exercicio-05"); 
const json = require("./exercicio-05.json");

test("Verifica saída da função", () => {
    for(let i = 0; i < json.numbers.length; i++) {
        expect(hyphenate(json.numbers[i])).toBe(json.hyphenated[i]);
    };
}); 

test("Teste único", () => {
    expect(hyphenate("81279164129")).toBe("8127916-4129");
});
