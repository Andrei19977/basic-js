const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array:[],
  getLength() {
  return this.array.length
  },
  addLink(value='()') {
       this.array.push(`( ${value} )`)
       return this
  },
  removeLink(position) {
    if(this.array[position-1]===undefined || isNaN(position-1) || position%1!==0){
      this.array=[]
      throw new Error('Not implemented');
    }else{
      this.array.splice(position-1, 1)
return this
    }
 
  },
  reverseChain() {
this.array.reverse()
return this
  },
  finishChain() {
    let strarray=this.getLength()>1 ? this.array.join('~~') : this.array[0]
    this.array=[]
    return strarray
  }
};

module.exports = chainMaker;
