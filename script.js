// for progress bar
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  progressBar.style.height = `${scrollPercentage}%`;
});

// for smooth scrolling of links 
// Select all links with href starting with '#'
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animations for the humburger in the hero section
const nl = document.getElementById('navLinks')
const humburger = document.querySelector('.humburger')
const humLineEl = document.querySelectorAll('.humLine')
let toggle = true

humburger.addEventListener('click', () => {
  if (toggle) {
    nl.style.left = 0

  }
  else {
    nl.style.left = '-100%'
  }
  toggle = !toggle;

  humLineEl.forEach(item => {
    item.classList.toggle('hb')
  })
})

// for project section click on me 
function moveText(event) {
  const card = event.currentTarget;
  const hoverText = card.querySelector('.hover-text');

  // Calculate relative position within the card
  const x = event.clientX - card.getBoundingClientRect().left;
  const y = event.clientY - card.getBoundingClientRect().top;

  // Update the position of the hover text
  hoverText.style.left = `${x}px`;
  hoverText.style.top = `${y}px`;
}
