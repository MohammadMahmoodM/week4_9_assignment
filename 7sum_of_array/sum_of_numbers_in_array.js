// Create a function that takes an array of numbers as parameter. Use a while 
// loop to calculate and return the sum of all the numbers in the array
function sum_of_array(numbers) {
    var result = 0;
    var ind = 0;
    while (numbers.length > ind) {
        result = result + numbers[ind];
        ind = ind + 1;
    }
    console.log(result);
}
sum_of_array([3, 4, 2, 1, 6]);
