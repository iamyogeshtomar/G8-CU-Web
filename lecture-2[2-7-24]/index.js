// console.log("hello world")


// console.log("Merry Cheristmas")

// console.log("Howdy Neighbor")

// let santa = "red";

// console.log(santa);


// const meenal = new Object();

// console.log(meenal);

// console.log(typeof meenal);


var Kartik = {
    name:"Kartik",
    height:"5'4",
    weight:62,
    cook:function(){
        console.log("I have cooked food");
    },
    dance:function(){
        console.log("I can dance like MJ")
    }
}


var Abhishek = {
    name:"Abhishek",
    height:"5'7",
    weight:53,
    paint:function(){
        console.log("I make paintings")
    },
    cook:function(){
        console.log("I have cooked food");
    },
    dance:function(){
        console.log("I can dance like MJ")
    }
}

// console.log(Kartik.name);
// console.log(Kartik.height);


// Kartik.cook();
// Kartik.dance();

console.log(Kartik.prototype)

console.log(Kartik.__proto__)
console.log(Object.getPrototypeOf(Kartik));


// constructors in JS

function personConstructor(name, height, weight){
    // This function creates person
    this.name = name;
    this.height = height;
    this.weight = weight;
}

const Navneet = new Object("Navneet", "5'5", 47);

console.log(Navneet)