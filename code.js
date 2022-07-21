const navMenu = document.getElementById("menu");
const bar = document.getElementById("bar");
const cancel = document.getElementById("cancel")
var btn = document.getElementById("btn");

function showMenu(){
    navMenu.style.right = "2%";
    bar.style.display = "none";
    cancel.style.display = "block"
}
function hideMenu(){
    navMenu.style.right = "";
    bar.style.display = "block";
    cancel.style.display = "none"
}
function navLink(){
    navMenu.style.right = "";
    bar.style.display = "block";
    cancel.style.display = "none"
}
btn.addEventListener("click", skills);
function skills(e){
    button = e.target;
    console.log(button)
    var pSkill = document.getElementsByClassName("pskill");
    var sSkill = document.getElementsByClassName("sskill");
    var hSkill = document.getElementsByClassName("hskill");
    var allSkills = document.getElementsByClassName("skl-itm");
    for(let i=0; i<pSkill.length;i++){
        pSkill[i].style.display = "flex";
    }
    for(let i = 0;i<allSkills.length;i++){
        allSkills[i].style.display = "none"
    }
    

    if(button.classList[0] === "ps"){
        for(let i=0; i<pSkill.length;i++){
            pSkill[i].style.display = "flex";
        }
        console.log(pSkill)
    }else if(button.classList[0] === "ss"){
        for(let i=0; i<sSkill.length;i++){
            sSkill[i].style.display = "flex";
        }
        console.log(sSkill)
    }else if(button.classList[0] === "hs"){
        console.log(hSkill)
        for(let i=0; i<hSkill.length;i++){
            hSkill[i].style.display = "flex";
        }
    }else{
        for(let i=0; i<pSkill.length;i++){
            pSkill[i].style.display = "flex";
        }
    }
}


window.addEventListener("scroll", reveal)


function reveal(){
    const wrapper = document.getElementsByClassName("wrapper");
    const aboutSection = document.querySelector(".about");
    const review = document.getElementById("subContainer");
    const contact = document.getElementById("contact");
    const port = document.getElementsByClassName("portSection")[0];
    let screenPosition = window.innerHeight;
    let positionAbout = aboutSection.getBoundingClientRect().top;
    let positionPicture = port.getBoundingClientRect().top;
    let positionReview = review.getBoundingClientRect().top;
    let positionContact = contact.getBoundingClientRect().top;

    

    if(570 > positionAbout){
        aboutSection.style.animation = "reveal 2s forwards"
    }else{
 
        aboutSection.style.animation = "";
    }
    if(positionPicture < 790){
        port.style.animation = "picture 2s ease forwards"
    }else{
        port.style.animation = "";
    }
    if(positionReview < 610){
        review.style.animation = "people 2s ease forwards"
    }else{
        review.style.animation = ""
    }
    if(positionContact < 900){
        contact.style.animation = "contact 2s ease forwards"
    }else{
        contact.style.animation = ""
    }
}

const experience = document.getElementsByClassName("exp")[0];
const education = document.getElementsByClassName("edu")[0];

function showEdu(){
    experience.style.display= "none"
    education.style.display = "block"
    
}
function showExp(){
    education.style.display = "none"
    experience.style.display= "block"
}

const certificate = document.getElementById("certificate");
const about = document.getElementById("aboutSection");

function showCert(){
    about.style.display = "none";
    certificate.style.display = "block"
}
function rmvCert(){
    certificate.style.display = "none"
    about.style.display = "flex";
   
}
