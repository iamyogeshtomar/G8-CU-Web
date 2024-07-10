const subtext = document.getElementById("subtext");
// console.log(subtext)

// subtext.onclick = function(){
//     console.log("subtext clicked")
// }
function firstCall() {
  console.log("subtext clicked");
}

function secondCall() {
  console.log("subtext clicked again");
}
// subtext.onclick = function(){
//     console.log("Subtext clicked again")
// }

subtext.addEventListener("click", firstCall);
subtext.addEventListener("click", secondCall);

const form = document.querySelector("form");
// console.log(form)

// subtext.addEventListener("mouseover", function () {
//   subtext.style.backgroundColor = "cyan";
//   subtext.style.fontSize = "72px";
//   subtext.style.color = "red";
// });

// subtext.addEventListener("mouseout", function () {
//   subtext.style.backgroundColor = "green";
//   subtext.style.fontSize = "48px";
//   subtext.style.color = "blue";
// });

const email = document.getElementsByName("email");

form.addEventListener("submit", function (e) {
  console.log("form submitted");
  e.preventDefault();
  console.log(email.target.value);
});
