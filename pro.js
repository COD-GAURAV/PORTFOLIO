
let upChange = [
    "HI GAURAV HERE  ",
    "A FRONTENT DEVELOPER  "
];


function typeScript(){

    let moving = true;
    let index = 0
    let arrIndex = 0

    setInterval(function(){
        if(moving){
            index++;
            if(index === upChange[arrIndex].length){
                moving = false;
                index = upChange[arrIndex].length + 1;
            }
        }
        else{
            index--;
            if(index<0){
                index = 0;
                moving = true;
                arrIndex++
                if(arrIndex === upChange.length){
                    arrIndex = 0
                }
            }
        }

        document.getElementById("hed").textContent = upChange[arrIndex].substring(0,index) + "!";
    },100)

    

    
}

typeScript()


const downloadBtn = document.getElementById("Download");
const about = document.getElementById("aboutClick");
const content = document.getElementById("contant");
const contactUsClick = document.getElementById("contactUsClick")
const contactUs = document.getElementById("contact-us")
const projectClick = document.getElementById("projectClick")
const project = document.getElementById("project")
const mainPic = document.getElementById("mainPic");
downloadBtn.addEventListener("click",(e)=>{
    window.open("gaurav cv.pdf","_blank")
})


about.addEventListener("click",(e)=>{
    e.preventDefault();
    // mainPic.src = `WhatsApp Image 2026-03-01 at 9.23.07 PM 2.jpeg`
    content.style.display = `none`
    contactUs.style.display = `none`
    project.style.display = `none`
    document.getElementById("about").style.display = `flex`
    // mainPic.style.objectPosition = `top`;
    document.getElementById("about").classList.add("slide-in");
})

contactUsClick.addEventListener("click",(e)=>{
    e.preventDefault();
    contactUs.style.display = `flex`
    document.getElementById("about").style.display = `none`
    content.style.display = `none`
    project.style.display = `none`
    // mainPic.style.objectPosition = `top`
    contactUs.classList.add("slide-in");
})

projectClick.addEventListener("click",(e)=>{
    e.preventDefault()
    project.style.display = `flex`
    // mainPic.src = `WhatsApp Image 2026-03-02 at 5.42.44 PM.jpeg`
    content.style.display = `none`
    contactUs.style.display = `none`
    document.getElementById("about").style.display = `none`
    // mainPic.style.objectPosition = `top`
    project.classList.add("slide-in");
})
