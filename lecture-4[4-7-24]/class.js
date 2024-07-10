class animals {
  constructor(canFly, name, legs, hasTail) {
    this.canFly = canFly;
    this.name = name;
    this.legs = legs;
    this.hasTail = hasTail;
  }

  get getFlyStatus() {
    if (this.canFly) {
      console.log(`It is a bird`);
    } else console.log(`It is not a bird!!!`);
  }

  get legsNumber() {
    console.log(`It has ${this.legs}`);
  }

  set setLegs(legs) {
    if (this.legs > legs) {
      this.legs = legs;
    } else {
      console.log(`dont put false information`);
    }
  }

  static message() {
    console.log(`All animals are good except humans`);
  }
}

const doggo = new animals(false, "Scooby doo", 2, true);

// doggo.setLegs(4); It is throwing error

console.log(doggo.legsNumber);

animals.message();

class cats extends animals{
  constructor(canFly, name, legs, hasTail, breed) {
    super(canFly, name, legs, hasTail);
    this.breed = breed;
  }
}

const mittens = new cats (false, "mittens", 4, true, "maine coone")

console.log(JSON.stringify(mittens));

const mittensString = JSON.stringify(mittens);

console.log(JSON.parse(mittensString));