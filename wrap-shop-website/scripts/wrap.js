const showMore = document.querySelector('.secondary-service-button')
let showMoreActive = false
showMore.addEventListener('click', ()=>{
    if (!showMoreActive){
         document.querySelectorAll('.secondary-service-item').forEach((item)=> {
        item.style.display = 'inline-block' 
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
    
        
   

   
