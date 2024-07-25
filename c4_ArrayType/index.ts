//--------------------- simple array
document.write("<h1>simple array</h1>")
let technology = ["PHP","JavaScript","TypeScript","Node JS"]

for (let index = 0; index < technology.length; index++) {
  document.writeln("<p>" + technology[index]+ "</p>")
}

//--------------------- simple array with array type
document.write("<h1>simple array with array type</h1>")
let subject:string[] = ["urdu","English","Chemistry","Maths"]
for (let x = 0; x < subject.length; x++) {
    document.writeln("<p>" + subject[x]+ "</p>")
  }
//--------------------- simple array with different array type
document.write("<h1>with different array type ehis is not the best recomended way</h1>")
let std:[string,number,string,boolean] = ["Asad",23,"asad@gmail.com",true]
for (let y = 0; y < std.length; y++) {
    document.writeln("<p>" + std[y]+ "</p>")
}
//--------------------- best recommended is define 'any'
document.write("<h1>with different array type best recommended is define 'any' or 'not define any type' see simple array step 1</h1>")
let per:any[] = ["Faisal",40,"f@gmail.com",true]
for (let y = 0; y < per.length; y++) {
    document.writeln("<p>" + per[y]+ "</p>")
}