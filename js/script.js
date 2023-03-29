function pigLatin(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let pLatin = "";
    vowels.forEach(function(vowel){
        if (vowel === word) {
            pLatin = word + "way";
        }
    })
    return pLatin;
}