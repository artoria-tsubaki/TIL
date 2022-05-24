// 1.public static private protected 修饰符


// 2. 事件类型 
window.onmousedown = function (mouseEvent: MouseEvent) {
  console.log(mouseEvent.target)
}

window.onscroll = function (scrollEvent: Event) {
  
}


// 3. 类型兼容
    //1. 比较两个函数
        //1. 要查看 x 是否能赋值给 y，首先看参数列表，x 的每个参数必须能在 y 里找到对应类型的参数，只看类型不看名称。
          let x = (num: number) => 0;
          let y = (num: number, num2: number) => 0;

          y = x; // ok
          x = y; // error
        //2. 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型
          let z = () => ({number: 18})    
          let b = () => ({number: 18, name: 'bb'})
          
          z = b // ok      返回值 less <- more
          b = z // error
          

// 4. 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
  fly()
  eat()
}

interface Fish {
  swim()
  eat()
}

function animalFunc(): Bird | Fish {
  return 
}

let a = animalFunc();
a.eat() // ok
a.fly() // error 类型“Fish”上不存在属性“fly”。