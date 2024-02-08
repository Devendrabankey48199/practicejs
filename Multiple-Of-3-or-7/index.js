document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener('click', () => {
        let input = document.getElementById("Input")
        let p = document.querySelector("p")

        let value = input.value
        
        if(value%3===0){
            p.innerHTML="Number is multiple of 3";
        }
        
        else if(value%7===0){
            
            p.innerHTML="Number is multiple of 7";
        }
        else{
            p.innerHTML="Number is not multiple of 3 or 7. "
        }

    })
});
