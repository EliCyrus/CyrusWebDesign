export function scrollAnimation (){
const observer = new IntersectionObserver((entries)=> {
entries.forEach((entry)=> {
if (entry.isIntersecting){
    entry.target.classList.add('show')
}
else{ entry.target.classList.remove('show')}
})
})
const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((element)=> {
    observer.observe(element)
})
}
let number = 1.8
document.querySelectorAll(".process-inner-div").forEach((process)=> {
process.style.transition = ` all ${number}s ease`
number += 0.8
})
scrollAnimation()


