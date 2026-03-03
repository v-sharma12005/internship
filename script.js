gsap.registerPlugin(ScrollTrigger);

// Split headline into spans for stagger animation
const title = document.querySelector(".hero-title");
const text = title.textContent;
title.innerHTML = "";

text.split("").forEach(char => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.display = "inline-block";
  title.appendChild(span);
});

// Headline animation
gsap.from(".hero-title span", {
  y: 80,
  opacity: 0,
  stagger: 0.05,
  duration: 1,
  ease: "power3.out"
});

// Stats animation
gsap.from(".stat-item", {
  y: 40,
  opacity: 0,
  stagger: 0.2,
  delay: 0.8,
  duration: 0.8,
  ease: "power2.out"
});

gsap.to(".car-image", {
  x: 800,
  scale: 1.1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Scroll-based animation
gsap.to(".car-image", {
  x: 800,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});