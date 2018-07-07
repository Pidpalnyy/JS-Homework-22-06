// ---------Task 01---------
// var a = [2,4,7,3,9];
// var min = a[0];
// var max = a[0];
// var buf_min = 0;
// var buf_max = 0;
// for (var i = 0; i<a.length; i++){
// 	if(min>a[i]) {
// 		min=a[i];
// 		buf_min=i;
// 	}
// 	if(max<a[i]) {
// 		max=a[i];
// 		buf_max=i;
// 	}
// }
// a[buf_min] = max;
// a[buf_max] = min;
// console.log(a);



// ---------Task 02---------
// var a=[1,2,3,4,5];
// for (var i=a.length-1;i >= 0; i--){
// 	a.push(a[i]);
// } 
// for (var i=0;i<a.length-1;i++){
// 	a.shift(a[i]);
// } 
//     console.log(a);



// ---------Task 03---------
// function showArray(a){
// 	document.write('<ul>');
// 	a.forEach((e)=>document.write
// 		('<li><h1>'+e+'</h1></li>'));
// 	document.write('</ul>');
// }
// var links = ['http://google.com','http://fb.com','http://vk.com'];
// var names = ['google','facebook','vkontakte'];
// var google = '<a href="'+links[0]+'">'+names[0]+'</a>';
// var fb = '<a href="'+links[1]+'">'+names[1]+'</a>';
// var vk = '<a href="'+links[2]+'">'+names[2]+'</a>';
// var a = [google,fb,vk];
// showArray(a)



// ---------Task 04---------
// var a = [2,4,9,3,-7];
// var min = a[0];
// var buf_min = 0;
// var b = 0;
// for(var j = 0; j<a.length; j++){
// 	for (var i = j; i<a.length; i++){
// 		if(min>a[i]) {
// 			min=a[i];
// 			buf_min=i;
// 		}
// 	}
//     a[buf_min] = a[j];
// 	a[j]=min;
// 	b++;
// 	min=a[b];
// }
// console.log(a);
