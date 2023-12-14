let tax,income
function calculateTax(income)
{
    this.income =income
    if(income>=150000 && income <=250000)
    {
        tax = income *.10

    }

    else if(income>250000 && income <=450000)
    {
        tax = income *.20
    }

    else if(income>450000 && income <=700000)
    {
        tax = income *.50
    }
    else{
        tax = income *.80
    }

   console.log(`Income is Rs. ${this.income}, you have to pay Rs.${tax}`)
}

calculateTax(350000)
calculateTax(500000)

