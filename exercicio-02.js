/*
2. Escrever uma função que esconda parte dos endereços de e-mail para proteger os dados dos
usuários
Exemplo entrada: meuemail@gmail.com
Exemplo saída: meu****@gmail.com
*/

function obfuscateEmail(email) {
    match = email.match(/(\w+)(\@\w+\.\w+)/);
    split = Math.floor(match[1].length/2);
    
    return match[1].slice(0, split) + match[1].slice(split).replace(/\w/g, "*") + match[2];
}

module.exports = obfuscateEmail;
