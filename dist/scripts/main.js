var a=document.querySelector(".main-content"),b=document.querySelector(".parallax"),c=document.querySelector(".header").offsetHeight,d=document.querySelector(".banner").offsetHeight;a.addEventListener("scroll",function(){var e=(window.getComputedStyle(b,null).getPropertyValue("opacity"),this.scrollTop);b.style.transform="translateY("+e/4.5+"%)",b.style.opacity=1-e/(d-c-120)}),a.style.height="calc(100vh - "+c+"px)";var e=document.querySelector(".btn-open-nav"),f=document.querySelector(".btn-close-nav"),g=document.querySelector(".navigation--mobile");e.onclick=function(){g.classList.contains("show")||g.classList.add("show")},f.onclick=function(){g.classList.contains("show")&&g.classList.remove("show")};var h=location.protocol+"//"+location.host+location.pathname,i=document.querySelector(".logo");i.href=h;var j=document.querySelectorAll(".nav__item"),k=document.querySelector(".nav__position"),l=document.querySelector(".nav__item--active");k.style.width=window.getComputedStyle(l,null).getPropertyValue("width"),k.style.transform="translateX("+l.offsetLeft+"px)";for(var m=0;m<j.length;m++)j[m].onmouseover=function(){var a=window.getComputedStyle(this,null).getPropertyValue("width"),b=this.offsetLeft;prop={width:a,left:"translateX("+b+"px)"},this.classList.contains("nav__item--hover")||(this.classList.add("nav__item--hover"),k.style.width=prop.width,k.style.transform=prop.left)},j[m].onmouseout=function(){this.classList.contains("nav__item--hover")&&(this.classList.remove("nav__item--hover"),k.style.width=window.getComputedStyle(l,null).getPropertyValue("width"),k.style.transform="translateX("+l.offsetLeft+"px)")}