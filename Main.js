// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.matches(".nav-link")) {
      nav.classList.remove("open");
    }
  });
}

// Smooth scroll for nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});


// Simple thank you message on form submit
function showThankYou() {
  const msg = document.getElementById("thankYouMsg");
  if (msg) {
    msg.style.display = "block";
  }
}

// WhatsApp number (country code शिवाय + नको)
const WHATSAPP_NUMBER = "919028803309";  

document.getElementById("whatsappBtn").addEventListener("click", function () {

    const name   = document.getElementById("fullName").value.trim();
    const phone  = document.getElementById("phone").value.trim();
    const device = document.getElementById("device").value;
    const issue  = document.getElementById("issue").value.trim();

    if (!name || !phone || !device || !issue) {
        alert("Please fill all fields.");
        return;
    }

    // WhatsApp message format
    const message =
`New Callback Request:

Name: ${name}
Phone: ${phone}
Device: ${device}
Issue: ${issue}
`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat
    window.open(url, "_blank");

});
