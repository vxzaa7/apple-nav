const searchBtn = document.querySelector('nav .web-nav .link-search');
const closeBtn = document.querySelector('.search-container .link-close');
const webNav = document.querySelector('.web-nav');
const searchBar = document.querySelector('.search-container');
const overMask = document.querySelector('.over-mask');

searchBtn.addEventListener('click', () =>{
    webNav.classList.add("hide");
    searchBar.classList.remove("hide");
    overMask.classList.add("show")
})

closeBtn.addEventListener('click',()=>{
    webNav.classList.remove("hide");
    searchBar.classList.add("hide");
    overMask.classList.remove("show")
})

overMask.addEventListener('click',()=>{
    webNav.classList.remove("hide");
    searchBar.classList.add("hide");
    overMask.classList.remove("show")
})



//mobile
const menuIcon = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIcon.addEventListener("click",()=>{
    navContainer.classList.toggle("active");
})


const MobileSearch = document.querySelector('.mobile-search-container .search-bar');
const searchInput = document.querySelector('.mobile-search-container input')
const nav =  document.querySelector('.nav-container nav');
const cancelBtn = document.querySelector('.mobile-search-container .cancel-btn')

searchInput.addEventListener('click',()=>{
    MobileSearch.classList.add('active');
    nav.classList.add('move-up');
    webNav.classList.add('move-down');
});

cancelBtn.addEventListener('click',()=>{
    MobileSearch.classList.remove('active');
    nav.classList.remove('move-up');
    webNav.classList.remove('move-down');
});