
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 3;
if (x !== 0) {
    console.log('correct')
}else
{console.log('incorrect');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// число
// (в першу, другу, третю или четверту частину години).
let time = new Date().getMinutes();
if (time >=0 && time < 15) {
    console.log('firs quoter');
}else if (time >= 15 && time < 30) {
    console.log('second quoter');
}else if(time >= 30 && time <45) {
    console.log('third quoter');
}else if(time >=45 && time <=59) {
    console.log('forth quoter');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
let day = new Date().getDate();
if (day >=1 && day <= 10) {
    console.log('firs decade');
}else if (day > 10 && day <= 20) {
    console.log('second decade');
}else if(day > 20 && day <=31) {
    console.log('third decade');
}
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayWeek = new Date().getDay()
switch (dayWeek) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Enter the correct number')
}
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let numberA = +prompt('Enter the first number');
let numberB = +prompt('Enter the second number');
if (numberA > numberB) {
    document.write(numberA);
}else if (numberA < numberB) {
    document.write(numberB);
}else if (numberA === numberB) {
    document.write('The numbers are equal');
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення
//     змінної х являється falsy (хибноподыбне, тобто кастується до false)
let xxx = '';
if (xxx){
    console.log('true');
}else {
    console.log('default');
}
