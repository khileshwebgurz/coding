let str = "geeks For geeks is for learning.";
str = str
  .toLowerCase()
  .split(" ")
  .map((word, index) =>
    index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
  );
console.log(str.join(''))