/*  
    Bits = Any kind of 2 valued things, usually described as zeros and ones 
        ie. any piece of information can be reduced to a sequence of zeros and ones (bits)

    Binary Number Defintion: The number 13, 
    0   0  0  0  1 1 0 1 = Binary Number 13
    128 64 32 16 8 4 2 1 = Where the ones are sum = 13 

    In order to work with a vast quantity of bits, we must separate them into chunks that represent pieces of info 
        IN JAVASCRIPT, THESE CHUNKS = VALUES 
        VALUES = a number, strings, function, etc. 
        Values are recycled as soon as you no longer use it => Able to invoke many values 

    Javascript uses a FIXED number of bits, 64 to store a SINGLE NUMBER VALUE => Limited amount of patterns you can use to represent this number
        -> Cool thought, why Windows is now 64bit, an increased capacity that can process data in 64-bit-chunks  (A BIGGER DATA PROCESSOR)
        -> Decimal numbers like PI lose precision because only 64bits are available to store that number
    With N Decimal digits, you can represent 10^n numbers
    With 64 binary digits, you can represent 2^64 numbers 

    JavaScript NaN = NOT A NUMBER
        - It IS a number value
        - When you do arithmatic like 0/0 or Infinity - Infinity 
        - Only value that is not equal to itself

    UNICODE = a standard that assigns a number to virtually every string character you need => A string can be described a sequence of numbers 
    STRINGS -> JS uses 16bits/string element, but UNICODE can define more characters 
        - Strings can be CONCATENATED (Added together)
*/
    `half of 100 is ${100 / 2}` /* "Template Literal */

    //UNARY Operators example = "typeof" operator takes only 1 value, compared to + - / * (binary operators)
    console.log(typeof 4.5)
    //number
    console.log(typeof "x")
    //string 
    // !false, !true = NOT (Unary operator)


    //Boolean Operators  
    console.log(3>2)
    console.log(2>3)
    console.log("aarvark" < "zoroaster") //true bc alphabetic, Uppercase is less than Lowercase 

    //LOGICAL Operators 
    console.log(true && false) // AND = true if both values given are true
    console.log(false || true) // OR = true if either value given is true

    //Ternary Operator 
    //Conditional Operator = ? picks what of the 2 value will come out, when true it picks the middle, when false it picks right
    console.log(true ? 1 : 2 ); // 1 
    console.log(false ? 2 : 1); // 2

    // NULL  = an empty value because an operator always needs values, however unmeaningful
/*
    AUTOMATIC TYPE CONVERSION 
    When an operator is applied to the "wrong type" of value 
    ex). console.log(8 * null) NULL quickly becomes 0
    JS will quickly convert that value to the type it NEEDS, this is TYPE COERCION

    "==" - How to compare types, this is useful when tseting whether a value has a real value or not (null == value)

    "===" "!==" This compares PRECISELY 

*/