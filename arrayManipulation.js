function formatArrayStrings(stringsArray, numbersArray) {
    let formattedStrings = [];
    for (let i = 0; i < stringsArray.length; i++) {
        let str = stringsArray[i];
        let num = numbersArray[i];

        if (num % 2 === 0) {  // If the number is Even
            formattedStrings.push(str.toUpperCase());
        } else { // If the number is odd
            formattedStrings.push(str.toLowerCase());
        }
    }
    return formattedStrings;
}
