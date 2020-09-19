let num = prompt("Введите число");
function factorial(n) {
  if(n == 0) {
    return 1;
  }

  let f = 1;
  let i = 0;

  while(i < n) {
    i += 1;
    f *= i;
  }
  return f;
}
alert(`Факториал ${num} равен: ${factorial(num)}`);