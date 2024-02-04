document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener('click', () => {
        let input = document.getElementById("Input")
        let p = document.querySelector("p")

        let value = input.value

        if (value.startsWith("Py")) {
            p.innerHTML = `${value}`
        }
        else {
            
            p.innerHTML = `Py${value}`
        }


    })
});
