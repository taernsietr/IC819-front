const obfuscateEmail = require("./exercicio-02"); 
const json = require("./exercicio-02.json");

test("Verifica saída da função", () => {
    for(let i = 0; i < json.emails.length; i++) {
        expect(obfuscateEmail(json.emails[i])).toBe(json.obfuscated[i]);
    };
}); 

test("Teste único", () => {
    expect(obfuscateEmail("ts.rodr@gmail.com")).toBe("ts.****@gmail.com");
});
