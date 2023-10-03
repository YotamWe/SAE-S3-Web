let searchbar = document.getElementById("searchbar");
function divSearch() {
  searchbar.classList.toggle("active");
}

document.getElementById("btnSearch").addEventListener("click", divSearch);
