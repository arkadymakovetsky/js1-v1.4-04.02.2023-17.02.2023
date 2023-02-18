
/*
Переводы слов с англ.:
static - статический
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

  static get(n,a,c){ 
    return new BritishCat(n,a,c);
  }
}
let cat1 = new Cat('Барсик', 2);
//let cat2 = new BritishCat('Чарльз', 3);
let cat2 = BritishCat.get('Чарльз', 3);
console.log(cat1, cat1.meow());
console.log(cat2, cat2.meow());

cat2.colorCat = '';
console.log(cat2.colorCat);

console.log(cat1 instanceof Cat);
console.log(cat2 instanceof BritishCat);
console.log(cat2 instanceof Cat);
console.log(cat1 instanceof BritishCat);
console.log(cat1 instanceof Object);








