const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (Array.isArray(members) && members.length){
 return members.sort(item=> typeof(item)==="string").map(item=>item.trim().split("")[0]).sort().join('').toLocaleUpperCase()
}else{
  return false
}
};
