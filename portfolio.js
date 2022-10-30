const menuMobile = document.querySelector('.mobile')
const hamburger = document.querySelector('.hamburger')


hamburger.addEventListener('click', () =>{
    menuMobile.classList.toggle('active')
})

const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(link =>{
    link.addEventListener('click', () =>{
        menuMobile.classList.remove('active')
    })
})


//remove menu on scroll


window.addEventListener('scroll', ()=>{
    
    const scrolled = window.scrollY
    console.log(scrolled)
    if (scrolled >5){
        menuMobile.classList.remove('active')
    }

})