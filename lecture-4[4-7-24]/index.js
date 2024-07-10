function fun(name, age) {
  console.log(name);
  console.log(age);
  console.log(this);
}

// fun();

const obj = {
  name: "Rajat",
  age: 26,
};

// fun.call(obj, { name: "harsh", age: 55 });

// fun.call(parent, {})

let obj2 = {
  name: "rishu",
  age: 20,
};

obj2 = fun.bind(obj);

// console.log(obj2)


