// ************* Network I/O ***************
// const crypto = require('node:crypto');
const https = require("node:https");
// process.env.UV_THREADPOOL_SIZE = 5;
const MAX_CALLS = 12;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https.request("https://www.google.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(`Request ${i + 1}`, Date.now() - start);
    });
  });
}
// ******************************************
// ************* Thread pool with crypto ***************
// const crypto = require("node:crypto");

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash:", Date.now() - start);
// const crypto = require("node:crypto");

// const MAX_CALLS = 3;

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log("Hash : count", i + 1, Date.now() - start);
//   });
// }
// ***********************************
// ************* Thread pool ***************
// const fs = require("node:fs");
// console.log("First");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   console.log("File contents");
// });
// console.log("Last");
// ***********************************
// ************* HTTP routing ***************
// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   // req.method (GET | POST | PUT | DELETE)
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("ABout Page");
//   } else if (req.url === "/api") {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify({ firstName: "Ritik", lastName: "Tailor" }));
//   } else {
//     res.writeHead(404, { "Content-type": "text/plain" });
//     res.end("Page not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
// ********************************************
// ************* create a server ***************
// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const name = "Ritik Tailor";
//   res.writeHead(200, { "Content-type": "text/html" });
//   let html = fs.readFileSync("./index.html", "utf-8");
//   html = html.replace("{{name}}", name);
//   res.end(html);
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
// **********************************************
// ********** stream *********
// const fs = require("node:fs");

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// const writeableStream = fs.createWriteStream("./file2.txt");
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });
// ***************************
// ********** fs promises module *********
// const fs = require("node:fs/promises");

// async function readFile() {
//   try {
//     const data = await fs.readFile("./file.txt", "utf-8");
//     console.log(data, "from async function");
//   } catch (error) {
//     console.log(error);
//   }
// }
// readFile();

// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data, "data from file"))
//   .catch((error) => console.log(error));
// ***************************************
// ********** fs module *********
// const fs = require("node:fs");
// const fileContent = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContent, "file content");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFileSync("./greet.txt", "Hello world!!");
// fs.writeFile("./greet.txt", " Hello from Ritik!!", { flag: "a" }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File written success");
//   }
// });
// ******************************
// ********** Buffer *********
// const buffer = new Buffer.from("RitikTailor");
// buffer.write("TailorRitik");
// console.log(buffer.toString());
// console.log(buffer);
// console.log(buffer.toJSON());
// ***************************
// ********** Custom emitter *********
// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine");
// const Pizza = new PizzaShop();
// const Drink = new DrinkMachine();
// Pizza.on("order", (size, topping) => {
//   console.log(
//     `Order received!! Baking a ${size} pizza with topping ${topping}`
//   );
//   Drink.servingDrink(size);
// });
// Pizza.order("large", "mushroom");
// Pizza.displayOrderNumber();
// ***********************************
// ********** Event Module *********
// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(
//     `Order received!! Baking a ${size} pizza with topping ${topping}`
//   );
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log(`Order received!! Baking a pizza`);
//   }
// });

// emitter.emit("order-pizza", "large", "mushroom");
// ***********************************
// ********** Callback Patterns **********
// function greet(name) {
//   return `Hello ${name}`;
// }

// function higherOrderFunction(callback) {
//   const name = "Ritik";
//   return callback(name);
// }
// console.log(higherOrderFunction(greet));
// ****************************************

// ********** Path Module **********
// const path = require("node:path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("folder1", "folder2", "index.html"));

// console.log(path.resolve("folder1", "folder2", "index.html")); // folder1/folder1/index.html
// console.log(path.resolve("folder1", "//folder2", "index.html")); // folder1/folder1/index.html
// console.log(path.resolve("folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));
// ******************************************

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
