// Взято из видео урока от selfedu
// JavaScript ООП #4: Классы - class, методы и свойства, Class Expression
"use strict";
let Book = class {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this._price = price;
    }
    toString() {
        return `${this.title} (${this.author})`;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
}

let b1 = new Book('Муму', 'Тургенев', 250);
console.log(b1);
console.log(b1.toString());

b1.price = 275;
console.log(b1.price); // 275
