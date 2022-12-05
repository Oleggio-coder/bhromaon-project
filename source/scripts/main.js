const burger = document.querySelector('.js-burger-btn');
const header = document.querySelector('.js-header');

burger.addEventListener('click', () => {
  header.classList.toggle('active');
});