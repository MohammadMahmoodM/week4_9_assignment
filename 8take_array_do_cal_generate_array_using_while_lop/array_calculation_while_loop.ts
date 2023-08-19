// - Implement a program that takes a list of temperatures in Celsius as
// input from the user. Convert each temperature to Fahrenheit using the
// formula F = (C * 9/5) + 32 and store the converted temperatures in an
// array. Use a while loop to perform the conversion for each
// temperature.

var new_temp_list: number[] = []

function temperature_c_to_f(temp_list: number[]):void{
    var index = 0
    while(temp_list.length > index){
        var f = (temp_list[index]*9/5) + 32
        console.log(f);
        new_temp_list.push(f)
        index++
    }
    console.log(new_temp_list)
    console.log(`The Fahrenheit list ${new_temp_list} of given  Celsius is ${temp_list}`);
}

temperature_c_to_f([34,54,60,22,53])