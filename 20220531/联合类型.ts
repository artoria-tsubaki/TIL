/**
 * 定义：表示一个值可以是几种类型之一
 * 用法：用 `|` 分隔类型
 * 使用场景：当一个值的类型可能为多个的时候
 * 注意：如果一个值是联合类型，我们只能访问联合类型的所有类型里共有的成员 （见20220524）
 */

function padLeft(value: string, padding: number | string): string {
  if (typeof padding === 'string') {
    return padding + value;
  } else if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  throw new Error('padding type error')
}

console.log(padLeft("Hello World", 4));

console.log(padLeft("Hello World", "      "));

