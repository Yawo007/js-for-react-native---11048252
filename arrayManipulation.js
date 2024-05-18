function processArray(arr) {
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) { // If the number is Even
            result.push(num ** 2);
        } else { // If the number is odd
            result.push(num * 3);
        }
    }
    return result;
}