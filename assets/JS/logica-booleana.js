const regresaTrue = () => {
    console.log("Regresa true");
    return true;
}

const regresaFalse = () => {
    console.log("Regresa False");
    return false;
}

console.warn("Not o la negacion");
console.log(true); // true
console.log(!true); // false  
console.log(!false); // true   

console.log(!regresaFalse()); // TRUE

console.warn("And"); //TRUE SI TODOS LOS VALORES SON VERDADEROS
console.log(true && true); // true
console.log(true && false); // false   

regresaFalse() && regresaTrue();

console.warn("OR");

console.log(true || false); // true 
console.log(false || false); // false
console.log(regresaTrue() || regresaFalse()); // true




console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && "Hola Mundo";
const a2 = "Hola" && "mundo" && soyFalse;