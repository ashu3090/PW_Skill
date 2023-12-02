 const num1 = 10
 const num2 = 25
 let result =""

for( let i=num1 ;i<=num2;i++ )
 {
 if(i<num2)
     result = result + i + ','
 else
    result = result + i 
 }

 console.log( `${result}`)