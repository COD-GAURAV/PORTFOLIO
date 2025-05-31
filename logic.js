let header = document.getElementById("head")
let aboutSection = document.getElementById("about")
let skillsection = document.getElementById("skill")
let contactsection = document.getElementById("CONTACT-us")
const home = document.getElementById("home")
const about = document.getElementById("ABOUT")
const skill = document.getElementById("SKILLS")
const contact = document.getElementById("CONTACT")

let contentSection = document.getElementById("content")



window.addEventListener("scroll",function(e){
    console.log(Math.round(scrollY));
    // console.log(window.innerWidth)
//     if(window.innerWidth <= 720){
//     contentSection.style.display = "block"
// }
})


home.addEventListener("click",function(w){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
})

about.addEventListener("click",function(){
    window.scrollTo({
        top:714,
        behavior:"smooth"
    })
})


skill.addEventListener("click",function(){
     window.scrollTo({
        top:1374,
        behavior:"smooth"
    })
})

contact.addEventListener("click",function(){
    window.scrollTo({
        top:2047,
        left:0,
        behavior:"smooth"
    })
})




