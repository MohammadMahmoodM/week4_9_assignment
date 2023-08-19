//Write a program that uses a while loop to print the first 10 even numbers.
console.log("===Program to Print Even Number Till 10===");

var given_number = 0
while (given_number <= 10){
    given_number = given_number + 1
    if (given_number%2 == 0){
        console.log(given_number);
    }
}