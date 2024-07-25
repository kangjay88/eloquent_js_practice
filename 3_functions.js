/* Functions = A regular binding where the value of the binding is a function
    Why is it important?
    1. Wrapping a piece of a program in a value
    2. Structure larger programs
    3. Reduce repetition (Recycling)
    4. Associate names with subprograms
    5. Isolate these subprograms from one another
*/
// A simple function:
const square = function(x) {
    return x * x;
};
console.log(square(12)); //144

const makeNoise = function() {
    console.log("Pling");  //this is a side effect, it is not a function that creates values, but just prints
};
makeNoise();

/*How is a function created?
Created with an expression that starts with the keyword "function"
    -Functions have a set of PARAMETERS and BODY
    -body: contains the statements that are to be executed when the function is called
    -TRUE: Functions can have multiple or no parameters
    -TRUE: Therefore, some functions produce a value, while some don't
    - "return" = a statement that determines the value the function returns
        1. When return is followed by an expression, it jumps out of that function and gives
        the returned value to the code that called the function (square(x))
        2. When return has NO expression after it -> returns undefined (makeNoise())

    - parameters behave like bindings, but their initial values are given by the caller of the
    function, not the code in the function itself;
*/

/* BINDINGS AND SCOPES 
Scope = The part of the program in which the binding is visible
True: each binding has a scope

For bindings defined outside of any function, block, or module =>
    The scope is the whole program
    Therefore, you can call such bindings whereever I want
    This is known as GLOBAL

For bindings created for function parameters or declared inside a function =>
    Can only be referenced in that specific function 
    This is known as LOCAL
    Every time the function is called, new instances of bindings are created 
        Think of each local function acting in its own little world, or environ
        It can function without knowing context of the global environment

QUESTION: WHAT IS THE DIFFERENCE BETWEEN GLOBAL AND LOCAL BINDINGS? 

This leads into Nesting Scopes and Lexical Scoping

*/

/* NESTING 
TRUE: blocks and functions can live inside other blocks and functions
=> There are multiple degrees of locality
QUESTION: Explain the principle of nesting
Each local scope can also see all the local scopes that contain it
-> All scopes can see the global scope
= This is known as LEXICAL SCOPING

*/

// Nesting functions w/in func
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor //the ingredient function can REFERENCE the outer function parameter or scope 
        if (ingredientAmount > 1) { 
            unit += "s"; //unit and ingredientAmount are not VISIBILE by the outer function
        }
        console.log(`${ingredientAmount} ${unit} ${name}`) 
    };
    ingredient(1, "can", "chickpeas");
    ingredient(2, "tablespoon", "olive oil");
};

/* Declaration Notation = shortcut of creating function binding
function declaration = the statement defines the binding and points it at a function
1. These are important because function declarations are not part of the regular 
top to bottom flow of control. 
2. Conceptually moved to the top of the scope and can be used by all local scopes
*/
function square(x) {
    return x*x;
}