// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr[0] = "something";
arr[1] = 123;
arr[2] = true;
console.log(arr);
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < arr2.length) {
    let arrlog = arr2[i];
    console.log(arrlog);
    i++;
    if (arrlog % 2 !== 0) {
        console.log(arrlog);
    }
    else if (arrlog % 2 === 0) {
        console.log(arrlog);
    }
}
for (let i = arr2.length-1; i >= 0; i--) {
    let arr2Element = arr2[i];
    console.log(arr2Element);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr = [];
arr.push(10, 45, 96, 4, 18, true, false, 'shit', 'ok', 'bullshit', 4, 'simple');
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    console.log(arrElement);
}
for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    if (typeof arrElement === 'number') {
        console.log(arrElement);
    }else if (typeof arrElement === 'string') {
        console.log(arrElement);
    }else if (typeof arrElement === 'boolean') {
        console.log(arrElement);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let arr2 = [];
arr2[0] = 'first';
arr2[1] = 'second';
arr2[2] = 'third';
arr2[3] = 14;
arr2[4] = 50;
arr2[5] = 22;
arr2[6] = 'fifth';
arr2[7] = true;
arr2[8] = false;
arr2[9] = 'ninth';
console.log(arr2);
for (let i = 0; i < 10; i+=2) {
    const arr2Element = arr2[i];
    console.log(arr2Element);
}
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
let booksArray = [];
booksArray[0] = {
    name: 'Carrie',
    pages: 199,
    author: 'Stephen King',
    genre: 'science fiction, horror'
}
booksArray[1] = {
    name: 'Salems Lot',
    pages: 439,
    author: 'Stephen King',
    genre: 'horror'
}
booksArray[2] = {
    name: 'The Shining',
    pages: 447,
    author: 'Stephen King',
    genre: 'horror'
}
let nameLenght = 0;
let longest;
for (let i = 0; i < booksArray.length; i++) {
    const book = booksArray[i];
    if (book.name.length > nameLenght) {
        nameLenght = book.name.length;
        longest = book.name;
    }
}
console.log(longest);