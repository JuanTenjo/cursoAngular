
/*
    ===== Código de TypeScript =====
*/


class PersonaNormal {
    constructor(public nombre: string, public direccion: string){

    }
}

class Heroe extends PersonaNormal {
    public nombreReal: string;

    constructor(public alterEgo: string, public edad: number, nombreReal: string) {
        super(nombreReal, 'New York, USA');
        this.nombreReal = nombreReal;
    }

}

const ironman = new Heroe('Ironam', 23, 'Jeff');

console.log(ironman);