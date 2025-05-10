 document.addEventListener('DOMContentLoaded', () => {
│           // Płynne przewijanie dla linków nawigacyjnych
│           document.querySelectorAll('a[href^="#"]').forEach(anchor => {
│               anchor.addEventListener('click', function (e) {
│                   e.preventDefault();
│                   document.querySelector(this.getAttribute('href')).scrollIntoView({
│                       behavior: 'smooth'
│                   });
│               });
│           });
│
│           // Animacja elementów podczas przewijania
│           const observerOptions = {
│               threshold: 0.5
│           };
│
│           const observer = new IntersectionObserver((entries) => {
│               entries.forEach(entry => {
│                   if (entry.isIntersecting) {
│                       entry.target.classList.add('fade-in');
│                   }
│               });
// │           }, observerOptions);
│
│           // Obserwuj wszystkie sekcje
│           document.querySelectorAll('section').forEach(section => {
│               observer.observe(section);
│           });
│       });
