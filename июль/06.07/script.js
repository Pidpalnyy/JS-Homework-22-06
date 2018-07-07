// ---------Task 01---------
var a = [2,4,7,3,9];
var min = a[0];
var max = a[0];
var buf_min = 0;
var buf_max = 0;
for (var i = 0; i<a.length; i++){
	if(min>a[i]) {
		min=a[i];
		buf_min=i;
	}
	if(max<a[i]) {
		max=a[i];
		buf_max=i;
	}
}
a[buf_min] = max;
a[buf_max] = min;
document.write("min => "+min+"<br>");
document.write("max => "+max+"<br>");
document.write("buf_min => "+buf_min+"<br>");
document.write("buf_max => "+buf_max+"<br>");
console.log(a);
