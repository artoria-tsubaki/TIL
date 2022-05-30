// 1. 数组中使用 const 断言 -> 会将数组转化为 `元组`
let str = 'artoria' // let str: string 
let num = 18 // let num: number
let array = [str, num] // const array: (string | number)[]
let array2 = [str, num] as const // readonly [string, number]
let cur = array[1] // string | number
let cur2 = array2[1] // number
cur = 'xxx'
cur2 = 123
array2.push(cur) // error: 类型“readonly [string, number]”上不存在属性“push”。


// 2. let 定义和 const 定义的区别
const str2 = 'artoria' // const str: "artoria"
const num2 = 18 // const num: 18
const array3 = [str2, num2] // const array: (string | number)[]
const array4 = [str2, num2] as const // readonly ["artoria", 18] ***
let cur3 = array3[1] // string | number
let cur4 = array4[1] // 18 ***
cur3 = 'xxx'
cur4 = 123 // error: 不能将类型“123”分配给类型“18”。


// 3. 在解构中使用 断言
function hd() { 
  let a = 'artoria'
  let b = (x: number, y: number): number => x + y
  return [a, b] as const // hd: readonly [string, (x: number, y: number) => number]
  // return [a, b] as [typeof a, typeof b] // hd: [string, (x: number, y: number) => number]
  // return [a, b] // hd:  (string | ((x: number, y: number) => number))[]
}

const [strr, sum] = hd()
console.log(sum(18, 22))


// 4. 非空断言
const el: HTMLDivElement = document.querySelector(".container") // 存在找不到 dom 元素的情况，类型为 null
const el1: HTMLDivElement = document.querySelector(".container")  as HTMLDivElement // 断言为HTMLDivElement 类型
const el2: HTMLDivElement = document.querySelector(".container")! // 非空断言