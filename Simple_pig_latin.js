// Move the first letter of each word to the end of it, then add "ay" 
//to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = str => {
    return str.replace(/\b(\w)(\w*)\b/g, '$2$1ay');
}
console.log(pigIt('This is my string !')); // hisTay siay ymay tringsay !