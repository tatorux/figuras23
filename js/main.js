function fcirculo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className="";
    selector.classList.toggle("circulo"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}
function frombo() {
    var selector = document.getElementById("figura");
    selector.className="";
    selector.classList.toggle("rombo");
}
function frectangulohorizontal(){
      var selector = document.getElementById("figura");
      selector.className="";
    selector.classList.toggle("rectangulohorizontal");
}
function frectangulovertical(){
    var selector = document.getElementById("figura");
    selector.className="";
  selector.classList.toggle("rectangulovertical");
}
function farriba(){
  var selector=document.getElementById("figura");
  selector.className='';
  selector.classList.toggle("arriba");
}
function fabajo(){
  var selector=document.getElementById("figura");
  selector.className="";
  selector.classList.toggle("abajo");
}
function fderecha(){
  var selector=document.getElementById("figura");
  selector.className="";
  selector.classList.toggle("derecha");
}
function fizquierda(){
  var selector=document.getElementById("figura");
  selector.className="";
  selector.classList.toggle("izquierda"); 
}
function fdiagonal(){
  var selector=document.getElementById("figura");
  selector.className="";
  selector.classList.toggle("diagonal"); 
}
function operaciones(){
var a=Number(document.getElementById("valor1").value);
var b=Number(document.getElementById("valor2").value);

var operacion=document.getElementById("operaciones").value;
switch (operacion) {
  case "+":
    resultado=a+b;
    document.getElementById("respuesta").value=resultado;
    break;
    case "-":
      resultado=a-b;
      document.getElementById("respuesta").value=resultado;
      break;
      case "*":
    resultado=a*b;
    document.getElementById("respuesta").value=resultado;
    break;
    case "/":
    resultado=a/b;
    document.getElementById("respuesta").value=resultado;
    break;

 
}
}
    function chatActive(){
    var selector=document.getElementById("chat");
    selector.classList.toggle("active");
    var selector2=document.getElementById("btnchat");
    selector2.classList.toggle("active");

}


