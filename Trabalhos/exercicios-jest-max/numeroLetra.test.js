const Letras_Valores = require('./jest');
const LetraNumero = require('./jest');
const palavras = require('./palavrasExamples.json');


test('verifica se a função funciona normalmente em um caso padrão',()=>{
  for (let k = 0; k < palavras.PalavrasNormais.palavra.length ; k++) {  
    expect(Letras_Valores(palavras.PalavrasNormais.palavra[k])).not.toBeNull();
    expect((Letras_Valores(palavras.PalavrasNormais.palavra[k]))).not.toBeUndefined();
  }
})


test('verifica se a função funciona normalmente em um caso com palavras muito grandes',()=>{
  for (let k = 0; k < palavras.PalavrasGrandes.palavra.length; k++) {  
    expect(Letras_Valores(palavras.PalavrasGrandes.palavra[k])).not.toBeNull();
    expect(Letras_Valores(palavras.PalavrasGrandes.palavra[k])).not.toBeUndefined();
  }
})

test('verifica se a a função aceita caracteres especiais',()=>{
  for (let k = 0; k < palavras.PalavrasEspeciais.Palavra.length; k++) {  
    expect(Letras_Valores(palavras.PalavrasEspeciais.Palavra[k])).toThrowError();
    expect(Letras_Valores(palavras.PalavrasEspeciais.Palavra[k])).toBeNull();
    expect(Letras_Valores(palavras.PalavrasEspeciais.Palavra[k])).toBeUndefined();
  }
});

test('verifica se a função funciona normalmente com uma entrada nula',()=>{
  for (let k = 0; k < palavras.PalavraNula.Palavra.length; k++) {  
    expect(Letras_Valores(palavras.PalavraNula.Palavra[0])).toBeNull();
  }
})

