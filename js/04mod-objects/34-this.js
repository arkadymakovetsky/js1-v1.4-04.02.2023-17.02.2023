/*
this - псевдопеременная указывающая на контекст вызова

Переводы слов с англ.:
this - это, этот
in - в
typeof - тип

*/

let cat1 = {
  name: "Барсик",
  color: "red",
  age: 9,
  txt: "мяу",
  meow: function () {
    return this.txt;
  },
};

console.log("color" in cat1);
console.log("tail" in cat1);

for (let p in cat1) {
  if (typeof cat1[p] != "function") console.log(p, typeof p, cat1[p]);
}

// Измените метод sound в объектах так, чтобы показывалось имя каждой собаки
// let dog1 = {name: 'Шарик', sound: function(){ return `Шарик: гав` }}
// let dog2 = {name: 'Гром', sound: function(){ return `Шарик: гав` }}
// let dog3 = {name: 'Чиби', sound: function(){ return `Шарик: гав` }}
// console.log(dog1.sound()); //Шарик
// console.log(dog2.sound()); //Гром
// console.log(dog3.sound()); //Чиби
