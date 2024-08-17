function vowCount(string) {
  let vowelCounter = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelCounter++;
    }

    /*else if (string[i] === "e") {
    } else if (string[i] === "i") {
    } else if (string[i] === "o") {
    } else if (string[i] === "u") {
    }*/
  }
  /*if (vowelCounter === 0) {
    console.log(`their are ${vowelCounter} vowels found`);
  }*/

  return vowelCounter;
}

const count = vowCount("aeiou");

if (count === 0) {
  console.log(`damn ${count} vowels found`);
} else {
  console.log(`Their are ${count} vowels found`);
}
