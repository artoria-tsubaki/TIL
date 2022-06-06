/**
 * 使用索引类型，编译器就能够检查使用了动态属性名的代码
 * 1. 索引类型查询 keyof
 * 对于任何类型T，keyof T的结果为T上已知的公共属性名的联合
 * let carProps: keyof Car; // the union of ('manufacturer' | 'model' | 'year')
 * 2. 索引访问 eg: T[K]  K extends keyof T
 * 这意味着person['name']具有类型Person['name']
 */
// js 
function pluck_js(o, propertyNames) {
  return propertyNames.map(n => o(n))
}

{
  function pluck<T, K extends keyof T>(o, propertyNames): T[K] {
    return propertyNames.map(n => o(n)) // 编译器会实例化键的真实类型
  }

  interface Car {
    manufacturer: string;
    model: string;
    year: number;
  }
  let taxi: Car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
  }

  let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model'])
  console.log(makeAndModel)
}


/**
 * 索引类型和字符串索引签名
 */
{
  interface Dictionary<T> {
    [key: number]: T;
  }

  let keys: keyof Dictionary<number>
  let value: Dictionary<number>['foo']; // 类型“Dictionary<number>”上不存在属性“foo”.
  let value2: Dictionary<number>[42]; // number
}