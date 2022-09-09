/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/

const footballTeams =
    [
        { nome: "Milan", falli: 0, punti: 0 },
        { nome: "Inter", falli: 0, punti: 0 },
        { nome: "Juventus", falli: 0, punti: 0 },
        { nome: "Atalanta", falli: 0, punti: 0 },
        { nome: "Bologna", falli: 0, punti: 0 }
    ]

footballTeams.forEach((team) => {
    team.falli = getRandomNumbers(0, 50);
    team.punti = getRandomNumbers(0, 50);
})

console.log(footballTeams);


function getRandomNumbers(min, max) {
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range + min);
    return randomNumber;
}



/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

const arrayNumbers = [3, 9, 15, 22, 33, 72, 80];

function position(a, b, ...array) {
    const newArray = array.filter((elemento, i) => {
        if (i >= a && i <= b) {
            return true;
        }
    })
    return newArray;
}

console.log(position(2, 5, ...arrayNumbers));





/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

/* SNACK 3*/
/*
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
    {
        varietà: "zucchine nano",
        peso: 0.2,
        lunghezza: 10,
    },
    {
        varietà: "zucchine gialle",
        peso: 0.5,
        lunghezza: 4,
    },
    {
        varietà: "zucchine viola",
        peso: 0.5,
        lunghezza: 14,
    },
    {
        varietà: "zucchine gigante",
        peso: 0.8,
        lunghezza: 23,
    },
    {
        varietà: "zucchine soffice",
        peso: 0.5,
        lunghezza: 12,
    },
    {
        varietà: "zucchine simpatico",
        peso: 0.5,
        lunghezza: 30,
    },
    {
        varietà: "zucchine nano",
        peso: 0.2,
        lunghezza: 10,
    },
    {
        varietà: "zucchine giallo",
        peso: 0.5,
        lunghezza: 20,
    },
    {
        varietà: "zucchine blu",
        peso: 0.5,
        lunghezza: 20,
    },
    {
        varietà: "zucchine medio",
        peso: 0.5,
        lunghezza: 10,
    },
];

const zucchineLunghe = [];
const zucchineMenoLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
    const lunghezzazucchine = parseInt(zucchine[i].lunghezza);

    if (lunghezzazucchine > 15) {
        zucchineLunghe.push(zucchine[i]);
    } else {
        zucchineMenoLunghe.push(zucchine[i]);
    }
}

let totZucchineLunghe = 0;

zucchineLunghe.forEach((zucchina) => {
    totZucchineLunghe += zucchina.peso;
});

console.log(totZucchineLunghe);

let totZucchineMenoLunghe = 0;

zucchineMenoLunghe.forEach((zucchina) => {
    totZucchineMenoLunghe += zucchina.peso;
});

console.log(totZucchineMenoLunghe);