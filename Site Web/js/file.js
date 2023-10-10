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

const hamburgerButton = document.querySelector(".btnBurger");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav(){
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

const themeBtn = document.querySelector(".theme-btn");
const icon = themeBtn.querySelector("i");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

      if (icon.classList.contains("bi-brightness-high-fill")) {
        icon.classList.remove("bi-brightness-high-fill");
        icon.classList.add("bi-moon-fill");
      } else {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-brightness-high-fill");
      }
      /*fa-solid fa-moon*/
      
});
