const hiddenEl =  document.querySelectorAll(".hidden")
const name = document.querySelector(".name")

// calling the observer api
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)

        // targeting the elements showing up on screen and giving them the class show

        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
        
    });

})

// calling the observer function in a  for each loop to run 
// through all the arguments and applying it for all the elements

hiddenEl.forEach((el) => {
    observer.observe(el)
})