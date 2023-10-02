let myDiv;
let navbar = document.getElementsByClassName("navbar");
function divSearch() {
  myDiv = document.createElement("div");
  myDiv.id = "myDiv";
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Rechercher...";
  myDiv.appendChild(input);
  document.body.appendChild(myDiv);
}

document.getElementById("btnSearch").addEventListener("click", divSearch);
