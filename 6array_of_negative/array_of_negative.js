// Write a program having an array of numbers if the number is
// negative it should remove the negative number from the array.
var aray_of_num = [1, 4, -10, 5, -3, 8, 6, 9, -4];
console.log("Before Removing Negative number", aray_of_num);
aray_of_num.forEach(function (num) {
    if (num < 0) {
        var index_of_negative = aray_of_num.indexOf(num);
        aray_of_num.splice(index_of_negative, 1);
    }
});
console.log("After Removing Negative number", aray_of_num);
