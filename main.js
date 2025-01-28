const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")
const closeicon = document.getElementById("closeicon")

hamburger.addEventListener('click',() =>{
    navMenu.classList.toggle("right-[0]")
})

closeicon.addEventListener('click',() =>{
    navMenu.classList.toggle("right-[0]")
})

navLink.forEach(link => {
    link.addEventListener('click',()=>{
        navMenu.classList.toggle("right-[0]")
    })
})


const scrollHeader =() =>{
    const stickyMenu = document.getElementById("sticky-menu")

    if(this.scrollY >= 150){
        stickyMenu.classList.remove("lg:top-[-100%]")
        stickyMenu.classList.add("bg-black/80")
    }
    else{
        stickyMenu.classList.add("lg:top-[-100%]")
        stickyMenu.classList.remove("bg-black/80")
    }
}

window.addEventListener("scroll",scrollHeader)

// Active link highlighting
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const homeSection = document.getElementById('home');
    const navLinks = document.querySelectorAll(".nav-link, .nav-link-desk");

    let current = '';
    const scrollY = window.scrollY;

    // Check if we're at the top of the page for home section
    if (scrollY < homeSection.offsetTop + homeSection.offsetHeight) {
        current = 'home';
    } else {
        // Check other sections
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });
    }

    // Update active class for all nav links
    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);

// Initialize active link on page load
document.addEventListener("DOMContentLoaded", activeLink);