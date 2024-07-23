// const sampleAPI = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(sampleAPI)
// sampleAPI.user = "Ayush Kumar";

var watchingMovies = false;

const p1 = new Promise(function (resolve, reject) {
  if (watchingMovies) {
    resolve("You get popcorns!!!");
  } else {
    reject("You do not get popcorns!!!!");
  }
});

p1.then(
  function (resolve) {
    console.log(resolve);
  },
  function (reject) {
    console.log(reject);
  }
);

console.log("Hello");

const pr = new Promise(function (resolve, reject) {
  resolve(setTimeout(() => console.log("Timer working!!!"), 0));
  reject("Won't work!!!!!");
});

pr.then((resolve) => resolve).catch((err) => console.log(err));

console.log("Bye");
