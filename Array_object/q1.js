const shoppingCart = ['Milk', 'Coffee', 'Tea',"Honey"]

function addItemsStart(data){
if(shoppingCart.includes(data)){
    console.log("Data is already exists")
}
else
{
    shoppingCart.unshift(data)
    console.log("After Adding Item:  "+shoppingCart)
}
}


function addItemsEnd(data){
    if(shoppingCart.includes(data)){
        console.log("Data is already exists")
    }
    else
    {
        shoppingCart.push(data)
        console.log("After Adding Item at end :  "+shoppingCart) 
    }
}

function removeData(data){
    if(data === 'allergic'){
        if(shoppingCart.includes('Honey'))
        {
         let i = shoppingCart.indexOf('Honey')
         shoppingCart.splice(i,1)
         console.log(`After Removing Data :${shoppingCart}`)
        }
    }
    else
    {
        console.log("You are not allerigc")
       
    }
}


function modifyData(data){
    if(shoppingCart.includes(data)){
        let i = shoppingCart.indexOf('Tea')
        shoppingCart[i] = 'Green Tea'
        console.log(`After Modify Data : ${shoppingCart}`)
    }
    else{
        console.log("Data not exists")
    }
}

addItemsEnd('Sugar')
addItemsStart("Meat")
removeData("allergic")
modifyData('Tea')