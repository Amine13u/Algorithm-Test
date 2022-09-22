"use strict";
let binaryString = process.argv[2].replace(/,/g, "");
let zeroIndex = -1;
let countOfOnes = 0;
for (let index = 0; index < binaryString.length; index++) {
    if (binaryString[index] === "0") {
        let newString = binaryString.substring(0, index) +
            "1" +
            binaryString.substring(index + 1);
        // console.log(newString);
        let currentCount = 0;
        for (let count = 1; count < newString.length - 1; count++) {
            if (newString.includes("1".repeat(count))) {
                currentCount = count;
            }
        }
        if (currentCount >= countOfOnes) {
            countOfOnes = currentCount;
            zeroIndex = index;
        }
    }
}
console.log(zeroIndex);
