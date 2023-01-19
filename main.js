
function changetheme(){
    document.getElementById("body").style.backgroundColor = "red";
    var newColor = document.getElementsByClassName("dato");
    for (var i=0; i<newColor.length; i++) newColor[i].style.color = "blue";
}

function calcular1(){
    var newEdad = Number(document.getElementById("edad").value)* 365 *24;
    document.getElementById("resultado1").innerHTML = newEdad;
}

function calcular2(){
    var perimetro = Number(document.getElementById("lado1").value)*4;
    var area = Number(document.getElementById("lado1").value)*Number(document.getElementById("lado1").value);
    document.getElementById("resultado2").innerHTML = perimetro;
    document.getElementById("resultado3").innerHTML = area;
}
function cambiar(){
    var colors = document.getElementById("color").value;
    document.getElementById("seccion3").style.backgroundColor = colors;
}

function ChangeColor(){
    cR = Math.ceil(Math.random()*255);
    cG = Math.ceil(Math.random()*255);
    cB = Math.ceil(Math.random()*255);

    var colorcito = "rgb("+cR+"," +cG+ ","+cB+")";
    console.log(colorcito);

  document.getElementById("seccion3").style.backgroundColor = colorcito;
}


function generar(){

    no1 = Math.ceil(Math.random()*200);
    no2 = Math.ceil(Math.random()*200);
    answer = no1 * no2;
    document.getElementById("n1").innerHTML = no1;
    document.getElementById("n2").innerHTML = no2;
}

function verificar(){
    var ans_user = document.getElementById("resultado1").value;
    var points = 0;
    
    if(resultado1==answer){
        points = points + 1 ;
        document.getElementById("aciertos").innerHTML = points;
    }
}