// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika menu lanjutan di klik
document.querySelector('#menu-lanjutan'). onclick = () =>{
    navbarNav.classList.toggle('active')
}

// Klik diluar sidebar untuk menutup nav
const lanjutan = document.querySelector('#menu-lanjutan');

document.addEventListener('click', function(e){
   if(!lanjutan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');

   }
});