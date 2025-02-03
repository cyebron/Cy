document.querySelector("#contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});

// Smooth scrolling
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});