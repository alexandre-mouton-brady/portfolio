window.onload=function(){var input=document.querySelectorAll(".input");for(var j=0;j<input.length;j++){input[j].addEventListener("focus",focus,false);input[j].addEventListener("blur",focus,false)}function focus(e){var parent=e.target.parentElement;var brother=e.target.previousElementSibling;if(parent.classList.contains("focused")&&brother.classList.contains("active")){if(e.target.value===""&&!e.target.hasAttribute("required")){parent.classList.remove("focused");brother.classList.remove("active","active-color")}else if(e.target.value===""&&e.target.hasAttribute("required")){brother.classList.remove("active","active-color");brother.classList.add("error-color");parent.classList.remove("focused");parent.classList.add("mandatory")}else{parent.classList.remove("focused","mandatory");brother.classList.remove("active-color","error-color")}}else{if(parent.classList.contains("mandatory")&&brother.classList.contains("error-color")){parent.classList.remove("mandatory");brother.classList.remove("error-color")}parent.classList.add("focused");brother.classList.add("active","active-color")}}var mainContent=document.querySelector(".main-content");var headerHeight=document.querySelector(".header").offsetHeight;var navMobile=document.querySelector(".navigation--mobile");navMobile.style.height="calc(100vh - "+headerHeight+"px)";mainContent.style.height="calc(100vh - "+headerHeight+"px)";navMobile.style.top=headerHeight+"px";var btnOpenNav=document.querySelector(".btn-open-nav");var mobileNav=document.querySelector(".navigation--mobile");btnOpenNav.onclick=function(){if(!mobileNav.classList.contains("show"))mobileNav.classList.add("show");else mobileNav.classList.remove("show")};var navItems=document.querySelectorAll(".nav__item");var navPosition=document.querySelector(".nav__position");var navActive=document.querySelector(".nav__item--active");navPosition.style.width=navActive.offsetWidth+"px";navPosition.style.transform="translateX("+navActive.offsetLeft+"px)";var i;var l=navItems.length;for(i=0;i<l;i++){navItems[i].addEventListener("mouseover",hover,false);navItems[i].addEventListener("mouseout",hover,false)}function hover(e){if(e.target.classList.contains("nav__item--hover")){e.target.classList.remove("nav__item--hover");navPosition.style.width=navActive.offsetWidth+"px";navPosition.style.transform="translateX("+navActive.offsetLeft+"px)"}else if(!e.target.classList.contains("nav__item--hover")){e.target.classList.add("nav__item--hover");navPosition.style.width=e.target.offsetWidth+"px";navPosition.style.transform="translateX("+e.target.offsetLeft+"px)"}}};