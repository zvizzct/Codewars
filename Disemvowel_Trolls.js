//Your task is to write a function that takes a string
//and return a new string with all vowels removed.
//For example:
//"This website is for losers LOL!" ------>"Ths wbst s fr lsrs LL!".

disemvowel("This website is for losers LOL!");
function disemvowel(str) {
  const vowels = "AEIOUaeiou";
  let newStr = [];
  str
    .split("")
    .filter((l) => (vowels.split("").includes(l) ? null : newStr.push(l)));

  return newStr.join("");
}

console.log(disemvowel("This website is for losers LOL!"));
