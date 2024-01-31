const student={
    name:"Alice",
    age:22,
    major:"Computer Application",
    GPA:3.8,
    isEnrolled:true,
}

function studentRecord(data){
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
           console.log(`Property:${key}, Value:${data[key]}`)
            
        }
    }
}


studentRecord(student)