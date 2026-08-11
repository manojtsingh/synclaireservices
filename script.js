/* ==========================================
   SYNCLAIRE SERVICES
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE NAVIGATION
========================================== */


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

        menuBtn.innerHTML = 
        nav.classList.contains("active")

        ? '<i class="fas fa-times"></i>'

        : '<i class="fas fa-bars"></i>';

    });

}



/* Close mobile menu after clicking link */


document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        if(menuBtn){

            menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

        }

    });

});





/* ==========================================
   STICKY HEADER EFFECT
========================================== */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header.style.background =
        "rgba(255,255,255,.97)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.background =
        "rgba(255,255,255,.9)";

        header.style.boxShadow =
        "none";

    }


});





/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */


const revealElements = document.querySelectorAll(
".card, .features div, .process-card, .specialty-card, .testimonial-card"
);


const revealObserver = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:.15

}

);



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="all .7s ease";


revealObserver.observe(element);


});





/* ==========================================
   COUNTER ANIMATION
========================================== */


const counters =
document.querySelectorAll(".counter-number");



const counterObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const counter = entry.target;


const target =
parseInt(counter.dataset.target);



let count = 0;



const speed = target / 100;



const updateCounter = ()=>{


if(count < target){


count += speed;


counter.innerText =
Math.ceil(count);



requestAnimationFrame(updateCounter);


}

else{


counter.innerText = target;


}



};



updateCounter();


counterObserver.unobserve(counter);


}



});


},{

threshold:.5

});



counters.forEach(counter=>{

counterObserver.observe(counter);

});





/* ==========================================
   FAQ ACCORDION
========================================== */


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


const question =
item.querySelector(".faq-question");



question.addEventListener("click",()=>{


faqItems.forEach(other=>{


if(other !== item){

other.classList.remove("active");

}


});



item.classList.toggle("active");


});


});





/* ==========================================
   TESTIMONIAL SLIDER
========================================== */


const slider =
document.querySelector(".testimonial-slider");



const slides =
document.querySelectorAll(".testimonial-card");



const nextBtn =
document.querySelector(".next-slide");



const prevBtn =
document.querySelector(".prev-slide");



let currentSlide = 0;



function showSlide(index){


if(!slider) return;


if(index >= slides.length){

currentSlide = 0;

}

else if(index < 0){

currentSlide =
slides.length-1;

}

else{

currentSlide=index;

}



slider.style.transform =
`translateX(-${currentSlide*100}%)`;


}



if(nextBtn){

nextBtn.addEventListener("click",()=>{


showSlide(currentSlide+1);


});

}



if(prevBtn){

prevBtn.addEventListener("click",()=>{


showSlide(currentSlide-1);


});

}





/* Auto Slide */


setInterval(()=>{


if(slider){

showSlide(currentSlide+1);

}


},6000);





/* ==========================================
   SMOOTH SCROLL OFFSET
========================================== */


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



window.scrollTo({


top:
target.offsetTop - 80,


behavior:"smooth"


});


}


});


});





/* ==========================================
   CURRENT YEAR FOOTER
========================================== */


const year =
document.querySelector(".year");



if(year){

year.innerText =
new Date().getFullYear();

}