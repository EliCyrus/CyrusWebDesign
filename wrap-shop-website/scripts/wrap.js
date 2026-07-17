const showMore = document.querySelector('.secondary-service-button')
let showMoreActive = false
showMore.addEventListener('click', ()=>{
    if (!showMoreActive){
         document.querySelectorAll('.secondary-service-item').forEach((item)=> {
        item.style.display = 'grid' 
        item.style.opacity = '1'
        showMoreActive = true
        showMore.innerHTML = 'Show Less'
         })
        }
        else{
          document.querySelectorAll('.secondary-service-item').forEach((item)=> {
        item.style.display = 'none' 
        showMoreActive = false
        showMore.innerHTML = 'Show More'
         })
        }
    })
   const submitButton = document.querySelector('.contact-form')
   submitButton.addEventListener('submit', (e)=> {
    e.preventDefault()
   })
   

   const lightHTML = ` <title>Wrap Shop</title>
        <link rel="stylesheet" href="styles/wrap.css">
        <link rel="stylesheet" href="styles/services.css">
        <link rel="stylesheet" href="styles/process.css">
        <link rel="stylesheet" href="styles/reviews.css">
        <link rel="stylesheet" href="styles/footnote.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
`
const darkHTML =  `<title>Wrap Shop</title>
        <link rel="stylesheet" href="dark-styles/wrap.css">
        <link rel="stylesheet" href="dark-styles/services.css">
        <link rel="stylesheet" href="dark-styles/process.css">
        <link rel="stylesheet" href="dark-styles/reviews.css">
        <link rel="stylesheet" href="dark-styles/footnote.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
`
function themeChanger(){

const head = document.querySelector('head')
let darkMode = false;
let position = 0
const speed = 2
const displayDivWidth = document.querySelector('.display-div').offsetWidth
const themeButton = document.querySelector('.theme-button')
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



}
themeChanger()