// for progress bar
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  progressBar.style.height = `${scrollPercentage}%`;
});

// Select all links with href starting with '#'
const navLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target section's id from the href attribute
    const targetId = this.getAttribute('href').substring(1);

    // Find the target section based on its id
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize ScrollReveal with global options
  const sr = ScrollReveal({
    duration: 2000,      // Animation duration in milliseconds
    reset: true,         // Reset the animation on scrolling back up
    distance: '20px',    // Animation distance
    origin: 'bottom',    // Animation origin (you can customize this)
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Animation easing
  });

  // Add animations to specific elements
  sr.reveal(".get-in-touch", {
    origin: "bottom",
  });

  // Example: Animate a section with the class "about-section"
  sr.reveal(".about", {
    origin: "bottom",
  });

  // Example: Animate a section with the class "skills-section"
  sr.reveal(".skills", {
    origin: "bottom",
  });

  // Example: Animate a section with the class "skills-section"
  sr.reveal(".experience", {
    origin: "bottom",
  });

  // Example: Animate a section with the class "skills-section"
  sr.reveal(".pro", {
    origin: "bottom",
  });

  // You can add more elements here with specific animation options

  // Example: Animate a section with the class "example-section"
  sr.reveal(".example-section", {
    origin: "left",
  });
});

// Animations for the skills section


// Get the skills section by its ID
const skillsSection = document.getElementById("Skills");

// Add a mouseover event listener to the skills section
skillsSection.addEventListener("mouseover", () => {
  skillsTl.play(); // Play the GSAP timeline when you hover over the section
});

// Add a mouseout event listener to the skills section
skillsSection.addEventListener("mouseout", () => {
  skillsTl.reverse(); // Reverse the animation when the mouse leaves the section
});

// Animations for the footer section
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
