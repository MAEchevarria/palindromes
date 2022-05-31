exports.palindrome = function(word) {
    word = word.toString();
    let regWord = word.match(/[a-z0-9]+/gi);
    let forwardWord = regWord.join("").toUpperCase();
    let reversedWord = regWord.join("").split("").reverse().join("").toUpperCase();

    if (forwardWord === reversedWord) {
        return true;
    } else {
        return false;
    }
};
