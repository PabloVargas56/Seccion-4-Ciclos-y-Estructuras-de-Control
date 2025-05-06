let a = 5;

if ( a >= 10 ) {
    console.log("a es mayor o igual que 10");
} else {
    console.log("a es menor que 10");
}

console.log("Fin de programa");

const hoy = new Date(); 
let dia = hoy.getDay(); 

console.log({dia});

if ( dia === 0 ) {
    console.log("Domingo");
} else if (dia === 1) {
    console.log("Lunes");
} else if (dia === 2) {
    console.log("Martes");
} else { console.log("No es lunes, martes o domingo...");
}

// Sin  usar IF ELSE, O SWITCH, UNICAMENTE CON OBJETOS

dia = 4;  // o: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado

let diasSemana = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado"
}

console.log(diasSemana[dia] || "Dia no valido");