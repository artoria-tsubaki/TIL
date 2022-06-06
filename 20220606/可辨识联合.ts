/**
 * 你可以合并单例类型，联合类型，类型守卫和类型别名来创建一个叫做_可辨识联合_的高级模式，它也称做_标签联合_或_代数数据类型_。 
 * 可辨识联合在函数式编程里很有用处。 一些语言会自动地为你辨识联合；而TypeScript则基于已有的JavaScript模式。 它具有3个要素：
 * 具有普通的单例类型属性—可辨识的特征。
 * 一个类型别名包含了那些类型的联合—联合。
 * 此属性上的类型守卫。
 */

{
  interface Square {
    kind: "square";
    size: number;
  }
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }
  interface Circle {
    kind: "circle";
    radius: number;
  }

  type Shape = Square | Rectangle | Circle; // kind属性称做_可辨识的特征_或_标签_
  function area(s: Shape) {
    switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
      // 可以添加一个函数来保证完整性检查
      default: return assertNever(s)
    }
  }

  function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x)
  }

}