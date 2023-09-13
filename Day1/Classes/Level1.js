class Animal {
  constructor(name, age, color, chan) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.chan = chan;
  }
}

class Dog extends Animal {
  constructor(name, age, color, chan, tay) {
    super(name, age, color, chan);
    this.tay = tay;
  }
}
class Cat extends Animal {}
