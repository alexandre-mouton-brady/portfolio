window.onload = function() {

  /*-- Help me make sure the main content will be the right size for everyone --*/
  var mainContent = document.querySelector('.main-content');
  var headerHeight = document.querySelector('.header').offsetHeight;
  var navMobile = document.querySelector('.navigation--mobile');

  navMobile.style.height = 'calc(100vh - ' + headerHeight + 'px)';
  navMobile.style.top = headerHeight + 'px';

  /*-- Simple open/close button action on mobile --*/
  var btnOpenNav = document.querySelector('.btn-open-nav');
  var mobileNav = document.querySelector('.navigation--mobile');

  btnOpenNav.onclick = function() {
    if(!mobileNav.classList.contains('show'))
      mobileNav.classList.add('show');
    else
      mobileNav.classList.remove('show');
  };

  //---------------------------------------------------

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
