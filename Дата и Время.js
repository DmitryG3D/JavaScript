let question_start = confirm("Запустить алгоритм вывода даты?")

if( question_start === true ) {

  let question = prompt
  ("Что узнать(Полную дату, год, месяц, день недели, день, время)?").toLowerCase();
  let date = new Date();

  switch( question ) {

    case 'полную дату':
    case 'всю дату':
    case 'дату':

      alert( `${date.getDate()}.${date.getMonth()} ${date.getFullYear()}` );
      break;


    case 'год':

      alert( date.getFullYear() );
      break;


    case 'месяц':

      if( date.getMonth() == "0" ) {
        alert( "Январь" );
      }
      if( date.getMonth() == "1" ) {
        alert( "Февраль" );
      }
      if( date.getMonth() == "2" ) {
        alert( "Март" );
      }
      if( date.getMonth() == "3" ) {
        alert( "Апрель" );
      }
      if( date.getMonth() == "4" ) {
        alert( "Май" );
      }
      if( date.getMonth() == "5" ) {
        alert( "Июнь" );
      }
      if( date.getMonth() == "6" ) {
        alert( "Июль" );
      }
      if( date.getMonth() == "7" ) {
        alert( "Август" );
      }
      if( date.getMonth() == "8" ) {
        alert( "Сентябрь" );
      }
      if( date.getMonth() == "9" ) {
        alert( "Октябрь" );
      }
      if( date.getMonth() == "10" ) {
        alert( "Ноябрь" );
      }
      if( date.getMonth() == "11" ) {
        alert( "Декабрь" );
      }
      break;


    case 'день недели':

      if( date.getDay() == "0" ) {
        alert( "Воскресеье" );
      }
      if( date.getDay() == "1" ) {
        alert( "Понедельник" );
      }
      if( date.getDay() == "2" ) {
        alert( "Вторник" );
      }
      if( date.getDay() == "3" ) {
        alert( "Среда" );
      }
      if( date.getDay() == "4" ) {
        alert( "Четверг" );
      }
      if( date.getDay() == "5" ) {
        alert( "Пятница" );
      }
      if( date.getDay() == "6" ) {
        alert( "Суббота" );
      }
      break;


    case 'день':

      alert( date.getDate() );
      break;


    case 'время':

      alert( `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` );
      break;


    case 'часы':
    case 'час':

      alert( date.getHours() );
      break;


    case 'минута':
    case 'минуту':
    case 'минуты':

      alert( date.getMinutes() );
      break;


    case '':

    alert( "Пустая строка" );
    break;


    default:
      
      alert( "Неврный ввод" );


  }

}

else {

  alert( "Отменено пользователем" );

}