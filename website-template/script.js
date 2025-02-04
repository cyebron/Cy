document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden");
    });

    // Smooth scrolling
    document.querySelectorAll("nav ul li a, #mobile-menu a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
            mobileMenu.classList.add("hidden"); // Close menu on click (mobile)
        });
    });

    // Simple testimonials slider
    let testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach(t => t.classList.add("hidden"));
        testimonials[index].classList.remove("hidden");
        index = (index + 1) % testimonials.length;
    }
    setInterval(showTestimonial, 3000);
    showTestimonial();

    // Contact form validation
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! We will contact you soon.");
    });

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function() {
            document.documentElement.classList.toggle("dark");
        });
    }

        // Firebase Configuration
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert("Message Sent!");
            document.getElementById("contactForm").reset();
        }).catch(error => {
            console.error("Error:", error);
        });
    });


});
