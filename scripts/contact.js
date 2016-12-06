window.onload = function() {

  var input = document.querySelectorAll('.input');

  for(var j = 0; j < input.length; j++) {
    input[j].addEventListener('focus', focus, false);
    input[j].addEventListener('blur', focus, false);
  }

  function focus(e) {
    // Get the div parent of the input to apply the underline color
    // Get the label siblings of the input to apply the transformation
    var parent = e.target.parentElement;
    var brother = e.target.previousElementSibling;

    // If the input is focus
    if (parent.classList.contains('focused') && brother.classList.contains('active')) {
      // If the input isn't a required field and is empty
      // It goes back to inital state
      if (e.target.value === '' && !e.target.hasAttribute('required')) {
        parent.classList.remove('focused');
        brother.classList.remove('active', 'active-color');
      }
      // If the input is a required field and is empty
      // It goes back to inital state but change color from disabled to red
      else if (e.target.value === '' && e.target.hasAttribute('required')) {
        brother.classList.remove('active', 'active-color');
        brother.classList.add('error-color');
        parent.classList.remove('focused');
        parent.classList.add('mandatory');
      }
      // If the element is filled (required or not)
      // It removes color from the parent and the child
      // But leave the sibling over the input
      else {
        parent.classList.remove('focused', 'mandatory');
        brother.classList.remove('active-color', 'error-color');
      }
    }
    // If the element is losing focus
    else {
      // If the input was already empty(red) before focus
      // Remove the error color from parent and sibling
      if(parent.classList.contains('mandatory') && brother.classList.contains('error-color')) {
        parent.classList.remove('mandatory');
        brother.classList.remove('error-color');
      }

      // Set the parent and sibling to focused color
      // and move sibling over the input
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
