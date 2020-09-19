let question = confirm("Включить перевод в морзе?");
let source;

if(question === true) {

  source = prompt("Введите сообщение");


  while(source == "") {
      
    alert("Пустая строка");

    source = prompt("Введите сообщение");

  }

  source = source.toLowerCase();

  source = source.replace(/0/g, "     − − − − −");
  source = source.replace(/1/g, "     · − − − −");
  source = source.replace(/2/g, "     · · − − −");
  source = source.replace(/3/g, "     · · · − −");
  source = source.replace(/4/g, "     · · · · −");
  source = source.replace(/5/g, "     · · · · ·");
  source = source.replace(/6/g, "     − · · · ·");
  source = source.replace(/7/g, "     − − · · ·");
  source = source.replace(/8/g, "     − − − · ·");
  source = source.replace(/9/g, "     − − − − ·");

  source = source.replace(/a/g, "     · −");
  source = source.replace(/b/g, "     − · · ·");
  source = source.replace(/c/g, "     − · − ·");
  source = source.replace(/d/g, "     − · ·");
  source = source.replace(/e/g, "     ·");
  source = source.replace(/f/g, "     · · − ·");
  source = source.replace(/g/g, "     − − ·");
  source = source.replace(/h/g, "     · · · ·");
  source = source.replace(/i/g, "     · ·");
  source = source.replace(/j/g, "     · − − −");
  source = source.replace(/k/g, "     − · −");
  source = source.replace(/l/g, "     · − · ·");
  source = source.replace(/m/g, "     − −");
  source = source.replace(/n/g, "     − ·");    
  source = source.replace(/o/g, "     − − −");
  source = source.replace(/p/g, "     · − − ·");
  source = source.replace(/q/g, "     − − · −");
  source = source.replace(/r/g, "     · − ·");
  source = source.replace(/s/g, "     · · ·");
  source = source.replace(/t/g, "     −");
  source = source.replace(/u/g, "     · · −");
  source = source.replace(/v/g, "     · · · −");
  source = source.replace(/w/g, "     · − −");
  source = source.replace(/x/g, "     − · · −");
  source = source.replace(/y/g, "     − · − −");
  source = source.replace(/z/g, "     − − · ·");

  alert(`Защифрованное сообщение: ${source}`);

}

else {
  alert("Отменено пользователем");
}