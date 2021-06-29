//Write a program that prints the numbers from 1 to 100.
//But for multiples of three print “Fizz” instead of the
//number and for the multiples of five print “Buzz”. For
//numbers which are multiples of both three and five print
//“FizzBuzz”. Example output:
//
//1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz,
//13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23,
//Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz,
//34, Buzz, Fizz, 37, 38, Fizz, 40, 41, Fizz, 43, 44, ...

for (n=1;n<100;n++) {
    if (n % 3 === 0 && n % 5 === 0) console.log("FizzBuzz");
    else if (n % 3 === 0) console.log("Fizz");
    else if (n % 5 === 0) console.log("Buzz");
    else console.log(n)
}