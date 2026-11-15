
// Needed help with this because I had no clue how to fix the white page showing error
setTimeout(function () {

    let makeBetter = document.getElementById("makeBetter");

    let namePerson = prompt("Hi, what is your name?");
    let responseUser = prompt(namePerson + ", Are you ready (Y/N)");

    if (responseUser === "Y") {

        let ratingUser = Number(prompt("Rate how you feel 1 is worst and 5 is best (1-5) NUMBERS ONLY!!"));

        if (ratingUser == 1) {
            makeBetter.textContent = "I'm sorry you are having a bad day. Take a walk if you can.";
        } else if (ratingUser == 2) {
            makeBetter.textContent = "Remember, it's okay for life to have its ups and downs you got this!";
        } else if (ratingUser == 3) {
            makeBetter.textContent = "Feeling in the middle? Me too!";
        } else if (ratingUser == 4) {
            makeBetter.textContent = "Yay! Glad to hear! Hope you have a wonderful rest of your day";
        } else if (ratingUser == 5) {
            makeBetter.textContent = "Keep up the positivity!!";
        } else {
            makeBetter.textContent = "Invalid Choice :((";
        }

    } else {

        makeBetter.textContent = "You got the halloween version theme of the game!";

        let candyChoice = prompt("Would you rather eat CANDY CORNS or SNICKERS (ALL CAPS PLEASE)");

        if (candyChoice === "CANDY CORNS") {
            makeBetter.textContent = "Candy Corns are not my favorite, but they are pretty good still.\n\n";
        } else if (candyChoice === "SNICKERS") {
            makeBetter.textContent = "Snickers are the perfect balance of sweet and salty!\n\n";
        } else {
            makeBetter.textContent = "Neither candy! Wow, well alright.\n\n";
        }

        let halOp = prompt("Last Question: Is Halloween your favorite holiday? (Y/N)");

        if (halOp === "Y") {
            makeBetter.textContent += "Yayy, Halloween really is the best holiday!\n\n";
        } else {
            makeBetter.textContent += "WHAT? Halloween is the BEST HOLIDAY - Yes is the right answer (I am just joking!!)\n\n";
        }

        makeBetter.textContent += "Thank you for playing! It was really fun!\n\n";
    }

    document.getElementById("overlay").style.display = "flex";

}, 100);
