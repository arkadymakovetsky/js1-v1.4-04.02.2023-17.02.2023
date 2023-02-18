/*
Переводы слов с англ.:
get - получать
getter - добытчик, геттер
set - задавать
setter - установщик
*/

class Cat {
  #privateColor; // # - Приватное свойство
  set color(color) {
    this.#privateColor = color || "серый";
  }
  get color() {
    return this.#privateColor;
  }
}

let c1 = new Cat();
c1.color = 'Белый';
console.log(c1.color); //Белый


//---------- Практика -------------
/* Создайте аксессоры в классе Color с названием value. 
Геттер должен возвращать приватное свойство, а сеттер 
позволять задавать у экземпляра свойства в виде массива.
Например, color1.value = [237, 192, 66]; //#edc042 */
class Color {
  #value = '#000000';

  get value() {
    return this.#value;
  }
  set value(color) {
    this.#value = '#' + color.map(item => {
      return item.toString(16).length == 1 ? '0' + item.toString(16) : item.toString(16);
    }).join('');
  }
  
  get color() {
    return this.#value;
  }
  set color(color) {
    let r = color[0].toString(16);
    let g = color[1].toString(16);
    let b = color[2].toString(16);

    r = r.length == 1 ? '0' + r : r;
    g = g.length == 1 ? '0' + g : g;
    b = b.length == 1 ? '0' + b : b;

    this.#value = `#${r}${g}${b}`;
  }
}

let color1 = new Color();

color1.value = [237, 192, 66]; //#edc042
console.log(color1.value); //#edc042

color1.color = [7, 0, 142]; //#07008e
console.log(color1.color); //#07008e
color1.value = [237, 192, 66]; //#edc042
console.log(color1.value); //#edc042
