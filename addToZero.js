let sumZero = false
let numbers =[0, 1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1 ; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === 0){
            sumZero = true
        }
    }
}
console.log(sumZero)