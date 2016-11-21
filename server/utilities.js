const generateRandomString = function () {
  let randomStr = "";
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i <= 17; i++) {
    randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
  };
  return randomStr;
};