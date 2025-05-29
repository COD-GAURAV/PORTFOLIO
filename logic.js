let header = document.getElementById("head")
let aboutSection = document.getElementById("about")
let skillsection = document.getElementById("skill")
let contactsection = document.getElementById("CONTACT-us")
const home = document.getElementById("home")
const about = document.getElementById("ABOUT")
const skill = document.getElementById("SKILLS")
const contact = document.getElementById("CONTACT")



window.addEventListener("scroll",function(e){
    console.log(Math.round(scrollY));
    
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
        top:641,
        behavior:"smooth"
    })
})


skill.addEventListener("click",function(){
     window.scrollTo({
        top:1232,
        behavior:"smooth"
    })
})

contact.addEventListener("click",function(){
    window.scrollTo({
        top:1842,
        left:0,
        behavior:"smooth"
    })
})


