enum Color {
  Rojo = "Rojo",
  Verde = "Verde"
}

//INTERFACES

//Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.
interface Rectangulo {
  ancho:number
  alto:number
  //tambien podemos hacerlo opcional
  color?: Color
}

let rect: Rectangulo = {
  ancho:4,
  alto: 6,
  color: Color.Verde
}

function area(r: Rectangulo) {
  return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectángulo`
}
