const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let n
    if(Array.isArray(arr)){
    n=arr.reduce((value, item)=>Math.max(this.calculateDepth(item), value), 0)
return n+1
}else{
      return 0
    }
  }
}