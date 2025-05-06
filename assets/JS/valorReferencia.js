let a = 10
let b = a
a = 30 

console.log({a, b});


let juan = {Nombre: "Juan"};
let ana = {...juan};
ana.Nombre = "Ana";


console.log({juan, ana});


const cambiaNombre = ({...persona}) => {
    persona.Nombre = "Tony";
    return persona;
}

let peter = { Nombre: "Peter" };
let tony = cambiaNombre( peter );

console.log(peter, tony);

// Arreglos 

const frutas = ["Manzana", "Pera", "Piña"];

console.time("slice");
const otrasFrutas = frutas.slice(); 
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = [...frutas]; 
console.timeEnd("spread");

otrasFrutas.push("Mango");

console.table({frutas, otrasFrutas});
