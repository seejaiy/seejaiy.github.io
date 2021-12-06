/* Prompt:
Stores a number as a variable called “answer”
Has a prompt that asks the user to guess a number between 1 and 10 and stores the user input as “guess.”
If the user guesses the correct number, an alert pops up congratulating them on getting the answer correct.
Otherwise, if the answer is too low, have an alert that pops us saying “your guess was too low.”
Otherwise, if the answer was too high, have an alert that pops up saying “your guess was too high.” */

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var c = generateRandomIntegerInRange(0, 10);
var g = parseInt(prompt("Guess an integer 1-10"));
var x = (g - c);
var y = (c - g);
if(Number.POSITIVE_INFINITY > g){
    if((g >= 0) && (g <= 10)) {
        if (c == g) {
            alert("You guessed the correct answer, which (as you know) is " + c + ". But was it just luck? Have you actually accomplished anything. If you want to silence these doubts, refresh the page and do it again. I dare you.");
        }
        else if (c > g) {
            alert("Your guess was " + y + " below the correct answer. I'm not sure why a person would guess the number " + g + ", but you did. Refresh the page to try again... to seek redemption!");
        }
        else if (g > c) {
            alert("Your guess was " + x + " above the correct answer. I'm not sure why a person would guess the number " + g + ", but you did. Refresh the page to try again... to seek redemption!");
        }
    } else {
        alert("What happened to guessing 1-10? Follow the rules next time, bucko.")
    }    
} else {
    alert("What happened to guessing 1-10? Follow the rules next time, bucko. However, if you want to get a learning experience out of this forbidden non-conformity, click on the first button. You will be taken on a journey, and eventually meet something related to (the great) Al Pacino.");
    var called = false;
    function first() {
        called = true;
        alert("Click on the other button to meet your final destination. Beware. Clicking will bring upon you (artistically magnificent) content which was formerly explicit. Though, it has been altered to be school-safe.");
            }
            if ( !called ) {
                function second() {
                    alert(`"Put that coffee down! Coffee's for closers only. You think I'm quacking with you? I am not quacking with you! I'm here from downtown. I'm here from Mitch and Murray. And I'm here on a mission of mercy."`);
                }
            }
        }
