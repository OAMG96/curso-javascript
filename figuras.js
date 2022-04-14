
//CODIGO CUADRADO
console.group("Cuadrados");
const LadoCuadrado = 5;
console.log('los lados del cuadrado miden:' + LadoCuadrado+"cm");

const PerimetroCuadrado = LadoCuadrado * 4;
console.log('El perimetro del cuadrado es' + LadoCuadrado * 4 + "cm");

const AreaCuadrado = LadoCuadrado * LadoCuadrado;
console.log('los lados del cuadrado miden:' + LadoCuadrado * LadoCuadrado +'cm^2');
console.groupEnd();

//CODIGO TRIANGULO
console.group("Triangulo");
const LadoTriangulo1 = 5;
const LadoTriangulo2 = 5;
const BaseTriangulo = 5;
console.log('los lados del triangulo miden:'
 + LadoTriangulo1 
 + LadoTriangulo2 
 + BaseTriangulo 
 +"cm");

 const AlturaTriangulo = 5.5;
 console.log('La altura del triangulo es:' + AlturaTriangulo+'cm^2');

const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2+ AlturaTriangulo;
console.log('El perimetro del Triangulo es' + PerimetroTriangulo+ "cm");

const AreaTriangulo = (BaseTriangulo * AlturaTriangulo) /2;
console.log('los lados del cuadrado miden:' + AreaTriangulo +'cm^2');

console.groupEnd();


//CODIGO CIRCULO
console.group("CIRCULO")

//Radio
const RadioCirculo = 4;
console.log('El radio del circulo es' + RadioCirculo+ "cm");



//Diametro
const DiametroCirculo = RadioCirculo * 2;
console.log('El diametro del circulo es' + DiametroCirculo+ "cm");

//PI
const PI = Math.PI;
console.log('PI ES ' + PI+ "cm");

//Circuenferencia
const PerimetroCirculo = DiametroCirculo * PI;
console.log('el perimetro del circulo es' + PerimetroCirculo+ "cm");

//Area 
const AreaCirculo = (RadioCirculo * RadioCirculo) * PI;
console.log('El area del circulo es' + AreaCirculo+ "cm");


console.groupEnd();

