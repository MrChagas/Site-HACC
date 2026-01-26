/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*Mostra Menu*/
if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*Esconde Menu*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //quando clicar em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()

/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.services__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 'auto',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
//when the scroll is higher than 350vw height, add the show-scroll class to the a tag with the scroll
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
scrollUp()
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: '2500',
    delay: 400,
    //reset: true, // Animations repeat
})

sr.reveal('.home__content, .services__data, .services__swiper, .footer__container')
sr.reveal('.home__images', {origin: 'bottom', delay: 1000})
sr.reveal('.about__images, .contact__img', {origin: 'left'})
sr.reveal('.about__data, .contact__data', {origin: 'right'})
sr.reveal('.projects__card', {interval: 100})

