// Задание 1
/* 
Определите переменные str, num, flag и txt
со значениями «Привет», 123, true, «true».
При помощи оператора определения типа убедитесь,
что переменных принадлежат типам: string, number, boolean.
*/
let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true';

console.log('-----------Задание 1 --------------');
console.log(typeof str);  // string
console.log(typeof num);  // number
console.log(typeof flag); // boolean
console.log(typeof txt);  // string


// Задание 2
/* 
Создайте переменные a1, a2, a3, a4, a5. При помощи
математических операторов (сложение, вычитание
и т.д.) найдите значения выражений: 5 + 3, 5 - 3, 5 * 3, 5 / 3,
поместив результат каждого выражения в соответствующую
переменную, например, let a1 = 5 + 3.
*/
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
console.log('-----------Задание 2 --------------');
console.log(a1, a2, a3, a4)


// Задание 3
/* Создайте переменные a6, a7, a8, a9, a10. 
Поместите в них результат выражений: 
5 % 3, 3 % 5, 5 + '3','5' - 3, 75 + 'кг'
*/
let a6 = 5 % 3; // 2
let a7 = 3 % 5; // 3
let a8 = 5 + '3'; // '53'
let a9 = '5' - 3; // 2
let a10 = 75 + 'кг'; // '75кг'
console.log('-----------Задание 3 --------------');
console.log(a6, a7, a8, a9, a10)


// Задание 4
/* 
Напишите скрипт, который находит площадь 
прямоугольника высота 23см. (в числовую переменную height),
шириной 10см (в числовую переменную width), 
значение площади должно хранится в числовой переменной s.
*/
let height = 23;
let width = 10;
let s = width * height;
console.log('-----------Задание 4 --------------');
console.log(`Площадь: ${s}см2`);


// Задание 5
/*
Напиши скрипт, который находит объем цилиндра высотой 10м
(переменная heightC) и диаметром основания 4м (dC),
результат поместите в переменную v.
*/
let heightC = 10;
let dC = 4;
let v = heightC * Math.PI * (dC / 2)**2;
console.log('-----------Задание 5 --------------');
console.log(`Объем цилиндра: ${v}м3`);


// Задание 6
/*
У прямоугольного треугольника две стороны n (со значением 3)
и m (со значением 4). Найдите гипотенузу k по теореме 
Пифагора (нужно использовать функцию Math.pow(число, степень) 
или оператор возведения в степень ** ).
*/
let n = 3;
let m = 4;
let k = (n**2 + m**2)**0.5;
console.log('-----------Задание 6 --------------');
console.log(`Гипотенуза: ${k}`);


// Задание 7 (*)
/* 
Найди двенадцатый элемент (let nFib = 12, el12;) последовательности Леонардо Пизанского (числа Фибоначчи)
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, …
(нужно использовать функцию Math.pow(число, степень)).
Не забудьте округлить полученное число до целого — Math.round(число).
*/
let nFib = 12;
let Phi = (1 + 5**.5) / 2; // золотое сечение
let el12 = Math.round((Phi**nFib - (-Phi)**-nFib ) / (2 * Phi - 1))
console.log('-----------Задание 7 (*)-----------');
console.log(`12-й элемент: ${el12}`);


// Задание 8 (*)
/*
Даны размер ипотечного кредита (S — 2 млн.руб),
процентная ставка (p  — 10%), кол-во лет (years — 5).
Найти переплату по кредиту, значение переплаты должно
содержаться в переменной perepl.
*/
let S = 2_000_000; // Размер ипотечного кредита
let p = 10; // Ставка в процентах
let years = 5; // Cрок кредита (кол-во лет)

let months = years * 12; // Cрок кредита (кол-во месяцев)
let koeff = p / 12 / 100; // Доли за месяц

let A = (S * koeff) / (1 - (1 + koeff) ** -months); // Ежемесячный платеж
A = A.toFixed(2); // Округляем до копеек
let perepl = A * months - S; // Переплата

console.log('-----------Задание 8 (*)-----------');
console.log(`Размер ипотечного кредита: ${S}р`);
console.log(`Ставка в процентах: ${p}%`);
console.log(`Cрок кредита (кол-во лет): ${years}`);
console.log(`\nЕжемесячный платеж: ${A}р`);
console.log(`Переплата: ${perepl.toFixed(2)}р`);
