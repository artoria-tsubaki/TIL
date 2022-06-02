// 类型别名并不会新建一个类型，而是创建了一个新名字来引用这个类型
// 使用 `type` 给类型取别名
{
  // 与交叉类型一起使用
  type LinkedList<T> = T & { next: LinkedList<T> }
  
  interface Person {
    name: string
  }

  var person: LinkedList<Person>
  var s = person.name
  var s = person.next.name
  var s = person.next.next.name

  // 但不能再声明的右侧使用
  type Yikes = Array<Yikes>
}

// 接口和类型别名的区别
// 1. 在信息展示上

type Alias = { num: number }

interface Interface {
  num: number
}

declare function aliased(arg: Alias): Alias // 显示 { num: number }
declare function interfaced(arg: Interface): Interface // 显示 Alias

// 2.无法通过接口来描述一个类型并且需要使用联合类型或元组类型，通常使用类型别名