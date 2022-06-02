// 在默认情况下，类型检查器会认为 null 和 undefined 可以赋值给任何类型
// 使用 `--strictNullChecks` 标记可以解决此问题：当声明一个变量的时候，他不会自动地包含 null 或 undefined
// 可选参数和可选属性在 `--strictNullChecks` 下会自动加上 `|undefined`
// 使用类型守卫和类型断言去除 null
{
  // 短路运算符去除 null
  function f(sn: string | null): string {
    return sn || 'default'
  }

  // 类型断言去除， 添加'!'后缀
  let div: HTMLDivElement = document.querySelector('div')!
  function fixed(name: string | null): string {
    function postfix(epithet: string) {
      return name!.charAt(0) + '. the' + epithet
    }
    name = name || 'Bob'
    return postfix('great')
  }
}