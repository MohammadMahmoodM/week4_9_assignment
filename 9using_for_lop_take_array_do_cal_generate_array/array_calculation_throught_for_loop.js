// - Implement a program that takes a list of temperatures in Celsius as
// input from the user. Convert each temperature to Fahrenheit using the
// formula F = (C * 9/5) + 32 and store the converted temperatures in an
// array. Use a while loop to perform the conversion for each
// temperature.
var new_temp_list = [];
function temperature_c_to_f(temp_list) {
    temp_list.forEach(function (number) {
        var f = (number * 9 / 5) + 32;
        new_temp_list.push(f);
    });
    console.log(new_temp_list);
    console.log("The Fahrenheit list ".concat(new_temp_list, " of given  Celsius is ").concat(temp_list));
}
temperature_c_to_f([34, 54, 60, 22, 53]);
