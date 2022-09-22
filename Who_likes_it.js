//Implement the function which takes an array containing
//the names of people that like an item. It must return
//the display text as shown in the examples:
//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//['Alex', 'Jacob', 'Mark', 'Max']  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  let str = "";
  if (names.length === 0) str = "no one likes this";
  else if (names.length === 1) str = `${names} likes this`;
  else if (names.length > 3)
    str = `${names.slice(0, 2).join(", ")} and ${
      names.length - 2
    } others like this`;
  else
    str = `${
      names.slice(0, -1).join(", ") + " and " + names.slice(-1)
    } like this`;
  return str;
}
