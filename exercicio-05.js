/*
5. Escreve uma função que tenha como entrada um número e insira um traço (“-“) entre dois
números pares.
Exemplo entrada: 2876418
Exemplo saída: 2-876-418
*/

function hyphenate(number) {
    return number.replace(/([2,4,6,8])([2,4,6,8])/g, "$1-$2");
}

export default hyphenate;
