// static keyword defines properties or methods that belong to a class itself
// rather than the objects created
// class owns anything static, not the objects

class MathUtil {
  static PI = 3.15159;
  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(3));
console.log(MathUtil.getCircumference(4));
console.log(MathUtil.getArea(4));
