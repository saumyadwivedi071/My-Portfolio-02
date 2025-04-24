document.addEventListener("DOMContentLoaded", function () {
    // Deep Dive Button Functionality
    const deepDiveBtn = document.querySelector(".deep-dive-box");
    if (deepDiveBtn) {
      deepDiveBtn.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
      });
    }
  
    // Navigation Toggle Functionality
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
  
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
  
      // Collapse nav on link click (for mobile)
      const links = navLinks.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
        });
      });
    }
  });
  