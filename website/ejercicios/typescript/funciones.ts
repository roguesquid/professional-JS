//Funciones
function add(a:number, b:number):number {
  return a + b;
}

const sum = add(4,6);
//funciones que retornan funciones
function createAdder(a:number): (number) => number {
  return function (b:number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//parametros opcionales
//al lado del parametro ponemos ? para indicar que es opcional el parametro
function Fullname(firstName: string, lastName?:string):string {
  return `${firstName} ${lastName}`
}

const luis = Fullname("Luis");

//si queremos que un parametro tenga un valor por omision
function nombreCompleto(firstName: string, lastName:string = "Smith"):string {
  return `${firstName} ${lastName}`
}

const joker = nombreCompleto("Joker");