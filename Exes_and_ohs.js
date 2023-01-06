//Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive.
//The string can contain any char.

function XO(str) {
  str = str.toLowerCase();
  return (
    str.split("").filter((i) => i === "x").length ===
    str.split("").filter((i) => i === "o").length
  );
}
