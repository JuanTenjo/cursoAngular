

/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Couter', 'Headling'];

interface Personage {
    nombre: string;
    hp: number;
    habilidades: string[],
    puebloNatal?: string;
}

const personage: Personage= {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash','Counter']
}

personage.puebloNatal = 'Pueblo paleta'


console.table(personage);