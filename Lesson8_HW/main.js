// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let usersList = [];
let user1 = new User(11, 'Pasha', 'Ivanov', 'ivanovp@gmail.com', '06710020030');
let user2 = new User(20, 'Max', 'Pavlov', 'pavlov@i.ua', '06710120030');
let user3 = new User(32, 'Anna', 'Semenovich', 'ivanovp@gmail.com', '06710020030');
let user4 = new User(4, 'Olya', 'Grutch', 'grutch@i.ua', '06710120030');
let user5 = new User(15, 'Misha', 'Mishin', 'mishin@gmail.com', '06710020030');
let user6 = new User(6, 'Kolya', 'Kolyanov', 'kola@i.ua', '06710120030');
let user7 = new User(17, 'Vlad', 'Sodel', 'sodel@gmail.com', '06710020030');
let user8 = new User(8, 'Penis', 'Dushilin', 'pdushniy@i.ua', '06710120030');
let user9 = new User(29, 'Valera', 'Val', 'val@gmail.com', '06710020030');
let user10 = new User(10, 'Oleg', 'Sentsov', 'sentsov@i.ua', '06710120030');

usersList.push(user1,user2,user3, user4,user5,user6,user7,user8,user9,user10);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let pairUsers = usersList.filter(user => user.id % 2 === 0);
console.log(pairUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
usersList.sort(function (a, b) {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    if (a.id === b.id) {
        return 0;
    }
})
console.log(usersList);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
let client1 = new Client(20, 'Client1', 'Surname1', 'client1@gmail.com', '123456789', ['item1', 'item2', 'item3']);
let client2 = new Client(25, 'Client2', 'Surname2', 'client2@gmail.com', '123456789', ['item1', 'item2', 'item3']);
let client3 = new Client(26, 'Client3', 'Surname3', 'client3@gmail.com', '123456789', ['item1', 'item2', 'item3','item4']);
let client4 = new Client(82, 'Client4', 'Surname4', 'client4@gmail.com', '123456789', ['item1', 'item2', 'item3']);
let client5 = new Client(20, 'Client5', 'Surname5', 'client5@gmail.com', '123456789', ['item1', 'item2', 'item3']);
let client6 = new Client(64, 'Client6', 'Surname6', 'client6@gmail.com', '123456789', ['item1', 'item2', 'item3','item4','item5']);
let client7 = new Client(33, 'Client7', 'Surname7', 'client7@gmail.com', '123456789', ['item1', 'item2', 'item3']);
let client8 = new Client(64, 'Client8', 'Surname8', 'client8@gmail.com', '123456789', ['item1', 'item2', 'item3']);
let client9 = new Client(41, 'Client9', 'Surname9', 'client9@gmail.com', '123456789', ['item1', 'item2', 'item3']);
let client10 = new Client(43, 'Client10', 'Surname10', 'client10@gmail.com', '123456789', ['item1', 'item2', 'item3']);
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort(function (a, b) {
    if (a.order.length < b.order.length) {
        return -1;
    }
    if (a.order.length > b.order.length) {
        return 1;
    }
    if (a.order.length === b.order.length) {
        return 0;
    }
})
console.log(clients);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,manufacturer,year,maxSpeed,engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        return (`Їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    this.info = function () {
        return (`Виробник - ${manufacturer}, 
                 Модель - ${model},
                 Рік виробництва - ${year},
                 Об'єм двигуна - ${engine},
                 Максимальна швидкість - ${maxSpeed}`
        )
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    this.addDriver = function (newDriver) {
        this.driver = newDriver;
    }
}

let newCar = new Car('Rav4', 'Toyota', 2021, 180, 2400);
console.log(newCar.drive());
console.log(newCar.info());
newCar.increaseMaxSpeed(50);
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CreateCar {
    constructor(model,manufacturer,year,maxSpeed,engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive() {
        return (`Їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    info() {
        return (`Виробник - ${manufacturer}, 
                 Модель - ${model},
                 Рік виробництва - ${year},
                 Об'єм двигуна - ${engine},
                 Максимальна швидкість - ${maxSpeed}`
        )
    };
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newYear) {
        this.year = newYear;
    }
    addDriver(newDriver) {
        this.driver = newDriver;
    }
}
let newCar1 = new CreateCar('Rav4', 'Toyota', 2021, 180, 2400);
newCar1

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let baby1 = new Cinderella('Anna', 22, 45);
let baby2 = new Cinderella('Alina', 35, 38);
let baby3 = new Cinderella('Valeria', 19, 41);
let babys = [];
babys.push(baby1, baby2, baby3);

class Prince {
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let prince1 = new Prince('Stas', 55, 45);

for (let baby of babys) {
    if (baby.footSize === prince1.shoeSize) {
        let myPrinces = baby;
        console.log(baby);
    }
}
let findCinderella = babys.find(value => value.footSize === prince1.shoeSize);
console.log(findCinderella);