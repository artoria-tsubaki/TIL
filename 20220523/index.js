// 修饰器
// 1. 修饰器是一个函数，用来修改类的行为
// 2. 修饰器使用@xxx 来修饰类或方法

// Calculator.js 
import compute from './libs/compute.js'
@compute
class Calculator {
  constructor() {}
  xxx(a,b) {
    this.plus(a, b)
  }
}

// compute.js
export default (target) => {
  target.prototype.plus = function (a,b) {
    return a + b
  }
  target.prototype.minus = function(a,b) {
    return a - b
  }
}

const c = new Calculator()
console.log(c.xxx(1,2))