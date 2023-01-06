//Write a function that will find all the anagrams of a word from a list.
//You will be given two inputs a word and an array with words. You should
//return an array of all the anagrams or an empty array if there are none.
//For example:
//anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
function anagrams(word, words) {
  let arr = [];
  words.forEach((element) => {
    if (word.split("").sort().join("") === element.split("").sort().join(""))
      arr.push(element);
  });
  return arr;
}
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
// --> ['carer', 'racer']
