const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

function toggleNav() {
  navbarNav.classList.toggle('show');
}

navbarToggler.addEventListener('click', toggleNav);