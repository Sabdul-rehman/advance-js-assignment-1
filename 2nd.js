document.addEventListener('DOMContentLoaded', function() {
    function runFizzBuzz() {
        for (let j = 1; j <= 100; j++) {
            if (j % 3 == 0 && j % 5 == 0) {
                document.write("fizzbuzz: " + j + "<br>");
            } else if (j % 3 == 0) {
                document.write("fizz: " + j + "<br>");
            } else if (j % 5 == 0) {
                document.write("buzz: " + j + "<br>");
            }
        }
    }
    
    let btn = document.getElementById("btn2");
    btn.addEventListener('click', runFizzBuzz);
});



