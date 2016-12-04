window.onload = function() {

  var input = document.querySelectorAll('input');

  for(var i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', focus, false);
    input[i].addEventListener('blur', focus, false);
  }

  function focus(e) {
    var parent = e.target.parentElement;
    var brother = e.target.previousElementSibling;

    if (parent.classList.contains('focused') && brother.classList.contains('active')) {
      parent.classList.remove('focused');
      if (e.target.value === '')
        brother.classList.remove('active', 'active-color');
      else
        brother.classList.remove('active-color');
    } else {
      parent.classList.add('focused');
      brother.classList.add('active', 'active-color');
    }
  }

  /*-----------------------------------------------------*/

  /*-- Help me make sure the main content will be the right size for everyone --*/

  var mainContent = document.querySelector('.main-content');
  var headerHeight = document.querySelector('.header').offsetHeight;

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

  /*------------------------------------------------------*/

  var navItems = document.querySelectorAll('.nav__item');
  var navPosition = document.querySelector('.nav__position');
  var navActive = document.querySelector('.nav__item--active');

  navPosition.style.width = window.getComputedStyle(navActive, null).getPropertyValue('width');
  // navPosition.style.transform = 'translateX(' + navActive.offsetLeft + 'px)';
  console.log(navActive.offsetLeft);

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
