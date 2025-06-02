let header = document.getElementById("head")
let aboutSection = document.getElementById("about")
let skillsection = document.getElementById("skill")
let contactsection = document.getElementById("CONTACT-us")
const home = document.getElementById("home")
const about = document.getElementById("ABOUT")
const skill = document.getElementById("SKILLS")
const contact = document.getElementById("CONTACT")
let gaurav = document.getElementById("gaurav")
let footer = document.getElementById("footer")
let nav = document.getElementById("navbar")
let contentSection = document.getElementById("content")
let bar = document.getElementById("bar")
let cross = document.getElementById("cross")
let ul = document.getElementById("slider")
let body = document.getElementById("body")
const home1 = document.getElementById("home-1")
const about2 = document.getElementById("ABOUT-2")
const skill3 = document.getElementById("SKILLS-3")
const contact4 = document.getElementById("CONTACT-4")
let hr = document.querySelectorAll("hr")


window.addEventListener("scroll",function(e){
    let location1 = Math.floor(window.scrollY);
    console.log(Math.round(location1));
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

// adding typewritter effect

const type = "GAURAV !"

let adding = true

let index = 0 

function typeWritter(){
    if(adding){
        index++
        if(index > type.length){
            adding = false
            index = type.length - 1
            setTimeout(typeWritter ,500)
            return
        }
    }
    else{
        index--
        if(index < 0){
            adding = true
            index = 1
            setTimeout(typeWritter ,500)
            return
        }
    }
    // console.clear()
    gaurav.innerHTML = "HI MY NAME IS " + type.substring(0, index)

    setTimeout(typeWritter ,100)
}

typeWritter()

bar.addEventListener("click",function(e){
    // let location1 = Math.floor(window.scrollY);
    ul.style.display = "flex"
    ul.style.position = "fixed"
    // contentSection.style.display = "none"
    body.style.overflow = "hidden"
    // header.style.display = "none"
    nav.style.display = "none"
    
})
cross.addEventListener("click",function(){
    
    ul.style.display = "none"
    // contentSection.style.display = "flex"
    body.style.overflow = ""
    header.style.display = "flex"
    nav.style.display = "flex"
})
home1.addEventListener("click",function(w){
     document.querySelector("#head").scrollIntoView({
        behavior:"smooth"
    })
    // window.scrollTo({
    //     top:0,
    //     left:0,
    //     behavior: "smooth"
    // })
    body.style.overflow = ""
    ul.style.display = "none"
    nav.style.display = "flex"
})
about2.addEventListener("click",function(){
    document.querySelector("#scroll").scrollIntoView({
        behavior:"smooth"
    })
    // window.scrollTo({
    //     top:1445,
    //     behavior:"smooth"
    // })
    body.style.overflow = ""
    ul.style.display = "none"
    nav.style.display = "flex"
})
skill3.addEventListener("click",function(){
     document.querySelector("#scroll-2").scrollIntoView({
        behavior:"smooth"
    })
    //  window.scrollTo({
    //     top:2779,
    //     behavior:"smooth"
    // })
    body.style.overflow = ""
    ul.style.display = "none"
    nav.style.display = "flex"
})
contact4.addEventListener("click",function(){
     document.querySelector("#scroll-3").scrollIntoView({
        behavior:"smooth"
    })
    // window.scrollTo({
    //     top:4176,
    //     left:0,
    //     behavior:"smooth"
    // })
    body.style.overflow = ""
    ul.style.display = "none"
    nav.style.display = "flex"
})