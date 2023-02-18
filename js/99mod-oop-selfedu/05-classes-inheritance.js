/*
Видео урок от selfedu:
JavaScript ООП #5: Наследование классов, переопределение методов, функция super
*/
"use strict";

class Prop {
    constructor(width, color) {
        this.width = width;
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Line extends Prop {
    constructor(sp, ep, width, color) {
        super(width, color)
        this.sp = sp;
        this.ep = ep;
    }
    draw() {
        console.log("Линия: " + this.sp.x + ", " + this.sp.y + ", " + this.ep.x + ", " + this.ep.y);
    }
    getColor() {
        let color = super.getColor();
        return '[' + color + ']';
    }
}

let l1 = new Line({ x: 0, y: 0 }, { x: 10, y: 20 }, 1, 'red');

console.log(l1);
l1.draw();
console.log(l1.getColor());


// Особенности работы extends
function getExtends(type) {
    return class {
        constructor(width, color) {
            this.type = type;
            this.width = width;
            this.color = color;
        }
    };
}

class Line2D extends getExtends("2D") {
    constructor(sp, ep, width, color) {
        super(width, color);
        this.sp = sp;
        this.ep = ep;
    }

    draw() {
        console.log(`Линия: (${this.sp.x}, ${this.sp.y})(${this.ep.x}, ${this.ep.y})`);
    }

    getType() { return this.type; }
}

let l2 = new Line2D({ x: -1, y: -8 }, { x: 12, y: 23 }, 0.5, 'red');
console.log(l2);
l2.draw();
