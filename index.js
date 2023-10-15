const path = require("node:path");
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));

console.log(path.join("folder1", "folder2", "index.html"));

console.log(path.resolve("folder1", "folder2", "index.html")); // folder1/folder1/index.html
console.log(path.resolve("folder1", "//folder2", "index.html")); // folder1/folder1/index.html
console.log(path.resolve("folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));

// const data = require("./data.json");
// console.log(data, data.name, "data from JSON");
// console.log("After watch mode");
// const math = require("./math");
// const { add, subtract } = math;

// console.log(add(1, 4));
// console.log(subtract(1, 4));
// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("SuperMan");
// console.log(superHero.getName());

// const superHero2 = require("./super-hero");
// console.log(superHero2.getName());

// require("./idea");

// require("./batman");
// require("./superMan");
// require("./life");
// const add = require("./add.js");

// console.log("Hello World");

// const sum = add(1, 2);
// console.log(sum, "sum from module exports");
