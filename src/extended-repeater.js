const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strend=''
  if(typeof(str)!=='string' || str!==undefined){
    String(str)
  }
  if(typeof(options.addition)!=='string' || options.addition!==null || options.addition!==undefined){
    String(options.addition)
  }
for (let i=1; i<options.repeatTimes; i++){
strend+=str
if (options.addition!==undefined){
  for (let i=0; i<options.additionRepeatTimes-1; i++){
  strend+=`${options.addition}${options.additionSeparator || '|'}`
}
strend+=options.addition
}
strend+=options.separator || '+'
}
strend+=str
if (options.addition!==undefined){
  for (let i=0; i<options.additionRepeatTimes-1; i++){
  strend+=`${options.addition}${options.additionSeparator || '|'}`
}
strend+=options.addition
}
return strend
};
  