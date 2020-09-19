let question = confirm("Узнать ответ?");

if( question === true ) {

  function decision() {
    
    alert(`Задавать можно вопросы под ответ: "да", "нет"`);

    let indifferently = prompt("Введите ваш вопрос:");
    
    if( indifferently !== "" && indifferently !== "null"
    && indifferently !== "undefined" && indifferently !== "NaN") {

      let answer = Math.round(Math.random() * 100);

      if( answer <= 15 ) {
        alert("Нежелательно");
      }
      if( answer > 15 && answer <= 30 ) {
        alert("Не надо");
      }
      if( answer > 30 && answer <= 45 ) {
        alert("Точно нет");
      }
      if( answer > 45 && answer <= 60 ) {
        alert("Скорее всего да");
      }
      if( answer > 60 && answer <= 80 ) {
        alert("Лучше да");
      }
      if( answer > 80 && answer < 100 ) {
        alert("Определенно да");
      }

    }

  }

  do {
    decision();
    question = confirm("Узнать ответ?");
  }

  while(question === true)

}

else {
  alert("Отменено");
}