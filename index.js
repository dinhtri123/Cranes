$(document).ready(function () {
  const media = window.matchMedia("(max-width:1023px)");
  if(media.matches) {
    $(".btn-menu").on('click', function( ) {
      $('.header-menu').toggleClass('active')
    })
  };
})

document.addEventListener('DOMContentLoaded', function() {
  const tabBtn = document.querySelectorAll('.news-all-tab button')
  const tabContent = document.querySelectorAll('.news-all-item')
  tabBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtn.forEach(el => el.classList.remove('active'));
      btn.classList.add('active')
      const dataId= btn.getAttribute('data-id');

      tabContent.forEach(el => el.classList.remove('active'))
      const dataContent = Array.from(tabContent).find(el => el.getAttribute('data-content') === dataId);
      dataContent.classList.add('active')

    })
  })
})