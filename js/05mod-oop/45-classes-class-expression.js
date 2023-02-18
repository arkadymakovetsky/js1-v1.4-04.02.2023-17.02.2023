// Взято из видео урока от selfedu
// JavaScript ООП #4: Классы - class, методы и свойства, Class Expression
"use strict";
function createFruit(name, weight) {
    return class {
        type = "fruit"
        constructor() {
            this.name = name;
            this.weight = weight;
        }
        showInfo() {
            return `${this.name} ${this.weight}`;
        }
        toString() {
            return `${this.name}=${this.weight}`;
        }
    }
}

let f1 = createFruit('Яблоко', 100);
let apple = new f1();

let cherry = new (createFruit('Вишня', 5))();

console.log(apple);
console.log(cherry);

console.log('' + apple);
console.log('' + cherry);

console.log(apple.showInfo());
console.log(cherry.showInfo());
