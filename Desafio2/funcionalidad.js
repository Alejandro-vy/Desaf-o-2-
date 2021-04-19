//const primerValor = document.getElementById("primerValor");
//const valorActual = document.getElementById("valorActual");
const numerosBoton = document.getElementsByName("numerobtn");
const signosBtn = document.getElementsByName("signos");
var esIgual = document.getElementById("esIgual");
var valorActual="";
var valorAnterior="";
var operacion = undefined;


numerosBoton.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
        //alert(boton.innerText);
        
    }) 
});
signosBtn.forEach(function(boton){
    boton.addEventListener('click',function(){
        elegirOperacion(boton.innerText);
        
    }) 
});
esIgual.addEventListener('click',function(){
    operacion();
    mostrarPantalla();

});

document.getElementById("suma").addEventListener("click", function () { operacion("suma") })
document.getElementById("resta").addEventListener("click", () => operacion("resta"))
document.getElementById("division").addEventListener("click", () => operacion("division"))
document.getElementById("multiplicacion").addEventListener("click", () => operacion("multiplicacion"))

const suma = (n1, n2) => parseFloat(n1) + parseFloat(n2);
const resta = (n1, n2) => parseFloat(n1) - parseFloat(n2);
const division = (n1, n2) => parseFloat(n1) / parseFloat(n2);
const multiplicacion = (n1, n2) => parseFloat(n1) * parseFloat(n2);

function mostrarPantalla(){
    esIgual.value = valorActual;
}
function borrarTodo(){
    var valorActual="";
    var valorAnterior="";
    var operacion = undefined;
    mostrarPantalla();
}

function agregarNumero(numero){
    valorActual = valorActual.toString() + numero.toString;
    mostrarPantalla();
}

function borrarNro(){

}

function elegirOperacion(){
    if(valorAnterior != ""){
        operacion();
    }
    operacion = op.toString();
    valorAnterior =valorActual;
    valorActual="";
}

function operacion(){
    var operacion;
    const n1 = parseFloat(valorAnterior);
    const n2 = parseFloat(valorActual);
    
    if (n1 == "" || n2 == "") {
        esIgual.innerHTML = "<span class='danger'>Ingrese números validos</span>";
    } else {
        switch (operacion) {
            case "suma":
                esIgual.innerHTML = `esIgual ${operacion}: ${suma(n1, n2)}`;
                break;
            case "resta":
                esIgual.innerHTML = `esIgual ${operacion}: ${resta(n1, n2)}`;
                break;
            case "division":
                if (parseFloat(n2) === 0) {
                    esIgual.innerHTML = "<span class='danger'>Error: División por cero</span>";
                } else {
                    esIgual.innerHTML = `esIgual ${operacion}: ${division(n1, n2)}`;
                }
                break;
            case "multiplicacion":
                esIgual.innerHTML = `esIgual ${operacion}: ${multiplicacion(n1, n2)}`;
                break;
            default:
                break;
        }
    }
}




