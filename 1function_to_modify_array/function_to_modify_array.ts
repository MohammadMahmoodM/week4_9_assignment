// Create a function that takes an array, an index, and a value as
// parameters. Inside the function, use the splice method to insert the
// value at the specified index in the array. Return the modified array.

function an_array_modifier(arr: any[] ,ind: number, val: string): void {
    var result = arr.splice(ind, 1, val)
    console.log(result);
    console.log(arr);
    
}

an_array_modifier([1,2,4,5,1,3], 2, "apple")