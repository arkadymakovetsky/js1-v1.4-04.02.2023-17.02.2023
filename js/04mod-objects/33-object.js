/*
объекты - тип данных, позволяющий объединять переменные и функции для их обработки

Переводы слов с англ.:
object - объект
property - свойство
method - функция, метод объекта

*/
let cat1 = { name: "Барсик>", color: "red" };
cat1.age = 9;
cat1["txt"] = "мяу";
cat1.meow = function () {
  return "мяу";
};

console.log(cat1["age"]);
console.log(cat1.txt);
console.log(typeof cat1);

let property = "color";
console.log(cat1[property]);
console.log(cat1.meow); //смотрим тело метода
console.log(cat1.meow()); //вызов метода/функц. св-ва

// Создайте собственный произвольный объект с двумя свойствами и одним методом
