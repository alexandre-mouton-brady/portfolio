window.onload = function() {

  var mainContent = document.querySelector('.main-content');
  var headerHeight = document.querySelector('.header').offsetHeight;

  console.log(headerHeight);

  mainContent.style.height = 'calc(100vh - ' + headerHeight + 'px)';

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

  link.onclick = function(e) {
    e.preventDefault();
  };

  /*------------------------------------------------------*/

  var navItems = document.querySelectorAll('.nav__item');
  var navPosition = document.querySelector('.nav__position');
  var navActive = document.querySelector('.nav__item--active');

  navPosition.style.width = window.getComputedStyle(navActive, null).getPropertyValue('width');
  navPosition.style.transform = 'translateX(' + navActive.offsetLeft + 'px)';

  for(var i = 0; i < navItems.length; i++) {

    navItems[i].onmouseover = function() {
      var navItemWidth = window.getComputedStyle(this, null).getPropertyValue('width');

      var leftWidth = this.offsetLeft;

      prop = {
        'width': navItemWidth,
        'left': 'translateX(' + leftWidth + 'px)'
      };

      if(!this.classList.contains('nav__item--hover')) {
        this.classList.add('nav__item--hover');
        navPosition.style.width = prop.width;
        navPosition.style.transform = prop.left;
      }
    };

    navItems[i].onmouseout = function() {
      if(this.classList.contains('nav__item--hover')) {
        this.classList.remove('nav__item--hover');
        navPosition.style.width = window.getComputedStyle(navActive, null).getPropertyValue('width');
        navPosition.style.transform = 'translateX(' + navActive.offsetLeft + 'px)';
      }
    };
  }

  /*------------------------------------------------------*/

};
