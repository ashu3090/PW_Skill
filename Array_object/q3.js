const student ={
    name: "Abc",
    email: "abc@gmail.com",
    password:123
}
Object.preventExtensions(student)

const extensibleStatus =Object.isExtensible(student)



const teacher ={
    name:"Def",
    class: 7,
    subject : "Maths"
}

Object.seal(teacher)

const sealedStatus = Object.isSealed(teacher)

console.log(`Object Extensible Status: ${extensibleStatus}`)

console.log(`Object Sealed Status: ${sealedStatus}`)