var myheader = document.querySelector('header'),

    toggleMenu = document.getElementsByClassName("fa-bars")[0],

    mynav = document.querySelector("nav"),

    closeMenu = document.getElementsByClassName("close")[0],

    mylist = document.getElementsByClassName("list")[0],

    link1 = document.querySelectorAll(".list li")[0],

    link2 = document.querySelectorAll(".list li")[1],

    link3 = document.querySelectorAll(".list li")[2],

    link4 = document.querySelectorAll(".list li")[3],

    link5 = document.querySelectorAll(".list li")[4],

    link6 = document.querySelectorAll(".list li")[5],  

    sec1 = document.querySelectorAll("section")[0].offsetTop,

    sec2 = document.querySelectorAll("section")[1].offsetTop,

    sec3 = document.querySelectorAll("section")[2].offsetTop,

    sec4 = document.querySelectorAll("section")[3].offsetTop,

    sec5 = document.querySelectorAll("section")[4].offsetTop,

    sec6 = document.querySelectorAll("section")[5].offsetTop,

    links = [link1, link2, link3, link4, link5, link6], 

    sections = [sec1, sec2, sec3, sec4, sec5, sec6];;

toggleMenu.onclick = function() {

	'use strict';

	mynav.classList.toggle("show");

};

closeMenu.onclick = function() {

	'use strict';

	mynav.classList.remove("show");

};

links[0].addEventListener("click",function() {

	mynav.classList.remove("show");

});

links[1].addEventListener("click",function() {

	mynav.classList.remove("show");

});

links[2].addEventListener("click",function() {

	mynav.classList.remove("show");

});

links[3].addEventListener("click",function() {

	mynav.classList.remove("show");

});

links[4].addEventListener("click",function() {

	mynav.classList.remove("show");

});

links[5].addEventListener("click",function() {

	mynav.classList.remove("show");

});

	 

window.onscroll = function() {

	'use strict';

	

    if (window.scrollY > 300) {myheader.style.opacity= 0;}

    if (window.scrollY > 500) {

        myheader.style.position= "fixed";

        myheader.style.top= 0;

        myheader.style.left= 0;

        myheader.style.right= 0;

    }

    if (window.scrollY > 600) {myheader.style.opacity= 1;}

    else if (window.scrollY < 300) {

        myheader.style.position = "static";

        myheader.style.opacity= 1;

    }

   

    if(window.scrollY < sections[1] - 90) {

	    links[0].classList.add("active");

	    mylist.children[2].classList.remove("active");

	    mylist.children[3].classList.remove("active");

	    mylist.children[4].classList.remove("active");

	    mylist.children[5].classList.remove("active");

	    mylist.children[6].classList.remove("active");

    }

   

    if(window.scrollY > sections[1] - 90) {

		 links[1].classList.add("active");

		 mylist.children[1].classList.remove("active");

		 mylist.children[3].classList.remove("active");

		 mylist.children[4].classList.remove("active");

		 mylist.children[5].classList.remove("active");

		 mylist.children[6].classList.remove("active");

    }

   

    if(window.scrollY > sections[2] - 90) {

		 links[2].classList.add("active");

		 mylist.children[1].classList.remove("active");

		 mylist.children[2].classList.remove("active");

		 mylist.children[4].classList.remove("active");

		 mylist.children[5].classList.remove("active");

		 mylist.children[6].classList.remove("active");

    }

   

    if(window.scrollY > sections[3] - 90) {

		links[3].classList.add("active");

		mylist.children[1].classList.remove("active");

		mylist.children[2].classList.remove("active");

		mylist.children[3].classList.remove("active");

		mylist.children[5].classList.remove("active");

		mylist.children[6].classList.remove("active");

    }

   

    if(window.scrollY > sections[4] - 90) {

	    links[4].classList.add("active");

	    mylist.children[1].classList.remove("active");

	    mylist.children[2].classList.remove("active");

	    mylist.children[3].classList.remove("active");

	    mylist.children[4].classList.remove("active");

	    mylist.children[6].classList.remove("active");

    }

   

    if(window.scrollY > sections[5] - 90) {

	    links[5].classList.add("active");

	    mylist.children[1].classList.remove("active");

	    mylist.children[2].classList.remove("active");

	    mylist.children[3].classList.remove("active");

	    mylist.children[4].classList.remove("active");

	    mylist.children[5].classList.remove("active");

    }

    

};
