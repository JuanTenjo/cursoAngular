function sumar(a: number,b: number): number{
    return (a + b);
}

const sumerFlecha = (a: number,b: number): number => {
    return a + b;
}

function multiplicar (numero: number, base: number, otroNumero?: number): number{
    return numero * base;
}

interface PersonageLoR{
    nombre: string,
    pv: number;
}

function curar(personage: PersonageLoR, curarX: number): void {
    personage.pv += curarX; 
    console.log(personage);
}

const nuevoPersonage: PersonageLoR = {
    nombre: 'jUAN',
    pv: 50,
}

curar(nuevoPersonage,20);

const resultado = sumar(1, 5);
const resultado2 = multiplicar(1, 5);

console.log(resultado);