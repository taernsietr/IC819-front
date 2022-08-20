function countVowels(text) {
    let counter = 0;
    let textLength = text.length;
    for (i = 0; i < textLength; i++) {
        if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
            counter++
        }
    }
    return counter
}


module.exports = countVowels;