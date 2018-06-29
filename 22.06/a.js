var volume = parseFloat (prompt("Enter volume of the tank"));
var fuel = parseFloat (prompt("Enter initial quantity of fuel"));
var cargo = parseFloat (prompt("Enter cargo mass, maximum = 5 tons"));
var ab = parseFloat (prompt("Enter distance AB"));
var bc = parseFloat (prompt("Enter distance BC"));

if(cargo<=1) var fuel_consumption = 25;
else if(cargo<=2) var fuel_consumption = 30;
else if(cargo<=3) var fuel_consumption = 35;
else if(cargo<=4) var fuel_consumption = 42;
else if(cargo<=5) var fuel_consumption = 50;
else alert("the plane will not take off");

var spent_fuel = fuel_consumption*(ab+bc)/100;
var spent_fuel_ab = fuel_consumption*ab/100;

if(fuel>volume) alert("Invalid input: бак не резиновый");
else if(fuel<spent_fuel_ab)alert("Самолёт взлетит, но не долетит до пункта AB.");
else if(fuel<spent_fuel){
    var fuel_up = spent_fuel-fuel;
    alert("Самолёт взлетит, но чтобы долететь до пункта AC, вам надо дозоправится в пункте AB: "+ fuel_up + " литров.");
}
else alert("Самолёт долетит до пункта AC без дозаправки.");