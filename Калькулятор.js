let question = confirm("Запустить калькулятор?");
let v1;
let v2;

if(question == true) {
  v1 = +prompt("Введите первое число", 0);

  if(typeof(v1) === "number" && v1 != "") {
    v2 = +prompt("Введите второе число", 0);

    if(typeof(v2) === "number" && v2 != "") {
      
      let answer = prompt("Что сделать?", "+");

      switch(answer) {
        case"+":
          alert(`Ответ: ${v1 + v2}`);
          break;
        case"-":
          alert(`Ответ: ${v1 - v2}`);
          break;
        case"*":
          alert(`Ответ: ${v1 * v2}`);
          break;
        case"/":
          alert(`Ответ: ${v1 / v2}`);
          break;

        default:
          alert("Неверное значение");
      }
    }

    else {
      alert("Неверное значение");
    }
  }

  else {
    alert("Неверное значение");
  }
}

else {
  alert("Отменено пользователем");
}