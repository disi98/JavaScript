$(document).ready(function() {
  // Add a smooth scroll effect to the navigation links
  $('nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

  // Toggle the visibility of the nav items when the hamburger icon is clicked
  $('.hamburger-icon').on('click', function() {
    $('nav ul').slideToggle();
  });
});
