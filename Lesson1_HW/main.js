let a = 'hello ';
let b = 'owu.';
let c = 'com.';
let d = 'ua';
console.log(a + b + c + d);

let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 16;
let num7 = true;
let num8 = false;
console.log(num1, num2, num3, num4, num5, num6, num7, num8);

let firstN = 'Yevhenii';
let middleN = 'Mikolayovich';
let lastN = 'Panasiuk';
console.log(`${lastN} ${firstN} ${middleN}`);

let aa = 100;
console.log(typeof aa);

let bb = '100';
console.log(typeof bb);

let cc = true;
console.log(typeof cc);


let firstName = prompt('Як вас звати?', 'Yevhenii');
let middleName = prompt('По батькові?', 'Mikolayovich');
let age = prompt('Скільки вам років?', '43 years old');
let result = (`${firstName} ${middleName} ${age}`);
console.log(result);
alert('Добрий вечір, ' +result);
