/*Найти кол-во дней до НГ*/
function days() {
  let curr = new Date();
  let year = curr.getFullYear();
  let next = year + 1;
  let hny = new Date(next, 0);
  //let diff = hny.getTime() - curr.getTime();
  let diff = hny - curr;
  return diff / (1000 * 60 * 60 * 24);
}

console.log(`Осталось дн. ${days()}`);
