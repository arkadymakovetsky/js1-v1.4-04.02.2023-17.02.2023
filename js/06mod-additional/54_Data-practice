// Измерить длительность выполнения цикла for на большом кол-ве итераций
let d1 = new Date();
let d2 = new Date();

console.log(d1);

let a1 = [];
for(let i = 0; i < 100e6; i++) {
    a1.push(i % 2); // добавление элемента в конец массива
}
d2 = new Date();
console.log(d2);
console.log(`${(d2 - d1)/1000}с`); // 2.469с

let a2 = [];
for(let i = 0; i < 100e6; i++) {
    a2.shift(i % 2); // добавление элемента в начало массива
}
d2 = new Date();
console.log(d2);
console.log(`${(d2 - d1)/1000}с`); // 2.918с
