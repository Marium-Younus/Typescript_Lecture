//------------- literal type in type script 
// Apply values rather than apply types to a variable or parameter
var info = "sara";
console.log(info);
function information(a, b, type) {
    if (type === "as-number") {
        console.log((+a) + (+b));
    }
    else {
        console.log(a, " ", b);
    }
}
information(3, 7, "as-number");
information("Muhammad", "Ali", "as-string");
