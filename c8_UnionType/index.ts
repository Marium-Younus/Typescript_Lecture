//---------- Union Type describes a value that can be one of servral types
let d1: string | number
d1 = "Ali"
d1 = 233
// d1= true ------------------- error generate because union type contain only string | number in above case
console.log(d1)

//---------------------- example with function
function combinedata(a:number|string,b:number|string){
    console.log(a," ",b)
}
combinedata(34,56)
combinedata("Alpha","Bravo")

//---------------------- example with function
function checkdata(a:number|string,b:number|string){
    if( typeof a === 'number' && typeof b === 'number')
    {
        console.log(a+b)
    }
    else{
         console.log(a," ",b)
    }
   
}
checkdata(134,56)
checkdata("Dravid","Charlie")