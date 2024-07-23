// // console.log("Start");
// setTimeout(() => console.log("First Timer!!!"), 6000);
// // console.log("Second");
// setTimeout(() => console.log("Second Timer!!!"), 3000);
// // console.log("Third");
// setTimeout(() => console.log("Third Timer!!!"), 4000);
// // console.log("Forth");
// setTimeout(() => console.log("Forth Timer!!!"), 5000);
// // console.log("Ends here!!!");

// var watchingMovies = true;
// var isMovieGood = false;

// const p1 = new Promise((resolve, reject) => {
//   if (watchingMovies) {
//     resolve("You get popcorns!!!");
//   } else {
//     reject("You do not get popcorns!!!!");
//   }
// });

// const p2 = new Promise((resolve, reject) => {
//   resolve("You get complimentory cold drinks");
//   reject("You do not get cold drinks");
// });

// const p3 = new Promise((resolve, reject) => {
//   if (isMovieGood) {
//     resolve("Watched till end");
//   } else {
//     reject("I`m leaving. movie is not good");
//   }
// });

// p1.then((resolve) => {
//   console.log(resolve);
//   return p2;
// })
//   .then((resolve) => {
//     console.log(resolve);
//     return p3;
//   })
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => {
//     console.log(reject);
//   });

const ghusers = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(ghusers);

const handleAPICalls = (ghusers) => {
  ghusers
    .then((resolve) => {
      console.log(resolve);
      return resolve.json();
    })
    .then((resolve) => {
      console.log(resolve);
    });
};

handleAPICalls(ghusers);
