var typed = new Typed(".multiple-text", {
  strings: [
    "FrontEnd Development ",
    "Backend Development",
    "Machine Learning",
    "Data Science",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Projects-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".AboutMe").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Skills-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function movie() {
  open("https://github.com/VANAM-SHIVA-KUMAR/Movie_Recommendation");
}
function movieLive() {
  open("https://movie-recommendation-system-1950-2016.onrender.com/?");
}
function iris() {
  open("https://github.com/VANAM-SHIVA-KUMAR/Iris_Classification");
}
function irisLive() {
  open("https://shivakumar.pythonanywhere.com/?");
}
function Smart() {
  open("https://github.com/VANAM-SHIVA-KUMAR/PHOENIX-Python-Voice-Assistant");
}
function SmartLive() {
  open("https://vanam-shiva-kumar.github.io/PHOENIX-Python-Voice-Assistant");
}
function hand() {
  open("https://github.com/VANAM-SHIVA-KUMAR/HandWrittenDigits_Classification");
}
function good() {
  open("https://github.com/VANAM-SHIVA-KUMAR/Quite-For-Good");
}
function goodLive() {
  open("https://vanam-shiva-kumar.github.io/Quit-For-Good");
}
function tastyPlate() {
  open("https://github.com/VANAM-SHIVA-KUMAR/Tasty_Plate");
}

function resume() {
  open(
    "https://drive.google.com/file/d/1X07MFOuXEIoZwahtlw90a2ftkWRRhwg7/view"
  );
}
