/** ================ Toggle Style Switcher ================== **/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

/** ==== Theme Colors ==== **/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
  localStorage.setItem("themeColor", color); 
}

/** ==== Theme Light and Dark Mode ==== **/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  localStorage.setItem("themeMode", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("load", () => {
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.remove("fa-moon");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.remove("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
  }

  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    setActiveStyle(savedColor);
  }
});