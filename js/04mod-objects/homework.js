// Задание 1
/* 
Создайте объект city1 (let city1 = {}), укажите у него
свойства name (название города, строка) со значением «ГородN» 
и population (населенность города, число) со значением 10 млн.
*/
let city1 = {};
city1.name = 'ГородN';
city1.population = 10_000_000;


// Задание 2
/* Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.*/
let city2 = {
    name: "ГородM",
    population: 1e6,
};


// Задание 3
/* Создайте у объектов city1 и city2 методы getName(), которые 
вернут соответствующие названия городов*/
console.log('----- Задание 3 -----');
const getname = function () {
    return this.name;
}
city1.getName = getname;
city2.getName = getname;

console.log(city1.name, city1.getName())
console.log(city2.name, city2.getName())


// Задание 4
/*
Создайте методы exportStr() у каждого из объектов.
Этот метод должен возвращать информацию о городе
в формате «name=ГородN\npopulation=10000000\n».
Для второго города будет строка со своими значениями.
Примечание: можно обращаться к каждому свойству через
цикл for/in, но методы объекта возвращать не нужно
*/
console.log('----- Задание 4 -----');
const expstr = function () {
    let res = '';
    for (let item in this) {
        if ((typeof this[item]) != 'function') {
            res += `${item}=${this[item]}\n`
        }
    }
    return res;
}

city1.exportStr = expstr
city2.exportStr = expstr

console.log(city1.exportStr());
console.log(city2.exportStr());


// Задание 5
/*
Создайте глобальную функцию getObj(), которая
возвращает this. А у каждого из объектов city1 или
city2 метод getCity, который ссылается на getObj.
Проверьте работу метода. Примечание: к объекту вызова
можно обратиться через this.
*/
console.log('----- Задание 5 -----');
const getObj = function () {
    return this;
}

city1.getCity = getObj
city2.getCity = getObj

console.log(city1.getCity().name);
console.log(city2.getCity().name);

//-->
let city;
city = city1.getCity()
console.log(city.name, city.population);
city = city2.getCity()
console.log(city.name, city.population);
//<--


// Задание 6 (*)
/*
Создать объект obj, с методами method1(),method2()
и method3(). В методе method3() должна возвращаться
строка «метод3». Сделайте так, чтобы было возможно
выполнение кода obj.method1().method2().method3().
*/
console.log('----- Задание 6 -----');
//-->
let obj = {
    method1() {
        return this;
    },
    method2() {
        return this;
    },
    method3() {
        return 'Метод3';
    },
}
console.log(obj.method1().method2().method3())
//<--

// Задание 7
/*
Создайте массив d1 с числовыми величинами 45,78,10,3.
Добавьте в массив d1 еще одно число ( d1[7] = 100).
Выведите в консоль весь массив и его элементы с индексами 6 и 7.
*/
console.log('----- Задание 7 -----');
let d1 = [45, 78, 10, 3];
d1[7] = 100;

console.log('length = ' + d1.length)

for (let i = 0; i < d1.length; i++) {
    console.log(i, d1[i]);
}


// Задание 8
/*
Создайте массив d2 с числовыми величинами 45,78,10,3.
Посчитайте в переменную sum2 сумму чисел в нем,
при помощи цикла for.
*/
console.log('----- Задание 8 -----');
let d2 = [45, 78, 10, 3];
let S2 = 0;
for (let i = 0; i < d2.length; i++) {
    S2 += d2[i];
}
console.log(`sum2=${S2}`);


// Задание 9
/*
Создайте массив d3 с числовыми величинами 45,78,10,3.
Добавьте в массив d3 еще одно число (например, d[7] = 100)
Посчитайте в переменную sum3 сумму чисел в нем,
при помощи цикла for/in.
*/
console.log('----- Задание 9 -----');
let d3 = [45, 78, 10, 3];
d3[7] = 100;
let S3 = 0;
for (let i in d3) { // Пропускает undefined - 4,5,6
    // console.log(i, d3[i])
    S3 += d3[i];
}
console.log(`sum3=${S3}`);


// Задание 10
/*
Создайте массив d4 с числовыми величинами 45,78,10,3.
Напишите функцию сортировки my(a,b), которая при
вызове d4.sort(my) отсортирует элементы массива
по убыванию чисел. Вызовите d4.sort(my)
*/
console.log('----- Задание 10 -----');
let d4 = [45, 78, 10, 3];
console.log(d4.sort((a, b) => a > b ? -1 : 1));


// Задание 11 (*)
/* 
Создайте двумерный массив d5 размером n=3 элементов в каждом из которых будет m=4 элементов 
из целых чисел (в каждый элемент поместить цифру 5). 
Примечание: при создании двумерного массива используйте циклы. 
Во внешнем цикле должна появиться конструкция d5[i] = [];
*/
console.log('----- Задание 11 -----');
const n = 3;
const m = 4;

let d5 = []
for (let i = 0; i < n; i++) {
    d5[i] = [];
    for (let j = 0; j < m; j++) {
        d5[i][j] = 5;
    }
}
console.log(d5);

console.log('----- Задание 11 вар.2 -----');
let d6 = []
for (let i = 0; i < n; i++) {
    d6.push([]);
    for (let j = 0; j < m; j++) {
        d6.at(-1).push(5);
    }
}
console.log(d6);
console.table(d6);
