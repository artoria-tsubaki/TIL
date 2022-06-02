// 1. 字符串字面量类型
// 字符串字面量类型允许你指定字符串必须的固定值。
// 在实际应用中，字符串字面量类型可以与联合类型，类型守卫很好的配合
{
  type Easing = "ease-in" | "ease-out" | "ease-in-out";
  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === "ease-in") {
          // ...
      }
      else if (easing === "ease-out") {
      }
      else if (easing === "ease-in-out") {
      }
      else {
          // error! should not pass null or undefined.
      }
    }
  }

  let button = new UIElement();
  button.animate(0, 0, "ease-in");
  button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
}

// 还可以用于函数重载
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
  // ...
  return
}