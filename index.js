window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Header scroll background
// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".header");
//   header.classList.toggle("scrolled", window.scrollY > 50);
// });

// // Mobile menu slide-down
// const toggleBtn = document.querySelector(".menu-toggle");
// const navMenu = document.querySelector(".header_context");

// toggleBtn.addEventListener("click", () => {
//   navMenu.classList.toggle("show");
// });

document.addEventListener("DOMContentLoaded", () => {
  const leftItems = document.querySelectorAll(
    ".Concrete_form, .Insulated_form, .Polystyrene_form, .Blocks_form"
  );
  const panels = document.querySelectorAll(".grid-info");

  if (!leftItems.length || !panels.length) return;

  leftItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      // hide all panels
      panels.forEach(p => p.classList.remove("active"));

      // show the clicked one (instant, no delay)
      if (panels[i]) panels[i].classList.add("active");

      // update left item highlight
      leftItems.forEach(li => li.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // show first by default
  panels[0].classList.add("active");
  leftItems[0].classList.add("active");
});
document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".wrapper");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    // move wrapper by index
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Next button
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides; // loop back to start
    updateSlider();
  });

  // Prev button
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // loop back to end
    updateSlider();
  });

  // Initial load
  updateSlider();
});
// frequently asked question
document.querySelectorAll('.bth_slider').forEach(button => {
  button.addEventListener('click', () => {
    const allContexts = document.querySelectorAll('.fq_context');
    const allIcons = document.querySelectorAll('.span_icon');

    const context = button.parentElement.nextElementSibling; // current FAQ answer
    const icon = button.querySelector('.span_icon');         // current arrow

    // First, close all other FAQs
    allContexts.forEach(c => {
      if (c !== context) {
        c.classList.remove('active');
      }
    });
    allIcons.forEach(i => {
      if (i !== icon) {
        i.classList.remove('rotate');
      }
    });

    // Then toggle the clicked one
    context.classList.toggle('active');
    icon.classList.toggle('rotate');
  });
});

// Smooth scroll for header links
document.querySelectorAll('.header_context a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


