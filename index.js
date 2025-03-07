function checkNumberFormat(telNumber) {
let unknownChecker = true;
let orderedNumbersChecker = true;
let unknown = {
    0: "+",
    1: "9",
    2: "9",
    3: "8",
    4: "(",
    7: ")",
    8: "-",
    12: "-",
    15: "-"
}


let orderedNumbers = {
    code: Number(telNumber.slice(5, 7)),
    first: Number(telNumber.slice(9, 12)),
    second: Number(telNumber.slice(13, 15)),
    third: Number(telNumber.slice(16)),
}

console.log(orderedNumbers);

for(let num in orderedNumbers) {
    if(typeof orderedNumbers[num] !== "number") {
        orderedNumbersChecker = false
    }
}

return unknownChecker && orderedNumbersChecker

}

console.log(checkNumberFormat("+998(90)-456-45-32"));
