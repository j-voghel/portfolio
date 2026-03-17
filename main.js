// =====================================================
// NAVIGATION — frosted glass on scroll
//
// When the user scrolls down more than 50px, we add
// the CSS class "nav--scrolled" to the nav element.
// That class is defined in style.css and applies the
// blurred semi-transparent background.
// =====================================================

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});


// =====================================================
// ACTIVE NAV LINK — highlights as you scroll
//
// As you scroll past each section (Work, About, Contact),
// the matching link in the nav gets highlighted.
//
// This uses the browser's built-in IntersectionObserver —
// a modern API that watches which elements are visible
// on screen. No third-party library needed.
// =====================================================

// Grab all sections that have an id attribute
const sections = document.querySelectorAll('section[id]');

// Grab all nav links
const navLinks = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Only act when a section becomes MORE than 40% visible
    if (entry.isIntersecting) {

      // Remove the highlight from all nav links first
      navLinks.forEach(link => {
        link.style.color = '';  // resets to whatever CSS says
      });

      // Find the nav link whose href matches the visible section's id
      // e.g. if section id="work", find <a href="#work">
      const activeLink = document.querySelector(
        `.nav__links a[href="#${entry.target.id}"]`
      );

      // If a match was found, highlight it
      if (activeLink) {
        activeLink.style.color = 'var(--color-text)';
      }
    }
  });
}, {
  // Trigger when 40% of the section is visible on screen
  threshold: 0.4
});

// Start watching each section
sections.forEach(section => observer.observe(section));
