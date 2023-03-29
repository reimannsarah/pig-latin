function pigLatin(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    const wordArray = word.split("");
    let pLatin = "";
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === wordArray[0]) {
            return pLatin = (wordArray.join("") + "way");
        } else if (vowels[i] !== wordArray[0]){
            const firstLetter = wordArray.shift();
            wordArray.push(firstLetter);
            return pLatin = wordArray.join("");
        }
    }
    // vowels.forEach(function(vowel) {
    //     if (vowel === wordArray[0]) {
    //        pLatin.concat(wordArray.join() + "way");
    //        return pLatin;
    //     } else if (vowel !== wordArray[0]) {
    //        pLatin.concat(wordArray.shift());
    //        return pLatin;
    //     }
    // })
    // console.log("word array" + wordArray)
    // console.log("platin " + pLatin)
    // console.log(pLatin);
    // return pLatin;
}