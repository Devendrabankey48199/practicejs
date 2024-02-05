document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        

        let input = document.getElementById("Input")
        let p1 = document.getElementById("p1");
        let num = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        p1.innerHTML = `Random number is ${num} & Your number is ${input.value}`;
       finalResult = (input.value==num)?'Good Work':'Not matched'
        document.getElementById("p2").innerHTML = finalResult


        
    });
});
