/* ARROW FUNCTIONS */
const roundTo = (n, step) => { // " The ARROW = "This input (the parameters) produces this result (the body)"
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

const square1 = (x) => { return x * x }; 
const square2 = x => x * x // Syntax for only 1 parameter no () required; Body is single expression no {} required;
const horn = () => { //Syntax for no parameters
    console.log("Toot");
}

/* CALL STACK = "pancake stack"
- Last in is first out
*/
function greet(who) {
    console.log("Hello" + who);
}
greet("Harry"); 
console.log("bye")

/* Order of CONTROL Flow 
1. greet("Harry") call causes control to jump to start of function (line 14)
2. function then calls console.log (line 15), which takes control, does its job
3. Returns control to greet function (line 14)
4. Reaches end of the greet function, returns to thep lace that called it - line (line 17)
5. console.log("bye") calls, 
*/

/* Functions must jump back to the place the called it when it returns => Computer must 
store context to remember where the call happened (so it can jump back)  = CALL STACK 
    a. this requires comp memory
    b. "too much recursion/out of stack space" = too big of a stack
    c. Every time a function is called, the context (location) is stored on top of the call stack
        1. when a function returns, it removes the top context from the stack and uses that context
        to continue execution
*/


/* OPTIONAL ARGUMENTS 
What happens when you pass more than the required arguments? 
    Nothin, the extra args are ignored
    Pass too few, the missing parameters are assigned the value undefined
What are the benefits? 
    Functions can accept any number of arguments
    This leads to potential errors
*/
function minus(a, b) {
    if (b==undefined) return -a;
    else return a-b;
}
console.log(minus(10)) // -10
console.log(minus(10,5)) // 5

function roundTo(n, step = 1) { // The = makes it optional - if you don't provide it or pass the value undefined, it will default to one
    let remainder = n % step; 
    return n - remainder + (remainder < step / 2 ? 0 : step);
    };
console.log(roundTo(4.5));
    // → 5
console.log(roundTo(4.5, 2));
    // → 4
    
/* CLOSURE = Function that References a specific instance of a local binding in an enclosing scope 
    - Don't have to worry about bidning lifetime 
    - Use function values in creative ways

    Create a mental model for closures: 
    Think of function values as containing both it's code body and the environment in which they are created
    When called, the function body sees the environ. in which it was created, NOT where it was called
*/

function multiplier(factor) {
    return number => number * factor;
    }
    let twice = multiplier(2); //called multiplier and created an environ. where factor parameter is buonud to 2
    console.log(twice(5)); //the function value it returns, which is stored in twice, remembers this environ so that when 
    //it is called, it multiplies its argument by 2
    // → 10




