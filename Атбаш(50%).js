let question = confirm("Запустить алгоритм шифрования?");

if(question === true) {

  let source = prompt("Введите сообшение:");
  
  source = source.replace(/m/g, "n");
  source = source.replace(/l/g, "o");
  source = source.replace(/k/g, "p");
  source = source.replace(/j/g, "q");
  source = source.replace(/i/g, "r");
  source = source.replace(/h/g, "s");
  source = source.replace(/g/g, "t");
  source = source.replace(/f/g, "u");
  source = source.replace(/e/g, "v");
  source = source.replace(/d/g, "w");
  source = source.replace(/c/g, "x");
  source = source.replace(/b/g, "y");
  source = source.replace(/a/g, "z");

  alert(`Защифрованное сообщение: ${source}`);

}

else {
  alert("Отменено пользователем");
}