window.onload = function() {

  /*-----------------------------------------------------*/

  var btnOpenNav = document.querySelector('.btn-open-nav');
  var btnCloseNav = document.querySelector('.btn-close-nav')
  var mobileNav = document.querySelector('.navigation--mobile');

  btnOpenNav.onclick = function() {
    if(!mobileNav.classList.contains('show'))
      mobileNav.classList.add('show');
  };

  btnCloseNav.onclick = function() {
    if(mobileNav.classList.contains('show'))
      mobileNav.classList.remove('show');
  };

  /*-----------------------------------------------------*/

  var baseUrl = location.protocol + '//' + location.host + location.pathname;
  var link = document.querySelector('.logo');

  link.href = baseUrl;

  /*------------------------------------------------------*/

  var navItems = document.querySelectorAll('.nav__item');
  var navPosition = document.querySelector('.nav__position');
  var navActive = document.querySelector('.nav__item--active');

  navPosition.style.width = navActive.offsetWidth + 'px';
  navPosition.style.transform = 'translateX(' + navActive.offsetLeft + 'px)';

  var i;
  var l = navItems.length;
  for(i = 0; i < l; i++) {
    navItems[i].addEventListener('mouseover', hover, false);
    navItems[i].addEventListener('mouseout', hover, false);
  }

  function hover(e) {
    if(e.target.classList.contains('nav__item--hover')) {
      e.target.classList.remove('nav__item--hover');
      console.log(navActive.offsetWidth);
      navPosition.style.width = navActive.offsetWidth + 'px';
      navPosition.style.transform = 'translateX(' + navActive.offsetLeft + 'px)';
    }
    else if(!e.target.classList.contains('nav__item--hover')) {
      e.target.classList.add('nav__item--hover');
      navPosition.style.width = e.target.offsetWidth + 'px';
      navPosition.style.transform = 'translateX(' + e.target.offsetLeft + 'px)';
    }
  }

  /*------------------------------------------------------*/

};
