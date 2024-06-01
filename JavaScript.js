const images = document.querySelectorAll(".img-wrapper > div");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const allDots = document.querySelectorAll(".dot");

let counter = 0;

nextBtn.addEventListener("click", nextSlide);

function nextSlide() {
  images[counter].style.animation = "nextOut 1s forwards";
  if (counter >= images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  images[counter].style.animation = "nextIn 1s forwards";
  pointerDot();
}

prevBtn.addEventListener("click", prevSlide);
function prevSlide() {
  images[counter].style.animation = "prevOut 1s forwards";
  if (counter == 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }
  images[counter].style.animation = "prevIn 1s forwards";
  pointerDot();
}
//auto slide
function autoSlide() {
  //declear without keyword deleteInterval is global variable
  deleteInterval = setInterval(function () {
    nextSlide();
    pointerDot();
  }, 3000);
}
autoSlide();
//when we hover on slide-container clear interval

const slideContainer = document.querySelector(".slide-container");
slideContainer.addEventListener("mouseover", function () {
  clearInterval(deleteInterval);
});

slideContainer.addEventListener("mouseleave", function () {
  autoSlide();
});

function pointerDot() {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].className = allDots[i].className.replace("active", "");
  }
  allDots[counter].className += " active";
}

//menu
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector("#btn-close");
const btnMenu = document.querySelector("#icon-menu");
const navBar = document.querySelector(".navigation_bar");

btnMenu.addEventListener("click", showMenu);

function showMenu() {
  menu.style.transform = "translateX(0%)";
}

closeBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";

  location.reload();
});

// dark mode - light mode
function setDarkMode() {
  document.body.classList.remove("light-mode");
}

function BackgroundMode() {
  const body = document.body;

  const selectedOption = document.getElementById("select").value;

  body.classList.remove("light-mode", "dark-mode");

  if (selectedOption === "light") {
    body.classList.add("light-mode");
    document.querySelector(".section-header h3").style.color = "#212529";
    document.querySelector(".feature-header h4").style.color = "#212529";
    document.querySelector(".latest-header h4").style.color = "#212529";
    document.querySelector(".more-new-header h5").style.color = "#212529";
    document.querySelector(".follow-us").style.color = "#212529";
  } else if (selectedOption === "dark") {
    body.classList.add("dark-mode");
    document.querySelector(".section-header h3").style.color = "#ffff";
    document.querySelector(".feature-header h4").style.color = "#ffff";
    document.querySelector(".latest-header h4").style.color = "#ffff";
    document.querySelector(".more-new-header h5").style.color = "#ffff";
    document.querySelector(".follow-us").style.color = "#ffff";
  }
}
document.getElementById("select").addEventListener("change", BackgroundMode);

// change height navigation
function handleScroll() {
  const navbar = document.querySelector(".navigation_bar");

  if (window.scrollY) {
    navbar.classList.add("short");
  } else if (window.scrollY === 0) {
    navbar.classList.remove("short");
  }
}
window.addEventListener("scroll", handleScroll);
