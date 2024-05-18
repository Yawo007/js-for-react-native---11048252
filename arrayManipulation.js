function formatArrayStrings(stringsArray, numbersArray) {
    let formattedStrings = [];
    for (let i = 0; i < stringsArray.length; i++) {
        let str = stringsArray[i];
        let num = numbersArray[i];

        if (num % 2 === 0) { // Even number
            formattedStrings.push(str.toUpperCase());
        } else { // Odd number
            formattedStrings.push(str.toLowerCase());
        }
    }
    return formattedStrings;
}
