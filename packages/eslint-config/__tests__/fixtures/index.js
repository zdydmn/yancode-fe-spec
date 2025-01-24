const foo = [1, 2];
console.log(foo);
eval('alert(1)');

const fn = (v) => {
  console.log(123);
};

const x = (a) => a;

x = 321;

foo = [2, 3];

function* fn2() {}

class Person {
  constructor() {
    super();
  }
}

class Child extends Person {
  constructor() {}
}

class Child extends Person {
  constructor() {}
}

Child = 123;
