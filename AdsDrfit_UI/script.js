const sections = document.querySelectorAll('.reveal_feature');

sections.forEach((section) => {

   window.addEventListener("load",eventListener);
   window.addEventListener("scroll",eventListener);

   function eventListener(){
    let windowHeight = window.innerHeight;
    let sectionRectTop = section.getBoundingClientRect().top;

    if(sectionRectTop<windowHeight){
        section.classList.add("active2");
    }
   }

   /* ------------------------------------------------------- Revealing Elements one by one on Scrolling   ----------------------------------------- */
   window.addEventListener("scroll" , () => {
        let reveals = section.querySelectorAll(".reveal2");

        reveals.forEach((reveal2,index) => {
            if(section.classList.contains("active2")){
                const delay = 600;

                setTimeout(() => {
                    reveal2.classList.add("active2");
                } , index * delay);
            }
        });
   }); 

   /* ------------------------------------------------------- Revealing Elements one by one on scroll revealing point   ( FREEZED) ----------------------------------------- */

  /* window.addEventListener("scroll" , () =>{
    let reveals = section.querySelectorAll(".reveal2");

    reveals.forEach((reveal2,index) => {
        let windowHeight = window.innerHeight;
        let revealRectTop = reveal2.getBoundingClientRect().top;
        let revealpoint = -250;

        if(revealRectTop < windowHeight - revealpoint){
            const delay =  600;

            setTimeout(() => {
                reveal2.classList.add("active2");
            } , index * delay);
        }
    });
  }); */

/* ----------------------------------------------------------------------------------------------------- */

   window.addEventListener("load" , () => {
    let reveals = section.querySelectorAll(".reveal2");

    reveals.forEach((reveal2,index) => {
        let windowHeight = window.innerHeight;
        let revealRectTop = reveal.getBoundingClientRect().top;

        if(revealRectTop < windowHeight){
            const delay =  600;

            setTimeout(() => {
                reveal2.classList.add("active2");
            } , index * delay);
        }
    });
   });
});




/* -------------------------------------------  Slide Show ----------------------------------------------------------------------------*/

const productContainers = [...document.querySelectorAll('.product_main')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerWidth = item.clientWidth;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});


/* -------------------- --------------------  Profile Show  ---------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.left-arrow');
  const nextBtn = document.querySelector('.right-arrow');
  const slideContainer = document.querySelector('.slide-content');
  const cards = document.querySelectorAll('.card-main');
  let currentIndex = 0;

  const updateSlider = () => {
    const slideWidth = cards[0].clientWidth + 20; // 20 is the gap between cards
    const totalSlides = cards.length;
    const slidesToShow = window.innerWidth >= 768 ? 3 : 1;
    const maxIndex = totalSlides - slidesToShow;
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === maxIndex ? 'none' : 'block';
  };

  nextBtn.addEventListener('click', () => {
    const slidesToShow = window.innerWidth >= 768 ? 3 : 1;
    if (currentIndex < cards.length - slidesToShow) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  window.addEventListener('resize', updateSlider);

  // Initial call to set up the slider
  updateSlider();
});


/* ---------------------------------------------------   Scroll Reveal --------------------------------------------*/
window.addEventListener('scroll' , reveal);
function reveal(){
    var reveal = document.querySelectorAll('.reveal');
    for(var i=0;i<reveal.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveal[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveal[i].classList.add('active');

        } else {
            reveal[i].classList.remove('active');
        }
    }
}

ScrollReveal({
  reset : true,
  distance : '60px',
  duration : 2500,
  
});

ScrollReveal().reveal('.hotel-img' , {origin : 'right'});

