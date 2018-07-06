class Person {
  constructor(name) {
    this.name = name;
  }
}

function TopObj() {
  this.age = 123;
};

let person = Reflect.construct(Person, ['test'], TopObj);
console.log(person);
console.log(person instanceof Person);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet(prefix) {
    console.log(prefix + 'yello, ' + this.name);
  }
}

function TopObj() {
  this.age = 123;
};

let person = Reflect.construct(Person, ['test', 123]);
Reflect.apply(person.greet, {}, []);
Reflect.apply(person.greet, person, ['...']);
console.log()