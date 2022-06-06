// 在映射类型里，新类型以相同的形式去转换旧类型里每个属性

interface Person {
    name: string;
    age: number;
}

{
    // 将一个已知的类型每个属性变为可选的
    interface PersonPartial {
        name?: string;
        age?: number;
    }
    // 映射类型
    type Partial<T> = {
        [P in keyof T]?: T[P]
    }
    type PersonPartial2 =  Partial<Person>
}

{
    // 只读
    interface PersonReadOnly {
        readonly name: string;
        readonly age: number;
    }
    // 映射类型
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }
    type PersonReadOnly2 = ReadOnly<Person>
}

// 注意：需要注意的是这个语法描述的是类型而非成员。 若想添加成员，则可以使用交叉类型：
type PartialWithNewMember<T> = {
    [P in keyof T]?: T[P]
} & { newMember: boolean }

// 报错
// type PartialWithNewMember<T> = {
//     [P in keyof T]?: T[P];
//     newMember: boolean; // 映射的类型可能不声明属性或方法。
// }


// 在 Proxy<T>中使用
{
    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }

    function proxify<T>(o: T): Proxify<T> {
        // ...
        return 
    }
    // let proxyProps = proxify(props)
}

type PersonPick = Pick<Person, 'name'> // TS内置的 可选类型
const staffCount: Record<'tester' | 'developer' | 'manager', number> = {
    tester: 10,
    developer: 20,
    manager: 1
} // 非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。



// 有条件类型
// T extends U ? X : Y   =>    表示 若 T 能够赋值给 U，那么类型是 X，否则为 Y

type TypeName<T> = 
    T extends string ? "string":
    T extends number ? "number":
    T extends boolean ? "boolean":
    T extends undefined ? "undefined":
    T extends Function ? "function":
    "object"

// 分布式有条件类型
// T extends U ? X : Y, 当 T 的类型为 A | B | C 时，会被解析为
// (A extends U ? X : Y) | (B extends U ? X : Y) |  (C extends U ? X : Y)