const formBtn = document.querySelector(".form-button");

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const item = document.getElementById("item").value;
  const li = document.createElement("li");
  li.append(item);
  const dltBtn = document.createElement("button");
  const btnvalue = "X";
  dltBtn.append(btnvalue);
  li.appendChild(dltBtn);
  const itemList = document.getElementById("items");
  dltBtn.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "float-right",
    "delete",
    "dltbtn"
  );
  li.classList.add("list-group-item");
  itemList.appendChild(li);
});

const dltbtn = document.getElementsByClassName("dltbtn");

dltbtn.addEventListener("click", function () {});