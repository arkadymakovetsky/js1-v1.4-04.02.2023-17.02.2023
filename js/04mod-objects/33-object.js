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


//------------- Практика --------------
// Создайте собственный произвольный объект с двумя свойствами и одним методом
let p1 = {
  name: "Аркадий",
  surname: "Маковецкий",
  age: 55,
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
  getAge() {
    return this.age;
  },
  changeAge(new_age) {
    this.age = new_age;
    return this.age;
  },
  toString() {
    return `${this.name} ${this.surname}`;
  },
  valueOf() {
    return this.age;
  },
};
console.log(p1);
console.log(p1.toString());
console.log('Привет, ' + p1); // Срабатывает свойство valueOf() или toString(), если valueOf() нет.
console.log(p1 - 3);
console.log(p1.getFullName(), p1.getAge(), p1.changeAge(57));
