let question = confirm("Ты хочешь узнать как их зовут?");
let view;
let red_view;

if(question == true) {
  view = prompt("Какого она цвета?");
  view = view.toLowerCase();

  if(view == "прозрачная" || view == "белая") {
    alert("Это Олег");
  }
  if(view == "оранжевая" || view == "красная") {
    red_view = prompt("Она маленькая или большая?");
    red_view = red_view.toLowerCase();

    if(red_view == "маленькая" || red_view == "мелкая") {
      alert("Её зовут NaN")
    }
    if(red_view == "большая" || red_view == "здаровая") {
      alert("Это господин Перкосрак")
    }
  }
  else {
    alert("Такой нет");
  }
}
else {
  alert("Ну и зря");
}