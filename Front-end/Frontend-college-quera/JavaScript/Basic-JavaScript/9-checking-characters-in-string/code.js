const barchasb = readline();
let arraybarchasb = barchasb.split("");

let G = 0;
let Y = 0;
let R = 0;
let d = 0;

for(let i = 0 ; i < 5 ; i++){
    switch (arraybarchasb[i]) {
        case 'G':
            G++;
            break;
        case 'R':
            R++;
            break;
        case 'Y':
            Y++;
            break;
        default:
            d++;
    }
}

let message = (R >= 3 ||(R >= 2 && Y >= 2) || G == 0) ? "nakhor lite" : "rahat baash" ;
console.log(message);

/// the simpler way:
const label = readline();
let R = 0, Y = 0, G = 0;
for (let i = 0; i < 5; i++) {
    const l = label[i];
    if (l === "R") R++;
    if (l === "Y") Y++;
    if (l === "G") G++;
}
const danger = (R >= 3) || (R >= 2 && Y >= 2) || (G === 0);
console.log(danger ? "nakhor lite" : "rahat baash");