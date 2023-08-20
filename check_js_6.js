function numbers(numb1, numb2) {
    if (numb1 < numb2) {
        console.log(-1)
    }
    else if (numb1 > numb2) {
        console.log(1)
    }
    else {
        console.log(0)
    }
}
let numb1 = 44
let numb2 = 32
numbers(numb1, numb2)

function factorial(number) {
    let newFactorial = 1;
    for (let i = 1; i <= number; i ++) {
        newFactorial *= i;
    }
    return newFactorial
}
let number = 5
console.log(factorial(number));

let a = 1
let b = 4
let c = 9
function combineDigits(a, b, c) {
    return Number(`${a}${b}${c}`)
}
let combNumb = combineDigits(a, b, c)
console.log(combNumb)

let l = +prompt("Enter the length");
let w = +prompt("Enter the width");

function calculateArea(length, width) {
    let area = 0;
    if (typeof width === undefined) {
        area = length * 4;
    } else {
        area = length * width;
    }
    return area;
}

let result = calculateArea(l, w);
console.log(result);


function isPerfectNumber(number) {
    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }
    return sumOfDivisors === number;
}

let number1 = 28;
let isPerfect = isPerfectNumber(number1);
console.log(isPerfect);


function findPerfectNumbers(min, max) {
    for (let number = min; number <= max; number++) {
        if (isPerfectNumber(number)) {
            console.log(number);
        }
    }
}

let min = 1;
let max = 10000;
findPerfectNumbers(min, max);


let hours = +prompt("Введите часы:");
let minutes = +prompt("Введите минуты:");
let seconds = +prompt("Введите секунды:");
function formatTime(hours, minutes, seconds) {
    if (minutes === undefined) {
      minutes = 0;
    } else {
      minutes = String(minutes).padStart(2, "0");
    }
    if (seconds === undefined) {
      seconds = 0;
    } else {
      seconds = String(seconds).padStart(2, "0");
    }
    return hours + ":" + minutes + ":" + seconds;
  }
let formattedTime = formatTime(hours, minutes, seconds);
alert(`Время: ${formattedTime}`);

function timeToSeconds(hours, minutes, seconds) {
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    return totalSeconds;
}

let result4 = timeToSeconds(hours, minutes, seconds);
console.log(`Всего секунд: ${result4}`);
