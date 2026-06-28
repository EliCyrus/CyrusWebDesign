  const groups = document.querySelectorAll('.testimonial-group')
    let position = 0;
    const speed = 2
    const groupWidth = groups[0].offsetWidth
function animate(){
    position += speed
    if (position>=groupWidth){
        position = 0
    }
    groups.forEach((group)=>{
         group.style.transform = `translateX(-${position}px)`
    })
   requestAnimationFrame(animate)
}
animate()