function add(num) {
  let sum = num;

  function calc(num2) {
    sum = sum + num2;
    calc.result = sum;
    return calc;
  }

  return calc;
}

console.log(add(65)(14)(24).result);
