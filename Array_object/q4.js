let students =[
    {id:1, firstName:"John", lastName:"Doe",age:20, grade:"A"},
    {id:2, firstName:"John", lastName:"Smith",age:22, grade:"B"},
    {id:3, firstName:"Bob", lastName:"Jhonson",age:19, grade:"A"},
    
]


//  Adding student to array
function addStudent(array,student){
    array.push(student)
}

const newStudent ={id:4,fistName:"Amit",lastName:"Kumar",age:20,grade:"c"}

addStudent(students,newStudent)
console.log(students)

//Update student data

function updateStudent(array,data,newValue)
{
    array.forEach((studentID)=>{
        if(studentID.firstName === data){
            studentID.firstName=newValue
        }       
    })

}

updateStudent(students,"John","Abc")
console.log(students)


// Function to Delete data

function deleteStudent(array,data){
   let index = array.findIndex((studentID)=>{
        return studentID.id===data
    })

   
    if(index!=-1)
        array.splice(index,1)
    else{
        console.log("No record exists")
    }
}

deleteStudent(students,2)
console.log(students)


//Dispaly value from object

function displayRecords(data){
    
    for(let i =0;i<data.length;i++){
        let obj = data[i]
       
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                console.log(`${key} : ${obj[key]}`)
                
            }
        }

        console.log('\n')
    }
}

displayRecords(students)


// Find Students by Grade

function findStudent(array,data)
{
    let data1=[], c=0
    array.forEach((studentID)=>{
        if(studentID.grade === data){
            //console.log(`Student Name ${studentID.firstName}`)
            data1.push(studentID.firstName +" " +studentID.lastName)
            c++
        }       
    })
    if(c!=0)
    console.log(data1.join())
    else
    console.log("Data not exists")
}

findStudent(students,"A")

//Function calculating age

function ageCalculatin(data){
    const ageData = data.map((studentID)=>{return studentID.age})
    const averageAge = ageData.reduce((acc,dat)=>acc+dat,0)/ageData.length
    return `Average age of students : ${averageAge.toFixed(2)}`
}

console.log(ageCalculatin(students))