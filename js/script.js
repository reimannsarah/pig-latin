function pigLatin(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    const wordArray = word.split("");
    let pLatin = "";
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === wordArray[0]) {
            return pLatin = (wordArray.join("") + "way");
        } else if ((vowels[i] !== wordArray[0]) && (wordArray[0] !== "q")) {
            const firstLetter = wordArray.shift();
            wordArray.push(firstLetter);
            return pLatin = wordArray.join("") + "ay";
        } else {
            const qu = wordArray.splice(0, 2);
            wordArray.push(qu.join(""));
            return pLatin = wordArray.join("") + "ay";
        }
    }
}