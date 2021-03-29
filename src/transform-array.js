const CustomError = require('../extensions/custom-error')

module.exports = function transform(arr) {
  if (Array.isArray(arr)==false) throw new Error('Not implemented')
  let arr1 = [...arr]
  let resarr=[]
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == '--discard-next') {
        if(i != arr1.length-1){
          arr1.splice(i+1, 1,'del' )
          i++
        }
      } else if (arr1[i] == '--discard-prev') {
        if(i!=0 && arr1[i-1]!='del') {
        resarr.pop()
        }
      } else if (arr1[i] == '--double-next') {
        if(i != arr1.length-1){
          resarr.push(arr1[i+1])
        }
      } else if (arr1[i] == '--double-prev') {
        if(i!=0 && arr1[i-1]!='del') {
          resarr.push(arr1[i-1])
        }
        }else{
      resarr.push(arr[i])
    }
    
  }
  return resarr
}
