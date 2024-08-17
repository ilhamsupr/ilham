document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// typing text

const typingText = document.querySelector(".typing-text");
const texts = ["front end developer", "driver", "3D designer"];
let index = 0;
let textIndex = 0;
let isDeleting = false;

function type() {
  if (isDeleting) {
    typingText.textContent = texts[index].substring(0, textIndex--);
    if (textIndex < 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      textIndex = 0;
    }
  } else {
    typingText.textContent = texts[index].substring(0, textIndex++);
    if (textIndex > texts[index].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 150);
}

type();

// contact

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendToWhatsApp();
  });

function sendToWhatsApp() {
  // Ambil nilai dari formulir
  const name = encodeURIComponent(document.getElementById("name").value);
  const email = encodeURIComponent(document.getElementById("email").value);
  const message = encodeURIComponent(document.getElementById("message").value);

  // Nomor WhatsApp dan pesan
  const phoneNumber = "6283895775553"; // Nomor WhatsApp dalam format internasional
  const text = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;

  // URL WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  // Buka jendela baru dengan URL WhatsApp
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to add animation class
  function handleScrollAnimation() {
    const elements = document.querySelectorAll(".dramatic-fade-in-down");
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;

      // Adjust this value to make the animation trigger earlier or later
      if (elementTop < windowHeight * 0.75) {
        // Trigger earlier for more dramatic effect
        element.classList.add("visible");
      } else {
        element.classList.remove("visible"); // Optional: Remove animation if scrolled back up
      }
    });
  }

  // Initial check
  handleScrollAnimation();

  // Add scroll and resize event listeners
  window.addEventListener("scroll", handleScrollAnimation);
  window.addEventListener("resize", handleScrollAnimation);
});
