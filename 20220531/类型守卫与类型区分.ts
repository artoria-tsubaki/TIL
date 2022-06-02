/**
 * 类型守卫
 * 定义： 是一些表达式，会在运行时检查以确保在某个作用域里的类型
 */

interface Bird {
  fly()
  layEggs()
}
interface Fish {
  swim()
  layEggs()
}

// 使用类型判断 
{
  let pet
  // `pet is Fish`是类型位于， 谓语是`parameterName is Type` 
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
  }

  // 使用 isFish时，TS 会将变量缩减为具体的类型
  if (isFish(pet)) {
    pet.swim()
  } else {
    pet.fly()
  }
}


// 使用 in 操作符
{
  // in 操作符可以作为类型细化表达式来使用
  /**
   *  对于 `n in x` 表达式，其中 n 是字符串字面量活字符串字面量类型且 x 是个联合类型，
   *  那么 true 分支的类型细化为有一个可选或必选的属性 n，
   *  false 分支的类型细化为有一个可选或不存在属性 n，
   */ 
  function move(pet: Fish | Bird) {
    if ("swim" in pet) {
      pet.swim()
    } else {
      pet.fly()
    }
  }
}


// 使用 typeof 类型守卫
// typeof 类型守卫只有两种形式能被识别
// typeof v === "typename" 或 typeof v !== "typename"
// 其中 typename 必须是 number string boolean 或 symbol
{
  function _padLeft(value: string, padding: number | string): string {
    if (typeof padding === 'string') {
      return padding + value;
    } else if (typeof padding === 'number') {
      return Array(padding + 1).join(' ') + value;
    }
    throw new Error('padding type error')
  }
}


// 使用 instanceof 类型守卫
{
  interface Padder {
    getPaddingString(): string;
  }

  class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString(): string { return Array(this.numSpaces + 1).join(' ')}
  }

  class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString(): string { return this.value; }
  }

  function getRandomString() {
    return Math.random() > 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('artoria')
  }

  let padder: Padder = getRandomString()

  if (padder instanceof SpaceRepeatingPadder) {
    // ...
    padder
  }
  if (padder instanceof StringPadder) {
    // ...
    padder
  }
}