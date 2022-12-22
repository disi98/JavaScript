const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

function toggleNav() {
  navbarNav.classList.toggle('show');
}

const projectViewBtn = document.querySelector('.cta .btn');
const targetSection = document.querySelector('#target-section');

function scrollToSection(event) {
  event.preventDefault();
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

projectViewBtn.addEventListener('click', scrollToSection);
