/**
 * 定义：将多个类型合并为一个类型，让我们能把现有的多钟类型叠加成一种类型，
 *    他包含了所需的所有类型的特性。
 * 用法：用 `&` 分隔类型
 * 使用场景：混入（mixin）、不适合典型面向对象模型的地方
 */

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {}
  for (const key in first) {
    if (Object.prototype.hasOwnProperty.call(first, key)) {
      (<First>result)[key] = first[key]      
    }
  }
  for (const key in second) {
    if (Object.prototype.hasOwnProperty.call(second, key)) {
      (<Second>result)[key] = second[key]      
    }
  }
  return result as First & Second
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name
  }
}

interface ILogger {
  log(message: string): void;
}

class Logger implements ILogger {
  log(message: string): void {
    console.log(message);
  }
}

const artoria = extend(new Person('artoria'), Logger.prototype);
console.log(artoria);
