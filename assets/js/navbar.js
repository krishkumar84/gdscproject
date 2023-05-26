const nav = document.querySelector("#nav");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  nav.classList.toggle("scrolled-down", scrollPosition > 56);
};

document.addEventListener("scroll", onScroll, { passive: true });



const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');

const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

