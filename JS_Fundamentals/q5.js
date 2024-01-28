function calculate_deliverytime(packagetype){
    switch(packagetype){
        case 'standard':
            console.log("Delivery Time 3-5 days")
            break
        case 'express':
            console.log("Delivery Time 1-2 days")
            break
        case 'overnight':
            console.log('Next Day')
            break

        default:
            console.log("Input correct data")
    }
}

calculate_deliverytime('overnight')