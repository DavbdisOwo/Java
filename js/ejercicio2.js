
let figura = prompt("Escribe que figura deseas utilizar : Triangulo , Rectangulo , Circulo , Cuadrado , Rombo , Paralelogramo , Trapecio y Poligono Regular")


let base;
let altura;
let radio;
let diagonal;
let perimetro;
let apotema;

switch(figura){
    case "triangulo":
        base = prompt("¿Cuanto tienes de base?: ")
        altura = prompt("¿Cuanto tienes de altura?")
        console.log(`El area del triangulo es ${base*altura/2}`)
        break
    case "rectangulo":
        base = prompt("¿Cuanto tienes de base?: ")
        altura = prompt("¿Cuanto tienes de altura?")
        console.log(`El area del rectangulo es ${base*altura}`)
        break
    case "circulo":
        radio = prompt("¿Cuanto de radio tienes?: ")
        console.log(`El area del circulo es ${Math.PI*Math.pow(radio,2)}`)
        break
    case "cuadrado":
        lado = prompt("¿Cuanto tienes de lado?: ")
        altura = prompt("¿Cuanto tienes de altura?")
        console.log(`El area del cuadrado es ${lado*lado/2}`)
        break
    case "rombo":
        diagonal = prompt("¿Cuanto tienes de diagonal?: ")
        c = prompt("¿Cuanto tienes de c?")
        console.log(`El area del rombo es ${diagonal*c/2}`)
        break
    case "paralelogramo":
        base = prompt("¿Cuanto tienes de base?: ")
        altura = prompt("¿Cuanto tienes de altura?")
        console.log(`El area del paralelogramo es ${altura*base}`)
        break
    case "trapecio":
        a = prompt("¿Cuanto tienes de a?: ")
        b = prompt("¿Cuanto tienes de b?")
        console.log(`El area del trapecio es ${a+b/2*2}`)
        break
    case "poligono regular":
        perimetro = prompt("¿Cuanto tienes de base?: ")
        apotema = prompt("¿Cuanto tienes de altura?")
        console.log(`El area del poligono regular es ${p+a/2}`)
        break
    default:
        console.log("Esta figura no esta disponible")
}