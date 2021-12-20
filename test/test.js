function ll (year) {
    return Math.floor((year-1)/ 100) + 1; 
}

// console.log("Century : ",ll(2001))
function solution(inputArray) {
    var max = inputArray[0] * inputArray[1]
    
    for(let i = 0; i < inputArray.length; i++)
    {
        if( (inputArray[i] * inputArray[i+1]) > max )
        {
            max = inputArray[i] * inputArray[i+1]
        }
    }
    return max;
}


console.log(solution([3, 6, -2, -5, 7, 3]))