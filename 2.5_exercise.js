/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
*/
let triangle = "#";
while (triangle.length <= 7) {
    console.log(triangle);
    triangle = triangle + "#";
}
for (let line = '#'; line.length < 8; line += '#') {
    console.log(line);
}
/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

let result = 1
for (result = 1; result < 100; result += 1) {
    if (result % 3 == 0 && result % 5 == 0) {
        console.log("FizzBuzz");
    } else if (result % 3 == 0) {
        console.log("Fizz");
    } else if (result % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(result);
    }
}

for (let n = 1; n <= 100; n++) {
    output = "";
    if (n % 3 == 0) output += "Fizz"
    if (n % 5 == 0) output += "Buzz"
    console.log (output || n)
}

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// Your code here.