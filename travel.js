let searchbtn = document.querySelector("#searchbtn");
let searchfrom = document.querySelector(".searchfrom");
let searchbar = document.querySelector("#search-bar");
let searshicon = document.querySelector(".bx-search");
let iconLabel = document.querySelector("#iconLabel");
let icon = document.querySelector(".icon");
let userform = document.querySelector("#userform");
let loginform = document.querySelector("#loginform");
let closeLoginForm = document.querySelector("#formclose");
let menulist = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let vediobtn = document.querySelectorAll(".video-control");


function showbar() {
    if (searchfrom.classList.contains("activee")) {
        searchbtn.classList.replace("bx-search", "bx-x");
        searchfrom.classList.remove("activee");
        searchbar.classList.remove("none");
        iconLabel.classList.remove("none");
    } else {
        searchbtn.classList.replace("bx-x", "bx-search");
        searchfrom.classList.add("activee");
        searchbar.classList.add("none");
        iconLabel.classList.add("none");
    }
}
searchbtn.addEventListener("click", showbar);
function showlogin() {
    loginform.classList.remove("shew");
}
userform.addEventListener("click", showlogin);
function closeLogin() {
    loginform.classList.add("shew");
}
closeLoginForm.addEventListener("click", closeLogin);
menulist.onclick = () =>{
    if(navbar.classList.contains("nonee")){
        navbar.classList.remove('nonee');
        menulist.classList.replace('bx-menu','bx-x');
        }else{
        navbar.classList.add('nonee');           
        menulist.classList.replace('bx-x','bx-menu');
    }
}
vediobtn.forEach( slide =>{
    slide.addEventListener("click" , function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src =  slide.getAttribute("data-src");
        document.querySelector("#vedio-slider").src = src ;
    }) 
})

var swiper = new Swiper(".review-slider", {
    spacebetween: 20 ,
    loop: true ,
    autoplay: {
        dalay:2500
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        786:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    }
});
// dark mode
let body = document.querySelector('body');
let home = document.querySelector('#Home');
let book = document.querySelector('#Book');
let services = document.querySelector('#servicea');
let gallary = document.querySelector('#Gallary');
let review = document.querySelector('#Review');
let contant = document.querySelector('#Contant');
let form = document.querySelector("#loginform");
let footer = document.querySelector('.footer');
let mode = document.querySelector('#farha');
mode.onclick = () => {
    if(body.classList.contains('darkmode')){
        mode.classList.replace('bx-moon','bx-sun');
    }else{
        mode.classList.replace('bx-sun','bx-moon');
    }
    body.classList.toggle('darkmode');
    home.classList.toggle('darkmode');
    book.classList.toggle('darkmode');
    form.classList.toggle('darkmode');
    services.classList.toggle('darkmode');
    gallary.classList.toggle('darkmode');
    review.classList.toggle('darkmode');
    contant.classList.toggle('darkmode');
    footer.classList.toggle('darkmode');
    mode.classList.toggle('bx bx-sun');

    // if(body.classList.contains('darkmode')){
    //     mode.classList.replace('bx-moon','bxs-sun');
    // }else{
    //     mode.classList.replace('bxs-sun','bx-moon');
    // }
    console.log("dhhdh");
}
















// userform.addEventListener("click" , function() {
//     loginform.style.;
// })
// userform.onclick = function(){
//     console.log('sjjd');
//     loginform.style.display ="flex" ;
// }
// closee.onclick = () =>{
//     loginform.classList.add('shew');
// }

// loginform.remove();
// function showform(){
//     console.log('hhjdj');
    
// }
// searchbtn.onclick = () => {
//     console.log("mcdj");
//     if(searchfrom.classList.contains("none")){
//         searchfrom.classList.remove('none');
//         icon.classList.replace('bx-search','bx-x');
//     }else{
//         searchfrom.classList.add('none');
//         icon.classList.replace('bx-x','bx-search');
//     }
// }
// console.log (searchbtn,searchfrom,icon);









