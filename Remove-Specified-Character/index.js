document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("button");
    btn.addEventListener("click", function () {

        let input = document.getElementById("Input");
        let position = document.getElementById("Position");
        let p1 = document.getElementById("p1");

        let oldString = '';
        let newString = '';
        let positionNumber;

        // Check if the input value is empty
        if (!input.value) {
            p1.innerHTML = "Please Enter String";
            return; // Exit the function if the input value is empty
        } else {
            oldString = input.value;
        }

        // Check if the position value is empty
        if (!position.value) {
            p1.innerHTML = "Please Enter Position (number)";



            return; // Exit the function if the position value is empty
        } else {
            positionNumber = parseInt(position.value); // Convert position to a number
        }

        if (positionNumber > oldString.length) {
            p1.innerHTML = "You have entered greated position value compared to your String"
            return; 
        }


        for (let i = 0; i < oldString.length; i++) {
            // Check if the current iteration is at the specified position
            if (positionNumber === i + 1) {
                // Skip the character at the specified position
                continue;
            }

            // Correctly concatenate each character to the newString
            newString += oldString[i];
        }

        p1.innerHTML = newString;
    });
});
