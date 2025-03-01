// Initialize the cats array
const cats = ["Milo", "Otis", "Garfield"];

// -----------------------------
// Destructive Array Methods
// These functions modify the original 'cats' array.

// Appends a cat to the end of the array destructively.
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

// Prepends a cat to the beginning of the array destructively.
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

// Removes the last cat from the array destructively.
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

// Removes the first cat from the array destructively.
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

// -----------------------------
// Non-Destructive Array Methods
// These functions do not modify the original 'cats' array; they return a new array.

// Appends a cat to the end without altering the original array.
function appendCat(name) {
  return [...cats, name];
}

// Prepends a cat to the beginning without altering the original array.
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat and returns a new array.
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Removes the first cat and returns a new array.
function removeFirstCat() {
  return cats.slice(1);
}

// Export all functions so that the test file can access them.
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

