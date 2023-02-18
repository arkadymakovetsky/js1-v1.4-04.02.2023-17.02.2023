/*
Видео урок от selfedu:
JavaScript ООП #4: Классы - class, методы и свойства, Class Expression
*/
"use strict";

class Book {
    #price; // Настоящее приватное свойство
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.#price = price;
    }
    toString() {
        return `${this.title} (${this.author})`;
    }
    get price() {
        return this.#price;
    }
    set price(price) {
        this.#price = price;
    }
}

let b1 = new Book('Муму', 'Тургенев', 150);
console.log(b1);
console.log(b1.toString());

b1.price = 175;
console.log(b1.price); // 175


let classBook = class {
    #price; // Настоящее приватное свойство
    constructor(title, author, price) {
        this.title = title;
        this._author = author; // Приватное свойство по соглашению (договоренности)
        this.#price = price; 
    }
    toString() {
        return `${this.title} (${this._author})`;
    }
    get price() {
        return this.#price;
    }
    set price(price) {
        this.#price = price;
    }
}

let b2 = new classBook('Муму', 'Тургенев', 250);
console.log(b2);
console.log(b2.toString());

b2.price = 275;
console.log(b2.price); // 275

