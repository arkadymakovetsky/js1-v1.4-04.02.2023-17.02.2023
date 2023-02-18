/*
Видео урок от selfedu:
JavaScript ООП #8: Примеси (Mixins). Что это, где и для чего используются
*/
"use strict";

{
    let res = 0;
    try {
        res = 5 / d;
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
}

{
    let res = 0;
    try {
        let d = 2;
        res = 5 / d;
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
}


/*
Свойства объекта ошибки
**
В языке JavaScript объект ошибки блока catch имеет три полезных атрибута:
    name – содержит название ошибки;
    message – содержит текст ошибки;
    stack – стек вызова до возникновения ошибки (нестандартное свойство).
*/
{
    let res = 0;
    let d = 0;
    try {
        res = 5 / d;
        console.log(res);
    }
    catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    } finally {
        console.log('Выполняется всегда!');
    }
}

/*
Блок finally
*/
{
    let res = 0;
    // let d = 0;
    try {
        res = 5 / d;
        console.log(res);
    }
    catch (error) {
        console.log('error.name = ', error.name);
        console.log('error.message = ', error.message);
        console.log('error.stack = ', error.stack);
    } finally {
        console.log('Выполняется всегда!');
    }
}

/*
Генерация собственных исключений – throw
*/
let err1 = new Error("Ошибка выполнения");
let err2 = new SyntaxError("Ошибка синтаксиса");
let err3 = new TypeError("Ошибка типов данных");
/*
throw err1;
throw new SyntaxError("Ошибка синтаксиса");
*/
function divide(a, b) {
    if (b == 0) {
        throw new Error("Деление на ноль");
    }
    return a / b;
}

let res = 0;
try {
    res = divide(1, 0);
    console.log(res);
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/*
Проброс исключений
*/
// let res = 0;
try {
    res = divide(1, 2);
    console.log(res);
}
catch (error) {
    if (error.name == "Error") {
        console.log(error.name);
        console.log(error.message);
    }
    else {
        throw error;
    }
}
