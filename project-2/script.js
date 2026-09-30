// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");
});

// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });
});

// Play buttons
document.querySelectorAll(".play").forEach(function (button) {
    button.addEventListener("click", function () {
        alert("🎮 " + button.dataset.game + " selected! Game will start soon.");
    });
});

// Contact form
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.textContent = "Thank you, " + name + "! Your message has been received.";

    form.reset();
});
