document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        let input = document.getElementById("Input")
        let p = document.querySelector("p");
        let num = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        p.innerHTML = `Random number is ${num} & Your number is ${input.value}`;

        
    });
});
