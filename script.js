const easy_questions = {
    "Q1) On which date of october is halloween celebrated?": "31",
    "Q2) How many letters are there in HALLOWEEN?": "9",
    "Q3) Which vegetable was traditionally carved to make lanterns before the pumpkin became popular?": "turnip",
    "Q4) What is the common name for activity in which children go door to door asking for sweets and candies?": "trick or treating",
    "Q5) Which animal is most commonly associated with halloween witches?": "black cat",
}

const medium_questions = {
    "Q6) In which ancient Celtic festival are the origins of halloween commonly traced?": "samhain",
    "Q7) Approximately how many years ago did the ancient Celtic festival of Samhain begin, according to commonly cited historical estimates?": "2000",
    "Q8) In which country did the modern tradition of trick-or-treating become especially popular during the 20th century?": "united states",
    "Q9) What does the word 'Halloween' historically derive from?": "hallows' eve",
    "Q10) In which year did the Peanuts television special 'It's the Great Pumpkin, Charlie Brown' first air?": "1966",
}

const hard_questions = {
    "Q11) In which year was the first known printed reference to the phrase 'trick or treat' in its Halloween context published?": "1927",
    "Q12) What is the name of the Mexican holiday celebrated on November 1 and 2, which honours deceased loved ones and is often associated with Halloween season?": "día de los muertos",
    "Q13) In which year was the famous horror film Halloween, directed by John Carpenter, released?": "1978",
    "Q14) Approximately how many years did it take for Halloween to develop from the ancient Samhain festival into the modern holiday with its familiar customs? Choose the closest broad historical estimate.": "2000",
    "Q15) In which year did the first Halloween episode of The Simpsons, 'Treehouse of Horror', air?": "1990"
};

let overlay = document.getElementById("overlay");
var user_score = 0;

function quitGame(name){
    alert(`Your final score is ${user_score}.`)
    alert(`Thanks for playing, ${name}! Byeee...`);
    overlay.style.display = "flex";
}

function showJumpScare(level){
    if (level === 1){
        alert("You will be redirected to a jumpscare video. Please come to this tab after you saw jumpscare.");
        window.open("jumpscare1.html");
    } else if (level === 2){
        alert("Warning: This is scary jumpscare and very intense. You will be redirected to a jumpscare video. Please come to this tab after you saw the jumpscare.");
        window.open("jumpscare2.html");
    } else if (level === 3){
        alert("WARNING: THIS IS VERY SCARY AND INTENSE JUMPSCARE. You will be redirected to a jumpscare video, which is very scary. Please come to this tab after watching it.")
        window.open("jumpscare3.html");
    }
}

function get_questions(level, username, jumpscare_level){
    for (let i = 0; i < 5; i++) {
        let question = Object.keys(level)[i];
        let answer = prompt(question);
        if (answer === null || answer.trim().toLocaleLowerCase() === "quit") {
            quitGame(username);
            return false;
        }
        answer = answer.trim().toLocaleLowerCase();
        if (answer === level[question]){
            alert("Your answer is correct! You got a point!")
            user_score++;
        } else {
            let options_choosed;
            do {
                options_choosed = prompt("Your answer is incorrect. You have two options - 1) See a jumpscare o continue or 2) Quit here. Type 1 or 2 to choose.");
                if (options_choosed === null) {
                    options_choosed = "2";
                }
                if (options_choosed !== "1" && options_choosed !== "2") {
                    alert("Invalid option. Please type 1 or 2.");
                }
            } while (options_choosed !== "1" && options_choosed !== "2");
            if (options_choosed == 1){
                showJumpScare(jumpscare_level);
                continue;
            } else if (options_choosed == 2){
                quitGame(username);
                return false;
            }
        }
    }
    return true;
}

function startGame(){
    const username = prompt("Enter your name:") || "player";
    alert(`Welcome ${username} to the Unexpected Halloween Quiz! You will be asked 15 questions total.`)
    alert("First round. 5 easy questions.")
    if (!get_questions(easy_questions, username, 1)) return;

    alert("You survived the first round! You are brave and intelligent. Now second round, 5 medium questions.")
    if (!get_questions(medium_questions, username, 2)) return;

    alert("You survived the second round! Great job! Now the third and the last round, 5 hard questions.")
    get_questions(hard_questions, username, 3);


}
