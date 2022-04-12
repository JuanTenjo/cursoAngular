
/*
    ===== Código de TypeScript =====
*/

interface superHeroe{
    nombre: string;
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string,
}

interface Direccion{
    calle: string,
    pais: string,
    ciudad: string,
}

const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    dicreccion: {
        calle: 'Main',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.dicreccion.ciudad + ', ' + this.dicreccion.pais;
    }
}


const direccion = superHeroe.mostrarDireccion();

console.log(direccion);