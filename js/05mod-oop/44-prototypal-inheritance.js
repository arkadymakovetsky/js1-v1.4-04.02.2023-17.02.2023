function Cat(name, age){
  this.name = name;
  this.age  = age;
}
Cat.prototype.meow = function(){
    return 'Мяу';
}
function BritishCat(name, age, color = 'grey'){
  Cat.apply(this,[name, age]);//вызов родительского констр.
  this.color = color;
}
BritishCat.prototype = new Cat();
BritishCat.prototype.constructor = BritishCat;
let cat1 = new Cat('Барсик', 2);
let cat2 = new BritishCat('Чарльз', 3);
let cat3 = new BritishCat('Гарольд', 5);
console.log(cat1,cat2);
console.log(cat1.constructor);
console.log(cat2.constructor);

console.log(cat2.meow());








