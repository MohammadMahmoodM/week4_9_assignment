// Implement a simple shopping cart program using an array. Create
// functions to add items, remove items, and update quantities using the
// splice method. Print the cart's contents after each operation
var chart = [];
function add_item(item) {
    chart.push(item);
    console.log("The ".concat(item, " is added in chart, Now you have following item in basket"));
}
function remove_item(item) {
    var index_of_removing_item = chart.indexOf(item);
    if (index_of_removing_item == -1) {
        console.log("Your Basket is empty");
    }
    else {
        var removed_item = chart.splice(index_of_removing_item, 1);
        console.log("The following ".concat(removed_item, " item is removed from shopping list"));
    }
}
function update_items(item, value) {
    var index_of_updated_item = chart.indexOf(item);
    if (index_of_updated_item == -1) {
        console.log("Your Basket might be empty or does not have this item");
    }
    else {
        var update_item = chart.splice(index_of_updated_item, 1, value);
        console.log("The following ".concat(update_item, " is updated in place of ").concat(item, " from shopping list"));
    }
}
add_item("Apple");
add_item("Banana");
add_item("Orange");
console.log("=====Before removal=====");
remove_item("Banana");
console.log("=====after removal=====");
console.log(chart);
console.log("====after update====");
update_items("Orange", "Pine Apple");
console.log(chart);
