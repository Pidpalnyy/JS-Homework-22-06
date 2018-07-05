
// ------Task00-------
// var width = parseInt(prompt('Enter the width: '));
// var row = width;
// var i = width-1;
// while (row < width*2) {
//     var star = 0;
//         i--;
//     while (star < row) {
//         if (star>i)
//             document.write("* ");
//         else
//             document.write("&nbsp;&nbsp; ");
//         star++;
//     }
//     document.write("<br>");
//     row++;
// }



//------Task01-------
// var width = parseInt(prompt('Enter the width: '));
// var row = width;
// var i = width;
// while (row < width*2) {
//     var star = 0;
//         i--;
//     while (star < row) {
//         if (star==i||star==row-1||row==(width*2)-1)
//             document.write("* ");
//         else
//             document.write("&nbsp;&nbsp; ");
//         star++;
//     }
//     document.write("<br>");
//     row++;
// }



//------Task02-------
// function rand(a,b){
//     return Math.round(Math.random()*(b-a))+a;
// }
// var game = 0;
// while (game<1) {
//     var x = rand(1, 100);
//     console.log (x);
//     var attempt = 5;
//     while (attempt>0) {
//         var y = parseInt(prompt("Отгадайте загаданное мной число, оно от 1 до 100: "));
//         attempt--;
//         if (y===x) attempt = 0;
//         else y>x? alert("Нет, слишком много, осталось "+attempt+" попытки"):alert("Нет, слишком мало, осталось "+attempt+" попытки");
//     }
//     var i;
//     y===x? i=confirm("Вы выграли, сыграем еще?") : i=false+(alert(" Все попытки исчерпаны - ты проиграл "));
//     !i? game=1:game=0;
// }
