/* Recursive functions = a function that calls itself
    - Recursion allows some functions to be writen in a different style
    - However, it is much slower and "expensive" than running a for loop
        -balance efficiency with clean code
*/
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3)); // → 8
    