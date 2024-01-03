/*
    EXPRESSIONS = A fragment of code that produces a value (22, "psych", "+")
        Expressions can contain other expressions
    STATEMENTS = If an expression corresponds to a sentence fragment, a JS STATEMENT corresponds to a full sentence
*/

// PROGRAM = List of statements
1; //equals a program
!false; //equals a program 

// Holding an internal state: How does JS "catch and hold" values? = BINDING/VARIABLE
let caught = 5 * 5; 

//LET = defines a variable. Once defined it can be used as an EXPRESSION
let ten = 10;
console.log(ten * ten);
// Important terminology: A variable/binding POINTS at a value
/* 
    IMAGINE VARIABLES/BINDINGS AS TENTACLES, THEY DON'T CONTAIN VALUES, THEY GRASP THEM => Two bindings can refer to the same value
    A program can access only the values that it still has a reference to.
    When you need to remember something, you grow a tentacle to hold on to it or you reattach one of your existing tentacles to it.
*/
// the = operator can be used to disconnect the variable from its current value and point to a new one
let mood = "light"; 
console.log(mood);
mood = "dark";
console.log(mood);

let jaysDebt = 120;
jaysDebt = 120-40;
console.log(jaysDebt);

// VAR & CONST 
var name = "Jay"; // The OLD way of declaring bindings
const greeting = "Hello "; // A CONSTANT binding, points at the same value for as long as it lives
console.log (greeting + name);

/* 
    Environment = Where bindings and their values exist in a given time, a program always starts up with an environment that contains 
    bindings part of its language standard, and bindings that provide ways to interact with the system 

    FUNCTIONS = Piece of a program wrapped in a value. This value can be applied in order to run the WRAPPED PROGRAM  
    INVOKE = to call or execute a function "prompt()"
        prompt("Enter Passcode");
    ARGUMENTS = Values given to functions ("Enter Passcode")
        -Different functions might need a different number or different types of arguments

    RETURN VALUES = When a function PRODUCES a value, it means to return that value
        -Anything that returns is a JavaScript Expression
*/

let theNumber = Number(prompt("pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
} else {
    console.log("Invalid Number");
}

/*
    Number.isNaN = A standard JS function that returns true only if the argument it is given is NaN
    Number = a function that returns NaN if it is given a non-valid Number
    "Unless theNumber is not-a-number, do this"
*/

let num = Number(prompt("Pick a number"));
if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("large");
} else {
    console.log("xl");
}

/* WHILE VS DO 
    WHILE = a while loop keeps looping the statement as long as the expression produces a value that gives TRUE when converted to Boolean
    DO = a do loop keeps loop the statement at least once, and it starts testing whether it should stop only after that first execution
*/

// WRITE A PROGRAM THAT CALCULATES AND SHOWS THE VALUE OF 2^6 
let result = 1;
let counter = 0;
while (counter < 6) {
    result = result * 2
    counter = counter + 1;
}
console.log(result);

// ^ DO THIS WITH FOR LOOP - a "for loop" must contain 2 semicolons -> initialize the loop by defining a binding; checks whether the loop should continue; 
// final part updates the state of the loop after every iteration 
let result2 = 1;
for (let counter2 = 0; counter2 < 6; counter2 = counter2 + 1) {
    result2 = result2 * 2;
}
 console.log(result2);

// WRITE A PROGRAM THAT KEEPS ASKING FOR YOUR NAME UNTIL YOU ENTER ONE
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName); //execute while yourName = False
console.log(yourName)

// WRITE A PROGRAM that finds the 1st number that is both greater than or equal to 20 and divisible by 7;
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break
    }
} // 21

/* 
    Shortcuts
    += 1 OR ++
    -= 1 OR --;
    *= 2; 
*/

