/*
классы  - шаблон кода для создания объектов
псевдопеременная super ссылается на родительский класс

Переводы слов с англ.:
classes - классы
extends - расширяет
*/


class Cat{
  constructor(name, age){
    this.name = name;
    this.age  = age;  
  }
  meow(){
    return 'Мяу';
  }
}
class BritishCat extends Cat{
  constructor(name, age, color = 'серый'){
    super(name, age);
    this.color = color;
  }  
}
let cat1 = new Cat('Барсик', 2);
let cat2 = new BritishCat('Чарльз', 3);
console.log(cat1, cat1.meow());
console.log(cat2, cat2.meow());