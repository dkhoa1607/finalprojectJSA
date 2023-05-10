
const navShowBtn = document.querySelector('.nav-show-btn');
const navHideBtn = document.querySelector('.nav-hide-btn');
const navMenu = document.querySelector('.navbar-collapse');

navShowBtn.addEventListener('click', () => {
    navMenu.classList.add('showNav');
});

navHideBtn.addEventListener('click', () => {
    navMenu.classList.remove('showNav');
});


const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        slideShowcase();
    });
});

function slideShowcase(){
    const displayWidth = document.querySelector('.showcase').clientWidth;
    document.querySelector('.showcase-content').style.transform = `translateX(${-slideCount * displayWidth}px)`;
}

window.addEventListener('resize', slideShowcase);

// sessionStorage
let navbarNav = document.getElementById('navbar-nav')
if(sessionStorage.getItem('user')!=null) {
    let navList = ` <li class = "nav-item">
    <a href = "./index.html" class = "nav-link">Home</a>
  </li>
  <li class = "nav-item">
    <a href = "./foodrecipe.html" class = "nav-link">Recipe</a>
  </li>
  <li class = "nav-item">
    <a href = "./contact.html" class = "nav-link">Contact</a>
  </li>
  <li class = "nav-item">
  <button onclick="logOut()" id="logout-btn">Log out</button>
  </li>`
    navbarNav.innerHTML = navList

}else{
    let navList = `<li class = "nav-item">
    <a href = "./index.html" class = "nav-link">Home</a>
  </li>
  <li class = "nav-item">
    <a href = "./login.html" class = "nav-link">Login</a>
  </li>
  <li class = "nav-item">
    <a href = "./register.html" class = "nav-link">Sign up</a>
  </li>
  <li class = "nav-item">
    <a href = "./contact.html" class = "nav-link">Contact</a>
  </li>`
  navbarNav.innerHTML = navList
}
function logOut(){
    sessionStorage.removeItem('user')
    window.location.href = "./index.html"
}