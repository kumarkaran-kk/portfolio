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
// Get the skills elements by class name
const skills = document.querySelectorAll(".skill");

// Create a GSAP timeline for the skills animation
const skillsTl = gsap.timeline({ paused: true }); // Pause the timeline initially

// Loop through each skill element and add animations
skills.forEach((skill, index) => {
  skillsTl.from(skill, {
    opacity: 0,
    x: -100,
    duration: 0.5,
    delay: index * 0.2, // Delay each skill's animation
  });

  const text = skill.querySelector("span");

  skill.addEventListener("mouseenter", () => {
    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.2,
      repeat: 5,
      yoyo: true,
    });
  });

  skill.addEventListener("mouseout", () => {
    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.2,
    });
  });

  skill.addEventListener("mousemove", (event) => {
    const rect = skill.getBoundingClientRect();

    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;

    const angle = Math.atan2(relY, relX);
    const maxRadius = (rect.width / 2) - (text.offsetWidth / 2);

    const x = maxRadius * Math.cos(angle);
    const y = maxRadius * Math.sin(angle);

    gsap.to(text, {
      x: x,
      y: y,
      duration: 0.2,
    });
  });
});

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


