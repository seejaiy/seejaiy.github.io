// Parameters are variables that you can "require" when a function is "called"
// Arguments are the values that you "pass" to parameters when you "call" the function
/* 
function calcrect(length, width) {
    let area= length*width;
    alert("The area of a rectangle with width " + width + " and length " + length + " is equal to " + area + " .");
}
calcrect(4, 5);
function greet(name, occupation) {
    alert("Welcome " + name + "! We are thrilled to have a " + occupation + " here with us today!");
}
greet("John", "doctor"); */

/* Write a program that contains the following: 

A function that calculates and alerts the volume of a cube with a parameter of “side”.
A function that calculates and alerts the area of a triangle with the parameters of “height” and “length”
A function call to your volume function.
A function call to your area of a triangle function. */

function volcube(side) {
    let volume = side**3;
    alert("The volume of a cube with side lengths of " + side + " is " + volume + ".");
} volcube(71);

function triarea(base, height) {
    let area = 0.5*base*height;
    alert("The area of a triangle with a base of " + base + " and a height of " + height + " is equal to " + area + ".");
} triarea(61, 38);
