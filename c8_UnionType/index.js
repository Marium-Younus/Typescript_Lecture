//---------- Union Type describes a value that can be one of servral types
var d1;
d1 = "Ali";
d1 = 233;
// d1= true ------------------- error generate because union type contain only string | number in above case
console.log(d1);
//---------------------- example with function
function combinedata(a, b) {
    console.log(a, " ", b);
}
combinedata(34, 56);
combinedata("Alpha", "Bravo");
//---------------------- example with function
function checkdata(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log(a, " ", b);
    }
}
checkdata(134, 56);
checkdata("Dravid", "Charlie");
