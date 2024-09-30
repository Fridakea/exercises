"use strict";

// Parametre defineret
const moms = 1.25;
const beloeb = 100;

// Kalder funktionen som beregner beløbet med moms
momsBeregner(moms, beloeb);

// Selve momsberegner funktionen, som retunerer beløbet + moms
function momsBeregner(beloeb, moms) {
    return beloeb + moms;
}

// Console log af beløbet inkl. moms
console.log(momsBeregner(120, moms));