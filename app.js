// pipe funksiyasi
const pipe = (f1, f2, f3) => (input) => f3(f2(f1(input)));

// Matnni bosh harflarga o'zgartiradigan funksiya
const toUpperCase = (str) => str.toUpperCase();

// Ortiqcha bo'shliqlarni olib tashlaydigan funksiya
const trim = (str) => str.trim(); 

// Matn uzunligini qaytaradigan funksiya
const getLength = (str) => str.length;

// pipe funksiyasini ishlatish
const transformText = pipe(toUpperCase, trim, getLength);


const inputText = "hello world";
const result = transformText(inputText);
console.log(result); 


// 2 - MASALA 

// pipe funksiyasi
const pipe2 = (f1, f2, f3) => (input) => f3(f2(f1(input)));

// Har bir sonni kvadratga oshiradigan funksiya
const squareNumbers = (arr) => arr.map(num => num * num);

// Barcha sonlarning yig‘indisini hisoblaydigan funksiya
const sumNumbers = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Yig‘indining ildizini oladigan funksiya
const getSquareRoot = (num) => Math.sqrt(num);

// pipe funksiyasini ishlatish
const processNumbers = pipe2(squareNumbers, sumNumbers, getSquareRoot);

const inputNumbers = [2, 4, 6, 8];
const result2 = processNumbers(inputNumbers);

console.log(result2); 

// 3 - MASALA

// pipe funksiyasi
const flow = (step1, step2, step3) => (data) => step3(step2(step1(data)));

// yoshnı 5 yilga oshiradigan funksiya
const increaseAge = (person) => ({ ...person, age: person.age + 5 });

// ish haqini 10% ga oshiradigan funksiya
const increaseSalary = (person) => ({ ...person, salary: person.salary * 1.1 });

// malumotlarni string formatda birlashtirish
const formatUserInfo = (person) => `${person.name}: ${person.age}, Salary: ${person.salary}`;

// pipe funksiyasini ishlatish
const processUser = flow(increaseAge, increaseSalary, formatUserInfo);

const userInfo = { name: "John", age: 25, salary: 5000 };
const output = processUser(userInfo);

console.log(output); 

// 4 - MASALA

// pipe funksiyasi
const process = (step1, step2, step3) => (input) => step3(step2(step1(input)));

// harf va raqamlarni ajratish
const extractNumbers = (str) => str.split('').filter(char => !isNaN(char)).map(Number);

// raqamlarni yigindisini hisoblash
const sumNumbers2 = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

// pipe funksiyasini ishlatish
const calculateSum = process(extractNumbers, sumNumbers, (x) => x);

const inputString = "a1b2c3d4e5";
const result3 = calculateSum(inputString);

console.log(result3); 


// 5 - MASALA 

// pipe funksiyasi
const execute = (fn1, fn2, fn3) => (input) => fn3(fn2(fn1(input)));

// takroriy elementlarni olib tashlash
const removeDuplicates = (arr) => [...new Set(arr)];

// faqat toq sonlarni ajratib olish
const filterOdds = (arr) => arr.filter(num => num % 2 !== 0);

// eng katta sonni aniqlash
const findMax = (arr) => Math.max(...arr);

// pipe funksiyasini ishlatish
const getMaxOdd = execute(removeDuplicates, filterOdds, findMax);

const numbers = [1, 2, 2, 3, 4, 4, 5];
const result4 = getMaxOdd(numbers);

console.log(result4);

// 6 - MASALA 

// pipe funksiyasi
const chainFunctions = (stepOne, stepTwo, stepThree) => (data) => stepThree(stepTwo(stepOne(data)));

// par bir sonni 2 ga ko'paytirish
const doubleValues = (array) => array.map(value => value * 2);

// yigindisini olish
const calculateSum2 = (array) => array.reduce((total, value) => total + value, 0);

// oxirgi sonning kvadratini qaytarish
const squareResult = (number) => number * number;

// pipe funksiyasini ishlatish
const transformNumbers = chainFunctions(doubleValues, calculateSum, squareResult);

const inputNumbers2 = [1, 2, 3, 4, 5];
const finalOutput = transformNumbers(inputNumbers);

console.log(finalOutput); 