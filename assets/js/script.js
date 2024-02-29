const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// TO-THE-TOP BUTTON
const topBtn = document.querySelector(".top-btn");

const section = document.querySelector(".landing-page");
const observer2 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting == false) {
      topBtn.classList.remove("hide");
    }
    if (ent.isIntersecting == true) {
      topBtn.classList.add("hide");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-50%",
  }
);
observer2.observe(section);

// Animation on different device sizes
var viewportWidth = window.innerWidth;
animation = document.querySelectorAll(".ani");

if (viewportWidth < 960) {
  animation.forEach(function (animation) {
    animation.removeAttribute("data-aos");
    animation.setAttribute("data-aos", "fade-in");
  });
}
