//Write a function dirReduc which will take an array of strings and returns
//an array of strings with the needless directions removed (W<->E or S<->N side by side).
//For example:
//dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
//dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) => ["NORTH", "WEST", "SOUTH", "EAST"]
//dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]) => []

function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return arr.reduce(
    (acc, cur) => (
      opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc
    ),
    []
  );
}
console.log(dirReduc(["NORTH", "SOUTH", "WEST", "SOUTH", "EAST"]));

// --> ["WEST", "SOUTH", "EAST"]
