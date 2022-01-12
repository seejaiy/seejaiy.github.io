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
        alert("What happened to guessing 1-10? Follow the rules next time, my friend.")
        }    
} 
else {
    alert("What have we got here? Well, if you want to get something out of this forbidden non-conformity, click on the first button. You will be taken on a (short) journey, and eventually meet some information related to (the great) Al Pacino.");
    function first() {
        alert("Click on the other button to meet your move forward. Beware. Clicking will bring upon you (artistically magnificent) content which was formerly explicit. Though, it has been altered to be school-safe.");
            }   
    function second() {
        alert(`"Put that coffee down! Coffee's for closers only. You think I'm quacking with you? I am not quacking with you! I'm here from downtown. I'm here from Mitch and Murray. And I'm here on a mission of mercy." Now, you have the option to seek one final destination, so please click the third button if you please. There, you will find a brash speech which has been swept clean of curse words. It's supposed to be arrogant, as the movie which it emanated from was a critique of alpha-capitalism. Enjoy.`);
            } 
    function third() {
        if (window.confirm('Ok to Confirm, Cancel to Stay here'))   {
            window.open('https://www.youtube.com/watch?v=1E2iaP1HnSg', '_blank');
                }
            }
                    
}
          
