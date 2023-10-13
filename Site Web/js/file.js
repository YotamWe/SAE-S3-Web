const navbar = document.querySelector("nav");
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

let accueilCreated = false;
hamburgerButton.addEventListener("click", toggleNav);

function toggleNav(){
  if (document.body.style.overflowY == "hidden"){
    document.body.style.overflowY = "visible"; 
  }
  else{
    document.body.style.overflowY = "hidden";
  }
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
  const navbar = document.querySelector("nav");


  if (!accueilCreated) {

    let accueil = document.createElement("li");
    accueil.id = "accueil";
    let a  = document.createElement("a");
    a.textContent = "Accueil";
    a.href = "accueil.html";
    let ul = navbar.querySelector("ul");
    accueil.appendChild(a);
    //ul.appendChild(accueil);
    ul.prepend(accueil);
    // Mise à jour de l'état de l'input
    accueilCreated = true;

  }

}

window.addEventListener("resize", function() {
  // Vérification de la taille de la page
  let width = window.innerWidth;
  // Si la taille de la page atteint le niveau souhaité
  if (width > 950) {
    // Suppression de l'élément
    document.getElementById("accueil").remove();
    accueilCreated = false;
  }
});

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
      
});

const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector("#magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});