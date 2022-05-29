// 1. typescript compile
//  tsc xxx.ts [-w] 实时监听 

// 2. 剩余参数的使用
function push(arr: any[], ...args: any[]): any[] {
    arr.push(...args);
    return arr
}
push([1,2,3], 'artoria', true)

// 3. 元祖的使用 对应下标位置的类型得一致
let tuple: [string, number, boolean] = ['houdunren', 2030, true]

// 4. 断言的使用
    // 1. as const 会根据具体的值规定只能是这个 `值类型`， 规定数组的时候会转化为 元祖

    let b = false as const
    let c = 92
    let d = 'ccc' as const
    let f = 'ccc'

    const arr = [b, c, 'artoria', 99, true] as const

    const obj = { name: b } as const