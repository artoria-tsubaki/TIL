/**
 * 多态的 this 类型表示的是某个包含类或接口的`子类型`。
 * 他能很容易的表现连贯接口间的继承。
 */
{
  class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number { return this.value }
    public add(operand: number): this {
      this.value += operand;
      return this;
    }
    public multiply(operand: number): this {
      this.value *= operand;
      return this;
    }
    // ...other operations
  }
  
  let v = new BasicCalculator(2).multiply(5).add(2).currentValue();
  console.log(v);

  class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
      super(value);
    }
    public sin(): this {
      this.value = Math.sin(this.value);
      return this
    }
  }

  let v2 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();
}
