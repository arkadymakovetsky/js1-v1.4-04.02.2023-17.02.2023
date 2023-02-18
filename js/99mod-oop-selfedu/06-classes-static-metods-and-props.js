/*
Видео урок от selfedu:
JavaScript ООП #6: Статические методы и свойства классов
*/
"use strict";

class Users {
    static countUsers = 0; // статическое свойство
    constructor(name, age) {
        Users.countUsers++;
        this.name = name;
        this.age = age;
    }

    // статический метод
    static compareAge(user1, user2) {
        return user1.age == user2.age;
    }

    getName() {
        return this.name;
    }
}
// Также статический метод
Users.compAge = function (user1, user2) {
    return user1.old == user2.old;
}

let u1 = new Users("Михаил", 19);
let u2 = new Users("Федор", 19);

console.log(Users.compareAge(u1, u2)); // true
console.log(Users.compAge(u1, u2)); // true
console.log(Users.countUsers);


/*
Наследование статических методов
*/
class Admin extends Users {
    constructor(name, age, login, psw) {
        super(name, age);
        this.login = login;
        this.psw = psw;
    }
}
let u3 = new Admin("Егор", 21, "egor", "0123");
console.log(Admin.compareAge(u1, u2)); // true
console.log(Admin.compareAge(u1, u3)); // false
console.log(Users.compareAge(u1, u3)); // false
console.log(Users.countUsers);
