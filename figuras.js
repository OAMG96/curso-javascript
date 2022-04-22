
//CODIGO CUADRADO
console.group("Cuadrados");
//const LadoCuadrado = 5;
//console.log('los lados del cuadrado miden:' + LadoCuadrado+"cm");
function PerimetroCuadrado (lado){
    return lado * 4;
}

//console.log('El perimetro del cuadrado es' + LadoCuadrado * 4 + "cm");
//const AreaCuadrado = LadoCuadrado * LadoCuadrado;
function AreaCuadrado(lado){
    return lado * lado;
}
//console.log('los lados del cuadrado miden:' + LadoCuadrado * LadoCuadrado +'cm^2');
console.groupEnd();

//CODIGO TRIANGULO
 console.group("Triangulo");
// const LadoTriangulo1 = 5;
// const LadoTriangulo2 = 5;
// const BaseTriangulo = 5;
// console.log('los lados del triangulo miden:'
//  + LadoTriangulo1 
//  + LadoTriangulo2 
//  + BaseTriangulo 
//  +"cm");

function PerimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

 //const AlturaTriangulo = 5.5;
 //console.log('La altura del triangulo es:' + AlturaTriangulo+'cm^2');

// const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2+ AlturaTriangulo;
// console.log('El perimetro del Triangulo es' + PerimetroTriangulo+ "cm");

// const AreaTriangulo = (BaseTriangulo * AlturaTriangulo) /2;
// console.log('los lados del cuadrado miden:' + AreaTriangulo +'cm^2');
function AreaTriangulo(base,altura){
    return (base * altura) /2;
}

console.groupEnd();


//CODIGO CIRCULO
console.group("CIRCULO")

//Radio
//const RadioCirculo = 4;
//console.log('El radio del circulo es' + RadioCirculo+ "cm");



//Diametro
//const DiametroCirculo = RadioCirculo * 2;
//console.log('El diametro del circulo es' + DiametroCirculo+ "cm");
function RadioCirculo(radio){
return radio * 2;
}

//PI
const PI = Math.PI;
console.log('PI ES ' + PI+ "cm");

//Circuenferencia
// const PerimetroCirculo = DiametroCirculo * PI;
// console.log('el perimetro del circulo es' + PerimetroCirculo+ "cm");
function PerimetroCirculo(radio){
    const diametro = diametrocirculo(radio);
  return diametro * PI;
}

//Area 
// const AreaCirculo = (RadioCirculo * RadioCirculo) * PI;
// console.log('El area del circulo es' + AreaCirculo+ "cm");
function AreaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//Aqui interactuamos con el HTML EL CUADRADO

function calcularPerimetrocuadrado(){
    const input = document.getElementById("Inputcuadrado");
    const value = input.value;
    
    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreacuadrado(){
    const input = document.getElementById("Inputcuadrado");
    const value = input.value;
    
    const area = AreaCuadrado(value);
    alert(area);  
}

//Aqui interactuamos con el HTML EL TRIANGULO

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputtrianguloA");
    const value = input.value;

    const perimetro = PerimetroTriangulo(value);
    alert(perimetro);
}


//Aqui interactuamos con el HTML EL CIRCULO
