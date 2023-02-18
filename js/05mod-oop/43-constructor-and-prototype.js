// "use strict"
/*

функция-конструктор - это функция, которая вызывается с оператором new и при этом получается новый объект

Переводы слов с англ.:
constructor - конструктор
prototype - прототип
new - новый
*/

function Cat(name, age){
  this.name = name;
  this.age  = age;
}
Cat.prototype.meow = function(){
    return 'Мяу';
}

let cat1 = new Cat('Барсик', 2);
let cat2 = new Cat('Мурзик', 3);
console.log(cat1,cat2);

cat1.meow = function(){
  return 'Мау';
}
console.log( cat1.eat() );
console.log( cat2.eat() );








