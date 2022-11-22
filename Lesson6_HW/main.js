// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string = 'hello world';
console.log(string.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'lorem ipsum';
console.log(a.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let b = 'JAVASCRIPT IS COOL';
console.log(b.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let c = ' dirty string   ';
console.log(c.length);
let newC = c.trim();
console.log(newC.length);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let arr = str.split(' ');
console.log(arr);
//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringArray = numArray.map(function (item) {
    return `${item}`;
})
console.log(stringArray);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let numberZ = [11,21,3];
let sortNumz = (direction, array) => {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
    }else if (direction === 'descending') {
        array.sort((a, b) => b - a);
    }
    return array;
}
console.log(sortNumz('ascending', numberZ));
console.log(sortNumz('descending', numberZ));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortedCourses = coursesAndDurationArray.sort(function (a, b) {
    return a.monthDuration - b.monthDuration;
});
console.log(sortedCourses);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter((courses) => courses.monthDuration > 5);
console.log(filteredCourses);

let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];

// - знайти піковий туз
let findAce = deck.filter((card) => card.cardSuit === 'Clubs' && card.value === 'Ace');
console.log(findAce);
// - всі шістки
let findSix = deck.filter((card) => card.value === 6);
console.log(findSix);
// - всі червоні карти
let findReds = deck.filter((card) => card.color === 'Red');
console.log(findReds);
// - всі буби
let findDiamonds = deck.filter((card) => card.cardSuit === 'Diamonds');
console.log(findDiamonds);
// - всі трефи від 9 та більше
let findHeavyCards = deck.filter((card) => card.cardSuit === 'Clubs' && card.value >= '9');
console.log(findHeavyCards);
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = deck.reduce((accum, card) => {
        if (card.cardSuit === 'Spade') {
            accum.spades.push(card);
        } else if (card.cardSuit === 'Diamonds') {
            accum.diamonds.push(card);
        } else if (card.cardSuit === 'Hearts') {
            accum.hearts.push(card);
        } else if (card.cardSuit === 'Clubs') {
            accum.clubs.push(card);
        }
        return accum;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });
console.log(reduce);