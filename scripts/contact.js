const form = document.querySelector('.contact-form')
const button = document.querySelector('.submit-button')
const formStatus = document.querySelector('.form-status')
   
     form.addEventListener('submit', async (event)=> {
        event.preventDefault()
        const formData = new FormData(form)
        formStatus.innerHTML="Sending..."
         button.disabled = true
         
        try{
            const response = await fetch(
    "https://formspree.io/f/xdajrvqn",
    {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    }
)        

if (response.ok){
        formStatus.innerHTML="Message Sent"
        form.reset()
        button.disabled = false
    }
    else{
        console.log(await response.json())
        formStatus.innerHTML="Something went wrong"
        
    }
        } 
        catch(error){
            formStatus.innerHTML = 'Network Error'
        }
    
    })
   
   
