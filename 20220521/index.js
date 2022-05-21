// js 类复习

// 1.每个函数和 class 都有一个 name 属性，值为创建该函数或 class 时的名称
function funcName() {}
console.log(funcName.name); // funcName

class ClassName {}
console.log(ClassName.name); // ClassName


// 2.定义私有属性/方法
  // 1. 名字区分 `_`开头的一般为私有方法
  // 2. 模块化中使用 symbol 定义一个 属性/方法，外部无法获取到 symbol 所以无法访问
  const s = Symbol('s')
  class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static [s]() {
        console.log('symbol 定义的方法')
    }
  }
  // 3. 模块化中使用 call 来访问类外的方法，在导出只导出类
  const func1 = () => {}
  class Func {
      func2() {
          func1.call(this)
      }
  }


// 3. 使用 new.target 控制不能通过父类实例化   new.target 指向被实例化的类
class Parent {
    constructor() {
        if(new.target === Parent) {
            // throw new Error('不是在父类实例化')
        } else {
            // ...
        }
    }
}
class Child extends Parent {
    constructor() {
        super()
    }
}

const child = new Child()
const child2 = new Parent()


// 4. ES5中的继承
function Food () {
    this.type = 'food'
}

Food.prototype.getType = function () {
    return this.type
}

function Vegetables () {
    this.name = 'vegetables'
}

Vegetables.prototype = new Food()
Vegetables.prototype.constructor = Vegetables
const v = new Vegetables()
console.log(v.getType());

// 5.super 
    // 1. super作为函数 只能在 constructor 函数中使用，使用后才能使用 this
    // 2. super作为对象 
        // 1. 在实例方法中使用 指向的是父类的原型对象
        // 2. 在静态方法中使用 指向的是父类本身

    class SParent {
        constructor() {
            this.type = 'parent'
        }
        getName() {
            return 'parent name'
        }
    }
    SParent.getType = () => 'parent type'

    class SChild extends SParent {
        constructor() {
            super()
            console.log('constructor:' + super.getName())
        }
        getParentName() {
            console.log('function:' + super.getName());
        }
        static getParentType() {
            console.log(super.getType());
        }
    }

    const sc = new SChild() // constructor:parent name
    sc.getParentName() // function:parent name
    SChild.getParentType() // parent type

// 6. es5 先创造子类的实例对象 this，然后将父类的方法添加到 this 上面
//    es6 先将实例对象的属性和方法添加到 this 上面，再用子类的构造函数修改 this