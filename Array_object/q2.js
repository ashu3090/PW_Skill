const ages = [19, 22, 19, 24, 20, 25, 2, 24, 25, 24,45]

const agesSort = ages.sort()
const min = agesSort[0]
const  max = agesSort[(agesSort.length-1)]

console.log(`Minimum Element of array ${agesSort[0]} and the Max Element of array ${agesSort[(agesSort.length-1)]}`)


// Calculating Median

function calcMedian(data){

    const agesSort = data.sort()
    const l = agesSort.length

    if(l%2!=0)
        return agesSort[Math.floor(l/2)]
    else
        return (agesSort[Math.floor((l - 1) / 2)] + agesSort[Math.floor(l / 2)]) / 2.0;

}

console.log(`Median of data: ${calcMedian(ages)}`)

// Calculate Average Age

function calAverage(data){
    let total = data.reduce((acc,d)=> acc+d,0)
    let average = total/(data.length)
    return average.toFixed(2)
}

console.log(`Average of ages: ${calAverage(ages)}`)

function ageRange(max, min)
{
    return (max-min)
}

console.log(`Range of ages ${ageRange(max,min)}`)