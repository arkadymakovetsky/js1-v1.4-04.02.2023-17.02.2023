// Задание 1
/* 
Создайте конструктор function Card(from, to){...}, создающий объекты карточки со свойствами from, to 
и методом show(), возвращающим  свойства отдельного объекта в виде строки «from,to», где на месте
названий свойств будут их значения.
Создайте переменную c1 с городами Екатеринбург и Москва.
*/
console.log('------ Задание 1 ------');
function Card(from, to) {
    this.from = from;
    this.to = to;
}
Card.prototype.show = function () {
    return `${this.from} --> ${this.to}`;
}

let c1 = new Card('Екатеринбург', 'Москва')
console.log(c1.show())


// Задание 2
/*
Опишите класс Human: для создания объектов со свойствами name, age и height конструктор класса 
должен принимать одноимённые аргументы.
Создайте массив humans из десяти объектов:
«Коля», 23, 180,
«Даша», 19, 170,
«Ваня», 18, 192,
«Петя», 45, 178,
«Вася», 34, 197,
«Джони», 40, 168,
«Катя», 37, 160,
«Петя», 29, 200,
«Соня», 21, 172,
«Женя», 25, 175
Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»), 
метод геттер firstname (он должен возвращать свойство name объекта)
*/
console.log('------ Задание 2 ------');
class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstName() {
        return this.name;
    }
    toString() {
        return this.getInfo();
    }
}

let humans = [
    new Human('Коля', 23, 180),
    new Human('Даша', 19, 170),
    new Human('Ваня', 18, 192),
    new Human('Петя', 45, 178),
    new Human('Вася', 34, 197),
    new Human('Джони', 40, 168),
    new Human('Катя', 37, 160),
    new Human('Петя', 29, 200),
    new Human('Соня', 21, 172),
    new Human('Женя', 25, 175),
]
for (let i in humans) {
    console.log(humans[i].firstName, ':', humans[i].getInfo())
}

console.log('--forEach--');
humans.forEach(item => {
    console.log(item.firstName, ':', item.getInfo())
})


// Задание 3 (*) 
/*
Напишите функции сортировки sortByName и sortByHeight, которые смогут отсортировать
массив по именам (в алфавитном порядке) или росту (по убыванию роста). 
Вызовите только функцию сортировки по росту
*/
console.log('------ Задание 3 (*) ------');
function sortByName(a, b) {
    return (a.name > b.name ? 1 : -1)
}

function sortByHeight(a, b) {
    return (a.height < b.height ? 1 : -1)
}

console.table(humans.sort(sortByHeight));
// console.table(humans.sort((a, b) => a.name > b.name ? 1 : -1))
// console.table(humans.sort((a, b) => a.height < b.height ? 1 : -1))


// Задание 4
/* 
Получите в переменную dt1 дату соответствующую 0:00, 1 января 2045 года,
при помощи конструктора Date()
*/
console.log('------ Задание 4 ------');
let dt1 = new Date(2045, 0);
console.log(dt1);


// Задание 5
/* 
В переменную dt2 найдите кол-во секунд, 
которое прошло с 1 января 1970 года по 
текущий момент.
*/
console.log('------ Задание 5 ------');
let dt2 = new Date() - new Date(1970, 0);
console.log(Math.round(dt2 / 1000));


// Задание 6 (*)
/* 
Напишите функцию getDays, которая принимает 
год и месяц (пусть январь будет — 1, 
февраль — 2 и т.д.), а возвращает количество
дней в месяце
*/
console.log('------ Задание 6 (*) ------');
function getDays(year, month) {
    return (new Date(year, month, 0)).getDate()
}
console.log(getDays(2024, 2)) // фев 2024 --> 29
console.log(getDays(2023, 5)) // май 2023 --> 31
console.log(getDays(2023, 7)) // июль 2023 --> 31


// Задание 7 (*)
/* 
Напишите функцию calendar(year,month), 
которая принимает два параметра — номер
месяца и год, а возвращает разметку
календаря HTML на указанный месяц.
*/
console.log('------ Задание 7 (*) ------');
function calendar(year, month) {
    const ROWS = 6, COLS = 7;
    const WD = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const MN = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

    let dt = new Date(year, month - 1);
    // console.log(''.charAt(0).toLocaleUpperCase()); // !пустая строка!

    let days = (new Date(year, month, 0)).getDate(); // количество дней в месяце
    let offset = dt.getDay(); // день недели первого числа месяца
    let k = -offset + 1;

    let table = `<table><caption>${MN[dt.getMonth()][0].toUpperCase()}${MN[dt.getMonth()].slice(1)} ${dt.getFullYear()}</caption>\n`;

    table += '\t<tr>\n';
    for (let j = 0; j < COLS; j++) {
        table += '\t\t<td>' + WD[j] + '\n';
    }

    for (let i = 0; i < ROWS; i++) {
        table += '\t<tr>\n';
        for (let j = 0; j < COLS; j++) {
            k++;
            if (k > 0 && k <= days) {
                table += '\t\t<td>' + k + '\n';
            } else {
                table += '\t\t<td>' + '\n';
            }
        }
    }
    table += '</table>';
    return table;
}

let calendarHTML = calendar(2023, 7);
console.log(calendarHTML);
document.body.innerHTML = calendarHTML;


// Задание 8 (*)
/* 
Через прототип расширьте встроенный объект
Number методом isOdd(), который возвращает
true, если число нечетное.
*/
console.log('------ Задание 8 (*) ------');
Number.prototype.isOdd = function () {
    return !!(this.valueOf()%2);
}

console.log((1).isOdd()); // true
console.log((2).isOdd()); // false
console.log((17).isOdd()); // true
console.log((22).isOdd()); // false


// Задание 9 (*)
/* 
Создайте конструктор, который поддерживает
на своих методах цепочечный синтаксис.
*/
console.log('------ Задание 9 (*) ------');


// Задание 10 (*)
/*
Представьте, что разрабатываете игру. Создайте 
конструктор Unit(), создающий объекты с 
координатами x, y. При помощи прототипного 
наследования расширьте Unit(), создав новый 
конструктор Fighter() с свойством power. 
Примечание: не забудьте о геттерах и сеттерах.
*/
console.log('------ Задание 10 (*) ------');
