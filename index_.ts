class HelloWorld {
  constructor() {}

  getAge(age: number) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
  }

  getMultipleNumber(a: number, b: number) {
    return a * b;
  }
}
