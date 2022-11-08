// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [100500, true, 'rock', 'metal', 'jazz', 'hip-hop', 'new-metal', 'pop', 500100, 'rock&roll'];
arr[arr.length] = 'Serduchka heavy pop';
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: 'End of Days',
    pageCount: 800,
    genre: 'fiction',
    authors:[{name:'Vasya', age:45},{name:'Sasha', age:64}]
}
console.log(book1);
let book2 = {
    title:'Astronomy pocketbook',
    pageCount:250,
    genre:'Science',
    authors:[{name:'Alex', age:80},{name:'Anna', age:36}]
}
let book3 = {
    title:'Time machine',
    pageCount:650,
    genre:'science fiction',
    authors:[{name:'Oleg', age:45},{name:'Olga', age:42}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'Alex',userName:'User1',password:'alex123'},
    {name:'Sasha',userName: 'User2',password: 'sasha123'},
    {name:'Vasya',userName: 'User3',password:'vasya123'},
    {name: 'Olga',userName: 'User4',password:'olga123'},
    {name: 'Anna',userName: 'User5',password: 'anna123'},
    {name: 'Pasha',userName: 'User6',password: 'pasha123'},
    {name: 'Oleg',userName: 'User7',password: 'oleg123'},
    {name: 'Dima',userName: 'User8',password: 'dima123'},
    {name: 'Stas',userName: 'User9',password: 'stasik123'},
    {name: 'Luba',userName: 'User10',password: 'luba123'},
]
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     document.write(`<h3>${user.password}</h3>`);
// }
// ============= cicles test==================
let products = [
    {productName: 'Mouse 1', productPrice: 456, img: 'https://content.rozetka.com.ua/goods/images/big/285467015.jpg'},
    {productName: 'Mouse 2', productPrice: 862, img: 'https://content1.rozetka.com.ua/goods/images/big/263058674.jpg'},
    {productName: 'Mouse3', productPrice: 632, img: 'https://content1.rozetka.com.ua/goods/images/big/297261129.jpg'}
];
for (let r = 0; r < products.length; r++) {
    let prod = products[r];
    document.write(`<div class="target"><h2>${prod.productName}  ${prod.productPrice} UAH</h2>        
    <img src="${prod.img}" alt="no image">
</div>`)
}
