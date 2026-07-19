import { scrollAnimation } from "../../scripts/portfolio.js";
scrollAnimation()
 const lightHTML = ` <title>Auto Detailing</title>
        <link rel="stylesheet" href="styles/detailing.css">
        <link rel="stylesheet" href="styles/services.css">
        <link rel="stylesheet" href="styles/about.css">
        <link rel="stylesheet" href="styles/testimonials.css">
        <link rel="stylesheet" href="styles/footnote.css">
        <link rel="stylesheet" href="styles/contact.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
`
const darkHTML = ` <title>Auto Detailing</title>
        <link rel="stylesheet" href="dark-styles/dark-detailing.css">
        <link rel="stylesheet" href="dark-styles/dark-services.css">
        <link rel="stylesheet" href="dark-styles/dark-about.css">
        <link rel="stylesheet" href="dark-styles/dark-testimonials.css">
        <link rel="stylesheet" href="dark-styles/dark-footnote.css">
        <link rel="stylesheet" href="dark-styles/dark-contact.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
`
const head = document.querySelector('head')
let darkMode = false;
let position = 0
const speed = 2
const displayDivWidth = document.querySelector('.display-div').offsetWidth
const themeButton = document.querySelector('.theme-button')
function themeChanger(){
function themeChangerInner (html,head){
head.innerHTML = html
}
themeButton.addEventListener('click', ()=> {
    
    if (darkMode){
        themeChangerInner(lightHTML,head)
          document.querySelector('.back-arrow').src = 'images/arrow-left.png'
       animateBack()
        darkMode = false
    }
    else{
        themeChangerInner(darkHTML,head)
        document.querySelector('.back-arrow').src = 'images/arrow-left-2.png'
       animate()
        darkMode = true
        

    }
})

}

function animate(){
    
     position += speed
     if (position <= displayDivWidth ){
        document.querySelector('.display-div').style.transform = `translateX(${position}px)`
            requestAnimationFrame(animate)
        }
        document.querySelector('.header-button-image').src = 'images/moon.png'
}
function animateBack (){
    position -= speed
    if (position > 0 ){
        document.querySelector('.display-div').style.transform = `translateX(${position}px)`
            requestAnimationFrame(animateBack)
        }
    document.querySelector('.header-button-image').src = 'images/sun.png'
}

themeChanger()
