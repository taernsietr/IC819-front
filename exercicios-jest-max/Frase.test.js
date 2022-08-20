const Frase = require('./jest');
const frases = require('./FraseExemples.json');

// test('tentar uma frase palavra muito grande para avaliar se essa função funcionar direito dentro do contexto do teste', () => {
//   expect(Frase('tentar uma frase palavra muito grande para avaliar se essa função funcionar direito dentro do contexto do teste', 4)).toStrictEqual( ["tentar", "uma", "frase", "palavra"] );
// });

test('verifica se frases grandes dão problema',()=>{
  for (let k = 0; k < frases.FrasesTestes.Frases.length; k++) {  
    expect(Frase(frases.FrasesGrandes.Frases[1],20)).toStrictEqual(Frase(frases.FrasesGrandes.Frases[1],20));
  }
})


test('verifica se frases grandes dão problema',()=>{
  for (let k = 0; k < frases.FrasesTestes.Frases.length; k++) {  
    expect(Frase(frases.FrasesGrandes.Frases[7],20)).toStrictEqual(Frase(frases.FrasesGrandes.Frases[7],20));
  }
})

test('verifica se existem valores nulos, ou undefined', ()=>{
  for (let k = 0; k < frases.FrasesTestes.Frases.length; k++) {  
  expect(frases.FrasesTestes.Frases[k]== undefined).not.toBeUndefined();
  expect(frases.FrasesTestes.Frases[k]==null).not.toBeNull();
}
});


test('verificar se ele envia algum erro ao trabalhar com caracteres especiais', ()=>{
  for (let k = 0; k < frases.FrasesCaracteresEspeciais.Frases.length; k++) { 
    expect(Frase(frases.FrasesCaracteresEspeciais.Frases[1],2)).not.toBeUndefined(); 
    expect(Frase(frases.FrasesCaracteresEspeciais.Frases[2],3)).not.toBeUndefined(); 
    expect(Frase(frases.FrasesCaracteresEspeciais.Frases[1],1)).not.toBeUndefined(); 
    expect(Frase(frases.FrasesCaracteresEspeciais.Frases[4],3)).not.toBeUndefined(); 
}
});

test('verifica se o resultado ainda é um array de strings', ()=>{
  for (let k = 0; k < frases.FrasesTestes.Frases.length; k++) {  
  expect((typeof frases.FrasesTestes.Frases[k]) == "string").toBeTruthy();
}
});


