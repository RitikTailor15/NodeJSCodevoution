// exports patterns

// ******** First Pattern ********
// const add = (a, b) => {
//   return a + b;
// };

// module.exports = add;

// ******** Second pattern ********
// module.exports = (a, b) => {
//   return a + b;
// };

// ******** Third pattern ********
// const add = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// module.exports = { add, subtract };

// ******** Fourth Pattern ********

// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.subtract = (a, b) => {
//   return a - b;
// };

// ******** Fifth Pattern ********

exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};