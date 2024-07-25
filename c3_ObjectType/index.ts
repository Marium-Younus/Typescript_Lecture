//------------------------- 1st Step  object type

const person={
    p_name:'Muhammad Ali',
    p_age : 23,
    p_email:'m_ali@gmail.com'
}
console.log(person.p_name," ",person.p_age," ",person.p_email);

//------------------------- 2nd Step  object type

/*  ----------------------> this will get error (doesn't exist on type object sp we define object)
const employee:object={
    e_name:'Muhammad Ahmed',
    e_age : 20,
    e_email:'m_a@gmail.com'
}*/
const employee:{name:string,age:number,email:string}={
    name:'Muhammad Ahmed',
    age : 20,
    email:'m_a@gmail.com'
}
console.log(employee.name," ",employee.age," ",employee.email);

const student:{name:string,age:number,email:string}={
    name:'Sara Khan',
    age : 24,
    email:'sk@gmail.com'
}
console.log(student.name," ",student.age," ",student.email);

//------------------------- 2nd Step  common type
type objType = {name:string,age:number,email:string};
const teacher:objType={
    name:'Miss Sadia Fahim',
    age : 27,
    email:'sf@gmail.com'
}
console.log(teacher.name," ",teacher.age," ",teacher.email);