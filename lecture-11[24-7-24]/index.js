const p1 = new Promise((resolve, _) => {
  resolve(setTimeout(console.log("P1 fulfilled"), 2000));
});
const p2 = new Promise((resolve, _) => {
  resolve(setTimeout(console.log("P2 fulfilled"), 2000));
});
const p3 = new Promise((resolve, _) => {
  resolve(setTimeout(console.log("P3 fulfilled"), 2000));
});
const p4 = new Promise((resolve, _) => {
  resolve(setTimeout(console.log("P4 fulfilled"), 2000));
});

p1.then((resolve) => {
  resolve;
  return p2;
}).then((resolve) => {
  resolve;
});

p3.then((resolve) => {
  resolve;
  return p4;
}).then((resolve) => {
  resolve;
});

Promise.all([p1, p2, p3, p4]).then((values) => console.log(values));
