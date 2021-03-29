const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let han={}
  han.turns=Math.pow(2, disksNumber)-1
  han.seconds=Math.floor((han.turns/turnsSpeed)*3600)
  return han
};
