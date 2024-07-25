//------------- literal type in type script 
// Apply values rather than apply types to a variable or parameter

let info:"sara"|23 ="sara"

console.log(info)

function information(a:number|string,b:number|string,type :"as-number" | "as-string"){
    if( type === "as-number")
    {
        console.log((+a)+(+b))
    }
    else{
         console.log(a," ",b)
    }
   
}
information(3,7,"as-number")
information("Muhammad","Ali","as-string")