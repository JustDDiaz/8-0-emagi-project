// Your replace function should go here.
// const replace = (word, emojis) => {
//   const emoji = emojis.find((emoji) => emoji.name === word.toLowerCase());
//   if (!emoji) {
//     return word;
//   }

//   return emoji.symbol;
// };

const replace = (term, emojis) => {
  let termArr = term.toLowerCase().split(" ");
  for (let i = 0; i < termArr.length; i++) {
    for (let emoji of emojis) {
      if (termArr[i] === emoji.name) {
        termArr[i] = emoji.symbol;
      }
    }
  }
  return termArr.join(" ");
};
// DON'T TOUCH BELOW!
// If you haven't made the function yet, this check makes sure other tests can still run.
if (typeof replace === "undefined") {
  replace = undefined;
}

// This check makes sure to export the file only if we're running tests in the terminal.
// If you try to use `module.exports` in the browser, you'll get a logged error.
// It won't break anything, but it's easy to confuse it with a serious error.
if (typeof module !== "undefined") {
  module.exports = replace;
}
