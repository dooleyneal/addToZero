let sumZero = false
let numbers = [1, 4, 11, 2, 37, -4]
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1 ; j < numbers.length; j++) {
        //console.log(numbers[i] + numbers[j])
        if (numbers[i] + numbers[j] === 0){
            sumZero = true
            break;
        } 
    } 
    if (sumZero === true) {
        break;
    }
}
console.log(sumZero)