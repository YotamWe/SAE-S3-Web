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

const hamburgerButton = document.querySelector(".btnBurger")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}
