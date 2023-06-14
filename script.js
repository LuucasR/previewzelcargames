const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const learnMoreBtn = document.getElementById('learn-more-btn');
const fullText = document.getElementById('full-text');
const hideTextBtn = document.getElementById('hide-text-btn');

learnMoreBtn.addEventListener('click', () => {
  fullText.style.display = 'block';
  hideTextBtn.style.display = 'block';
  learnMoreBtn.style.display = 'none';
});

hideTextBtn.addEventListener('click', () => {
  fullText.style.display = 'none';
  hideTextBtn.style.display = 'none';
  learnMoreBtn.style.display = 'block';
});

const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-btn');
const successModal = document.getElementById('success-modal');
const closeModalButton = document.querySelector('#success-modal .close');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  successModal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  successModal.style.display = 'none';
});
