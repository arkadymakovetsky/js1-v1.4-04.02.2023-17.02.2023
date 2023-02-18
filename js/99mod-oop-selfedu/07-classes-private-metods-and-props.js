/*
Видео урок от selfedu:
JavaScript ООП #7: Приватные методы и свойства, оператор instanceof
*/
"use strict";

class Users {
    #name; // Приватные св-ва
    #age;  // Приватные св-ва

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    _getName() {
        return this.#name;
    }
    get name () {
        return this.#name;
    }
    set name (name) {
        this.#name = name;
    }
    get age () {
        return this.#age;
    }
    set age (age) {
        this.#age = age;
    }
}

class Admin extends Users {
    constructor(name, age, login, psw) {
        super(name, age);
        this.login = login;
        this.psw = psw;
    }
}

let u1 = new Users("Михаил", 19);
let u2 = new Admin("Кирилл", 22, "admin", "1111");

console.log(u1._getName()); // Михаил
console.log(u2._getName()); // Кирилл

/*
Оператор instanceof
*/
console.log(u1 instanceof Admin); // false
console.log(u2 instanceof Admin); // true

console.log(u1 instanceof Users); // true
console.log(u2 instanceof Users); // true

console.log(u1.constructor == Users); // true
console.log(u2.constructor == Users); // false
