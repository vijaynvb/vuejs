
// (function(exports, require, module, _filename, _dirname) {
//     const superhero = "Batman";
//     console .log(superhero);
// })();

const language1 = require("./calc.js");
console.log(language1.getName());
language1.setName("Python");
console.log(language1.getName());

delete require.cache[require.resolve("./calc.js")]

const language2 = require("./calc.js");
console.log(language2.getName());