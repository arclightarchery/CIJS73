function adjacentElementsProduct(inputArray) {
    let biggestNumberPlaceholder = -Infinity;
    let product
    for(let i=0; i<inputArray.length; i+=2) {
        product = inputArray[i]*(inputArray[i+1] || 1)
        if(product > biggestNumberPlaceholder) {
            biggestNumberPlaceholder = product
        }
    }
    return biggestNumberPlaceholder.toString()
}

adjacentElementsProduct([2, 3, -5, -2, 4]);

function alternatingSums(a) {
    let sumArray = [];
    let firstTeam = 0
    let secondTeam = 0
    a.map((number, index) => {
        if(index%2===0) {
            firstTeam +=number;
        } else if(index%2===1) {
            secondTeam +=number;
        }
    })
    sumArray.push(firstTeam, secondTeam)
    return sumArray
}

alternatingSums([60,40,55,75,64])


