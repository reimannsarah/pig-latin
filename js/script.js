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

function userInput(e){
    e.preventDefault();
    const word = document.querySelector("#word").value;
    const output = document.querySelector("#output");
    const result = pigLatin(word);
    const p = document.createElement("p");

    p.append(result);
    output.append(p);
}

window.addEventListener("load", function(){
    document.addEventListener("submit", userInput);
})