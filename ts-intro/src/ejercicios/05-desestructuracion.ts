
/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number,
    segundo: number,
    canciom: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number,
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    canciom: 'Mess',
    detalles: {
        autor: 'eD sHEERAN',
        anio: 2015
    }
}

//const {volumen,segundo,canciom, detalles: {autor}} = reproductor;
const {volumen,segundo,canciom, detalles} = reproductor;
const {autor} = detalles;

console.log('EL volumen actual es de: ', volumen);
console.log('EL segundp actual es de: ', segundo);
console.log('EL cancion actual es de: ', canciom);
console.log('EL autor actual es de: ', autor);


const dbz: string[] = ['Goku','Vegeta','Trunk'];
const [p1,p2,p3] = dbz;

console.log('Personage 1: ',p1)
console.log('Personage 2: ',p2)
console.log('Personage 3: ',p3 )


