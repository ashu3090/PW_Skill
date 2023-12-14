((number)=>{
    let i ,fact=1
    if(number > 0)
    {
        for(i=1;i<=number;i++)
        {
            fact =fact*i
        }
        console.log(`Factorial of number ${number} is ${fact}`)
    }
    else{
        console.log("Enter number bigger than 0")
    }
} )(3)