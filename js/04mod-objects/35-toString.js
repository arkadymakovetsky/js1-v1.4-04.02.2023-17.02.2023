/*
toString - метод объектов, который срабатывает, когда происходит превращение объекта в строку

Переводы слов с англ.:
to string  - к строке
*/

let cat1 = {
  name: "Барсик",
  color: "red",
  age: 9,
  txt: "мяу",
  meow: function () {
    return this.txt;
  },
  toString: function () {
    return this.name;
  }
};
console.log("Привет, " + cat1);
console.log(cat1 + "");


//-------------- Практика ---------------
// Есть объект book. Опишите функциональное свойство toString(),
// которое при попытке превращения объекта в строку вернет "Книга1|1000"
const book = {
  title: 'Книга1',
  price: 1000,
  toString() {
    return `${this.title}|${this.price}`;
  },
}
console.log(book + ''); //"Книга1|1000"
console.log(book.toString()); //"Книга1|1000"
