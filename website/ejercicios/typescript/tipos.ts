// Boolean
let muted: boolean = true;
muted = false;

//Numeros

let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador / denominador;

//String
let nombre: string = "Richard"
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(756);

//Enum

enum Color {
  rojo = "Rojo",
  verde = "Verde",
  azul = "Azul",
}

let colorFavorito: Color = Color.azul;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = "Joker";
comodin = {type: "wildcard"}

//Object
let someObject: object  = {type: "wildcard"}