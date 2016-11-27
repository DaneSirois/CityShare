let utilities_module = {};

utilities_module.generateRandomStr = function () {
  let randomStr = "";
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i <= 25; i++) {
    randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
  };
  return randomStr;
};

utilities_module.msToTime = function (s) {

  s = (new Date(s)).getTime();
  var days = (new Date(s)).getDay();
  var month = (new Date(s)).getMonth();
  var year = (new Date(s)).getFullYear();
  console.log(s);
  var ms = Number(s) % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  s = (s - mins) / 60;
  var hrs = s % 24;
  s = (s - hrs) / 24;
  return year + "/" + month + "/" + days + ' ' + hrs + ':' + mins + ':' + secs;
};

export default utilities_module;