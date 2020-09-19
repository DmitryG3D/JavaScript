let quesion_1 = confirm('Узнать минимальное и максимальне значения?');

if(quesion_1 === true) {

let max = 0;
let min = Infinity;
let v;
let n = +prompt('Количество значений:');


for(let i = 0; i < n; i++) {
  v = +prompt('Введите значение:');
  if(v == NaN || v == "" || v == undefined) {
    alert('Неверное значение');
    i = i - 1;
  }
  else {
    if(v > max) {
    max = v;
    }
    if(min > v) {
      min = v;
    }
  }
  
}

alert(`max = ${max} min = ${min}`);

}

else {
  alert('Отменено пользователем');

  let quesion_2 = confirm('Узнать среднее арифметическое?')
  if(quesion_2 === true) {
    let sum = 0;
    let k = prompt('Количество значений:');

    for(let i = 0; i < k; i++) {
      sum += +prompt('Введите значение');
      if(sum == "" || sum == NaN || sum == undefined) {
        alert('Неверное значение');
        i = i - 1;
      }
    }

    alert(`middle = ${sum / k}`);
      
  }
}