//alert("el profesor Arnulfo es el mejor Xd");
var tap = document.getElementById("tablero");
var lienzo = tap.getContext("2d");
var clean = document.getElementById ("limpiar");
clean.addEventListener("click",limpieza)
var draw = document.getElementById ("dibujar");
draw.addEventListener("click",startdraw)
//solicitar cantidad de lineas 
var lineas = document.getElementById("cantidaddelineas");

dibujarLinea("rgb(2, 71, 71)", 0, 0, 300,0)
dibujarLinea("rgb(2, 71, 71)", 0, 0, 0,300)
dibujarLinea("rgb(2, 71, 71)", 0, 300, 300,300)
dibujarLinea("rgb(2, 71, 71)", 300, 0, 300,300)



function dibujarLinea(color ,xi, yi, xf, yf)
{
lienzo.beginPath();
lienzo.strokeStyle = color
lienzo.moveTo(xi, yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}
function startdraw(){
    var lin = lineas.value
    var espacio = 300/lin
   var color1 = document.getElementById("color1").value
   var color2 = document.getElementById("color2").value
   var color3 = document.getElementById("color3").value
   var color4 = document.getElementById("color4").value
for(l = 0; l < lin; l++)
{
    dibujarLinea(color2, espacio*l, 0, 300, espacio*(l+1))  
    dibujarLinea(color3, 0, espacio*l, espacio*(l+1), 300)
    dibujarLinea(color4, l*espacio, 300, 300, 300-espacio*(l+1))    
    dibujarLinea(color1, 300-l*espacio, -l*0, 0, espacio*(l+1))    
}   
}
function limpieza() {
    lienzo.clearRect(1, 1, 298, 298)
}