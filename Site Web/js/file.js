let searchbar = document.getElementById("searchbar");
function divSearch() {
  searchbar.classList.toggle("active");
}

document.getElementById("btnSearch").addEventListener("click", divSearch);

window.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0 && window.scrollY >= navbar.offsetHeight) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");  
  }
});
