let question = confirm("Включить дешифровку морзе?");
let source;

if(question === true) {

  source = prompt("Введите сообщение");


  while(source == "") {
      
    alert("Ошибка: пустая строка");

    source = prompt("Введите сообщение");

  }

  if(source === null) {
    alert("Отменено пользователем");
  }  
  source = source.replace(/-----/g, "   0");
  source = source.replace(/.----/g, "   1");
  source = source.replace(/..---/g, "   2");
  source = source.replace(/...--/g, "   3");
  source = source.replace(/....-/g, "   4");
  source = source.replace(/...../g, "   5");
  source = source.replace(/-..../g, "   6");
  source = source.replace(/--.../g, "   7");
  source = source.replace(/---../g, "   8");
  source = source.replace(/----./g, "   9");
  
  source = source.replace(/− − − − −/g, "   0");
  source = source.replace(/· − − − −/g, "   1");
  source = source.replace(/· · − − −/g, "   2");
  source = source.replace(/· · · − −/g, "   3");
  source = source.replace(/· · · · −/g, "   4");
  source = source.replace(/· · · · ·/g, "   5");
  source = source.replace(/− · · · ·/g, "   6");
  source = source.replace(/− − · · ·/g, "   7");
  source = source.replace(/− − − · ·/g, "   8");
  source = source.replace(/− − − − ·/g, "   9");

  source = source.replace(/.-/g, "   a");
  source = source.replace(/-.../g, "   b");
  source = source.replace(/-.-./g, "     c");
  source = source.replace(/-../g, "   d");
  source = source.replace(/./g, "   e");
  source = source.replace(/..-./g, "   f");
  source = source.replace(/--./g, "   g");
  source = source.replace(/..../g, "   h");
  source = source.replace(/../g, "   i");
  source = source.replace(/.---/g, "   j");
  source = source.replace(/-.-/g, "   k");
  source = source.replace(/.-../g, "   l");
  source = source.replace(/--/g, "   m");
  source = source.replace(/-./g, "   n");    
  source = source.replace(/---/g, "   o");
  source = source.replace(/.--./g, "   p");
  source = source.replace(/--.-/g, "   q");
  source = source.replace(/.-./g, "   r");
  source = source.replace(/.../g, "   s");
  source = source.replace(/-/g, "   t");
  source = source.replace(/..-/g, "   u");
  source = source.replace(/...-/g, "   v");
  source = source.replace(/.--/g, "   w");
  source = source.replace(/-..-/g, "   x");
  source = source.replace(/-.--/g, "   y");
  source = source.replace(/--../g, "   z");

  source = source.replace(/· −/g, "   a");
  source = source.replace(/− · · ·/g, "   b");
  source = source.replace(/− · − ·/g, "     c");
  source = source.replace(/− · ·/g, "   d");
  source = source.replace(/·/g, "   e");
  source = source.replace(/· · − ·/g, "   f");
  source = source.replace(/− − ·/g, "   g");
  source = source.replace(/· · · ·/g, "   h");
  source = source.replace(/· ·/g, "   i");
  source = source.replace(/· − − −/g, "   j");
  source = source.replace(/− · −/g, "   k");
  source = source.replace(/· − · ·/g, "   l");
  source = source.replace(/− −/g, "   m");
  source = source.replace(/− ·/g, "   n");    
  source = source.replace(/− − −/g, "   o");
  source = source.replace(/· − − ·/g, "   p");
  source = source.replace(/− − · −/g, "   q");
  source = source.replace(/· − ·/g, "   r");
  source = source.replace(/· · ·/g, "   s");
  source = source.replace(/−/g, "   t");
  source = source.replace(/· · −/g, "   u");
  source = source.replace(/· · · −/g, "   v");
  source = source.replace(/· − −/g, "   w");
  source = source.replace(/− · · −/g, "   x");
  source = source.replace(/− · − −/g, "   y");
  source = source.replace(/− − · ·/g, "   z");

  alert(`Защифрованное сообщение: ${source}`);

}

else {
  alert("Отменено пользователем");
}