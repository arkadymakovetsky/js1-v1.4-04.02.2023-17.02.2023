function game() {
  const getnum = () => Math.round(Math.random() * 10);

  let i = getnum();

  return function (n) {
    if (i == n) {
      console.log("Победа");
      i = getnum();
    } else {
      console.log("Попробуйте ещё...");
    }
  };
}

let go = game();
go(0);
go(1);
