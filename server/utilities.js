let utilities_module = {};

utilities_module.generateRandomStr = function () {
  let randomStr = "";
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i <= 25; i++) {
    randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
  };
  return randomStr;
};

module.exports = utilities_module;