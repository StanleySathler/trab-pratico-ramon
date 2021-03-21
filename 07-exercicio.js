function Person(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}

const me = new Person("Stanley", 25, 70);
console.log(me);
