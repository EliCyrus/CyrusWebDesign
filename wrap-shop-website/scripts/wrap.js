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
   

   let html = 
function themeChanger(){

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

}