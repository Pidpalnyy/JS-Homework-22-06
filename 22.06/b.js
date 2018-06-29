var toaster = confirm("Есть ли у вас тостер?");
var bread = confirm("Есть ли у вас хлеб?");

if (!toaster) var toaster = 0;
else var toaster = 2;

if (!bread) var bread = 0;
else var bread = 1;

var summ = toaster+bread;

if (summ === 3){
    alert('нарезать хлеб');
    alert('положить хлеб в тостер');
    alert('включить тостер');
    alert('подождать 5 минут');
    alert('тосты готовы');
}
else if (summ === 1){
    var money_toaster = confirm("Есть ли у вас деньги на тостер?");
    if (!money_toaster)alert('Нет денег на тостер - гренок нет.');
    else {
        alert('купить тостер');
        alert('нарезать хлеб');
        alert('положить хлеб в тостер');
        alert('включить тостер');
        alert('подождать 5 минут');
        alert('тосты готовы');
    }
}
else if (summ === 2){
    var money_bread = confirm("Есть ли у вас деньги на хлеб?");
    if (!money_bread)alert('Нет денег на хлеб - гренок нет.');
    else {
        alert('купить хлеб');
        alert('нарезать хлеб');
        alert('положить хлеб в тостер');
        alert('включить тостер');
        alert('подождать 5 минут');
        alert('тосты готовы');
    }
}
else alert('Если у вас нет ничего, то питайтесь духовной пищей)');


