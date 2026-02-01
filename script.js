// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => navLinks.classList.toggle("show");

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll("section").forEach(el => observer.observe(el));

// --------------------
// EmailJS Contact Form
// --------------------
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "limegreen";
      form.reset();
    }, (error) => {
      formMessage.textContent = "Oops! Something went wrong.";
      formMessage.style.color = "red";
      console.error(error);
    });
});
