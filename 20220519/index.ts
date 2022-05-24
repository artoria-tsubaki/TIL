/*
 * @Author: pycd 1248353039@qq.com
 * @Date: 2022-05-19 15:13:27
 * @LastEditors: pycd 1248353039@qq.com
 * @LastEditTime: 2022-05-24 14:38:08
 * @FilePath: \TIL\20220519\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 理解 ts 类中的 private 和 protected

class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 1. 属性“name”为私有属性，只能在类“Animal”中访问。
// new Animal("Cat").name

// 2. 当其中一个类型中包含一个 private/protected 成员，另一个类型也需要有一个这样的成员，
//    而且他们都来自同一处声明，这两个类型才是兼容的。
class Rhino extends Animal {
  constructor() { super("Rhino"); }
}

class Employee {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino
// 不能将类型“Employee”分配给类型“Animal”。 类型具有私有属性“name”的单独声明。
// animal = employee

// 3.构造函数也可以被标记成 protected，在 constructor 前添加 protected
//   这个类不能在包含它的类外被实例化，但是能被继承
class Person {
  protected name: string;
  protected constructor(name: string) {
    this.name = name
  }
}
// Workers 可以继承
class Workers extends Person {
  constructor(name: string) {
    super(name)
  }
}
// 不能实例化 类“Person”的构造函数是受保护的，仅可在类声明中访问。
// let john = new Person("John")
let c = new Workers("PP")