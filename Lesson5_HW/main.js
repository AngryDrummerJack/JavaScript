// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
    return a * b;
}
let c = rectangle(10, 20);
console.log(c);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;
function circle(r) {
    let resultS = PI * r;
    return resultS;
}
console.log(circle(6));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(height, radius) {
    let resultC = 2 * PI * radius*(height + radius);
    return resultC;
}
console.log(cylinder(4, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
function printArr(arr) {
    for (let item of arr) {
        console.log(item);
    }
}
printArr([10, 45, 'beer', true]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pPrinter(tag,text) {
    document.write(`<${tag}>${text}</${tag}>`);
}
pPrinter('r', 'Something about');
pPrinter('h2','myself')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(text) {
    document.write(`<${'ul'}>
      <${'li'}>${text}</${'li'}>
      <${'li'}>${text}</${'li'}>
      <${'li'}>${text}</${'li'}>
</${'ul'}> 
    `)
}
ulCreator('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liPusher(text,liNumber) {
    document.write(`<ul>`)
    for (let i = 0; i < liNumber; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
liPusher('I cant believe I did it', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function elementsList(...list) {
    document.write(`<ul>`)
    for (let i = 0; i < list.length; i++) {
        document.write(`<li>${list[i]}</li>`)
    }
    document.write(`</ul>`)
}
elementsList(10, true, 'order', 152, 'test');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function printList(arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item.id} ${item.name} ${item.age}</li>`);
    }
    document.write(`</ul>`)
}
let users = [
    {id:1, name: 'max', age: 31 },
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5,name: 'max', age: 30},
];
printList(users);

// - створити функцію яка повертає найменьше число з масиву
function minNumber(...arr) {
    let result = Math.min(...arr);
    console.log(result);
    return result;
}
minNumber(10, 15, 2, -2);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13a
function arraySum(...arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    } console.log(sum);
    return sum;
}
arraySum(2,3,5,45,14,8);
