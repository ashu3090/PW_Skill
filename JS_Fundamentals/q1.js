function outer(var1, var2){
    let mydata = 45
    function inner(){
        console.log(mydata)
        console.log(var1,var2)
    }

    inner()
}

outer(10,20)