// console.log(x)// UD

// console.log("Hello")
// console.log("Have some tea")
// console.log("Now get out")

// var x = 55;
//  console.log(x)
//  function demoFunction(){
//     console.log(x);
//     console.log("Action completed");
// }

// shreyas.sing();
// demoFunction();

//3rd july

const shreyas = {
    name:"Shreyas",
    age:22,
    isStudent:true,
    x:22,
    sing:function(){
        console.log(x)
        console.log("I sang a song")
    }
}

// console.log(shreyas.sing)

function personConstructor (name, age, height, weight, isStudent){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.isStudent = isStudent
}

const kartik = new personConstructor("kartik", 21, 168, 89, true);
// console.log(kartik)

const akshat = Object.create(kartik);

const ahaan = Object.create(akshat)

// ahaan.name = "ahaan"

// console.log(ahaan.name)

// console.log(kartik.__proto__)

// console.log(akshat)

console.log(this)