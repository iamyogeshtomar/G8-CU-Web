var personName = "piyush"


function consoleName (name){
    // var name = name;
    console.log("hello", name);
    greetName(name)
}


function greetName (name) {
    console.log("Welcome", name);
}

consoleName(personName);

// var fun = function sayHelloAndGreet (consoleName, greetName, name){
//     consoleName(name);//function to console name
//     greetName(name);//function to greet name
// }

// function Sample (){
//     return function sample2(){
//         console.log("Callback runtime");
//     }
// }

// var cb2 = sample2;
// cb2();
