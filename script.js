// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const profilePanel = document.getElementById("profilePanel");
const closeProfile = document.getElementById("closeProfile");

profilePanel && closeProfile && closeProfile.addEventListener("click", () => {
  profilePanel.classList.remove("show");
});


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
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  lightbox.style.display = "flex";
}

document.getElementById("lightbox").addEventListener("click", function() {
  this.style.display = "none";
});

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
