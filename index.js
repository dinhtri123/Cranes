$(document).ready(function () {
  const media = window.matchMedia("(max-width:1023px)");
  if(media.matches) {
    $(".btn-menu").on('click', function( ) {
      $('.header-menu').toggleClass('active')
    })
  }
})