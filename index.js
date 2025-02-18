// Drop down navigation
let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click",handleClick);
function handleClick(){
    console.log("navigation button clicked");
    let navList = document.createElement("nav");
    navList.className ="drop-down-list";
    document.body.appendChild(navList);
    navBtn.style.display="none";

    let cancelList = document.createElement("button");
    let cancelListBton= 
    cancelList.className="cancel";
    cancelList.innerHTML="X"
    navList.appendChild(cancelList);
    cancelList.onclick=()=>{
        navList.style.display="none";
        navBtn.style.display="grid";

        console.log("cancel button clicked");
        
    };

    let homeNav= document.getElementById("homea");
    homeNav.className="drop-down-nav-links";
    let aboutNav = document.getElementById("abouta");
    aboutNav.className="drop-down-nav-links";
    let contactNav= document.getElementById("contactsa");
    contactNav.className="drop-down-nav-links";
    let socialNav = document.getElementById("sociala");
    socialNav.className="drop-down-nav-links";
    let projectsNav = document.getElementById("projectsa");
    projectsNav.className="drop-down-nav-links";

    navList.appendChild(homeNav);
    navList.appendChild(aboutNav);
    navList.appendChild(contactNav);
    navList.appendChild(socialNav);
    navList.appendChild(projectsNav);

    let links = [homeNav,aboutNav,contactNav,socialNav,projectsNav];
    links.forEach(link=>{
        link.onclick=()=>{
        navList.style.display="none";
        navBtn.style.display="grid";
        } 
    });
};

let hireBtn = document.getElementById("hire").addEventListener("click",hireMe);
function hireMe(){
    window.location="./authntification.html";
    console.log("Hire button clicked");
    
};
let form = document.querySelector("#contact-me-form");
form.addEventListener("submit",handleForm);
function handleForm(e){
    e.preventDefault();
    console.log("Form submitted");
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const detailss = document.getElementById("detailss").value;
    const mailtoLink = `mailto:maxwellkiprotich2020@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${detailss}`;
    window.location.href = mailtoLink;
    alert('Thank you for your message. i will get back to you soon.');
    this.reset();
};

let downloadCv = document.getElementById("download-cv");
downloadCv.onclick=()=>{
    console.log("Download cv button clicked");  
    const link =  document.createElement("a");
    link.href= "files/Mycv.docx";
    link.download= "Mycv.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

let innerFill= document.querySelector(".inner-fill");
innerFill.height="100%";
innerFill.width ="70%";

//Go to top buton 
const scrollToTop = document.querySelector(".scroll-to-top");
const visibility = ()=>{
    if(window.scrollY > 300){
        scrollToTop.style.display = "block";
    }else{
        scrollToTop.style.display= "none";
    };
};

document.addEventListener("scroll",visibility);
scrollToTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});