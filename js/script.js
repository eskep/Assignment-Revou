
// JavaScript to enable/disable send button based on form validation
document.getElementById('name').addEventListener('input', validateForm);
document.getElementById('phone').addEventListener('input', validateForm);
document.getElementById('interest').addEventListener('change', validateForm);

function validateForm() {
    const nameInput = document.getElementById('name').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();
    const interestInput = document.getElementById('interest').value;
    const sendBtn = document.getElementById('send-btn');

    if (nameInput !== '' && phoneInput !== '' && interestInput !== '') {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
}
// JavaScript autoslider
let currentIndex = 0;
const slides = document.querySelectorAll('.banner img');

setInterval(() => {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'block';
}, 2000);