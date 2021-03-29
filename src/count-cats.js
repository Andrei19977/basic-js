const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let array=[]
if (Array.isArray(backyard) && backyard.length){
  array=backyard.join(',').split(',')
  return array.filter(item=> item==="^^").length
}else{
  return 0
}
};
