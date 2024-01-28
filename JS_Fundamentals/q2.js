function check(regx,myString){

    if(regx.test(myString))
        return true
    else
        return false
}

const regx = new RegExp(/\w\d/g)

console.log(check(regx,"sdfsd"))