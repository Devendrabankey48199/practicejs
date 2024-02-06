document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener('click', () => {
        let input = document.getElementById("Input")
        let p = document.querySelector("p")

        let value = input.value
        let String1 = ''
        let String2 = ''
        let String3 = ''


        if (!value) {
            p.innerHTML = `Please Enter a String`
            return;
        }

        else {
            for (i = 0; i < value.length; i++) {
                if (i == 0) {
                    String1 = value[i];
                }

                else if (i == value.length - 1) {
                    String2 = value[i];
                }

                else {
                    String3 = String3 + value[i];
                }

            }

        }



        p.innerHTML = `${String2}${String3}${String1}`;

    })
});
