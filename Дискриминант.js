let question = confirm ("Начать ВЫЧИСЛЕНИЕ ДИСКРИМИНАНТА?");

if(question === true) {

  let a = +prompt("Введите а");

  if(typeof(a) === "number" && typeof(a) !== NaN) {

    let b = +prompt("Введите b");

    if(typeof(b) === "number" && typeof(b) !== NaN) {

      let c = +prompt("Введите c");

      if(typeof(c) === "number" && typeof(c) !== NaN) {

        let d = (b  b) - (4  a * c);

        if(typeof(d) === "number" && typeof(d) !== NaN) {
          alert(`D = ${d}`);

          let x1 = (-b + Math.sqrt(d)) / (2 * a);

          if(typeof(x1) === "number" && typeof(x1) !== NaN) {

            let x2 = (-b - Math.sqrt(d) / (2 * a));

            if(typeof(x2) === "number" && typeof(x2) !== NaN) {
              alert(`Ответ x1 = ${x1}, x2 = ${x2}`);
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
    alert("Неверное значение");
  }
  
}

else {
  alert("Отменено пользователем");
}