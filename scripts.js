const initialLipids = "TAC";
const varyingLipids = ["ACT", "ATT", "ATC"];
const lipids = ["A", "T", "C", "G"];
const oppositeLipids = {
    A: "U",
    T: "A",
    C: "G",
    G: "C",
};
const traduccionDOGMA = {
    UUU: "Phe",
    UUC: "Phe",
    UUA: "Leu",
    UUG: "Leu",
    CUU: "Leu",
    CUC: "Leu",
    CUA: "Leu",
    CUG: "Leu",
    AUU: "Iso",
    AUC: "Iso",
    AUA: "Iso",
    AUG: "Met",
    GUU: "Val",
    GUC: "Val",
    GUA: "Val",
    GUG: "Val",
    UCU: "Ser",
    UCC: "Ser",
    UCA: "Ser",
    UCG: "Ser",
    CCU: "Pro",
    CCC: "Pro",
    CCA: "Pro",
    CCG: "Pro",
    ACU: "Thr",
    ACC: "Thr",
    ACA: "Thr",
    ACG: "Thr",
    GCU: "Ala",
    GCC: "Ala",
    GCA: "Ala",
    GCG: "Ala",
    UAU: "Tyr",
    UAC: "Tyr",
    UAA: "STOP",
    UAG: "STOP",
    CAU: "His",
    CAC: "His",
    CAA: "Gln",
    CAG: "Gln",
    AAU: "Asn",
    AAC: "Asn",
    AAA: "Lys",
    AAG: "Lys",
    GAU: "Asp",
    GAC: "Asp",
    GAA: "Glu",
    GAG: "Glu",
    UGU: "Cys",
    UGC: "Cys",
    UGA: "STOP",
    UGG: "Try",
    CGU: "Arg",
    CGC: "Arg",
    CGA: "Arg",
    CGG: "Arg",
    AGU: "Ser",
    AGC: "Ser",
    AGA: "Arg",
    AGG: "Arg",
    GGU: "Gly",
    GGC: "Gly",
    GGA: "Gly",
    GGG: "Gly",
};

const outputDiv = document.getElementById("output");
const oppositeOutputDiv = document.getElementById("oppositeOutput");
const showLipidsButton = document.getElementById("showLipidsButton");
const traducciona = document.getElementById("traduccion");

// Agrega un event listener para el botón
showLipidsButton.addEventListener("click", () => {
    // Generar la secuencia de lípidos aleatoriamente
    let lipidSequence = initialLipids;

    for (let i = 0; i < 12  ; i++) {
        const randomIndex = Math.floor(Math.random() * lipids.length);
        lipidSequence += lipids[randomIndex];
    }

    // Agregar una secuencia de lípidos variante aleatoria
    const randomVaryingIndex = Math.floor(Math.random() * varyingLipids.length);
    lipidSequence += varyingLipids[randomVaryingIndex];

    // Mostrar la secuencia de ADN generada
    outputDiv.textContent = `Secuencia de ADN: ${lipidSequence}`;

    // Generar la secuencia de lípidos opuestos
    let oppositeLipidSequence = "";
    for (let i = 0; i < lipidSequence.length; i++) {
        const currentLipid = lipidSequence[i];
        const oppositeLipid = oppositeLipids[currentLipid];
        oppositeLipidSequence += oppositeLipid;
    }

    // Mostrar la secuencia de lípidos opuestos (transcripción)
    oppositeOutputDiv.textContent = `Transcripción: ${oppositeLipidSequence}`;

    // Traducir la secuencia de lípidos a aminoácidos
    let traduccionxd = "";
    for (let i = 0; i < oppositeLipidSequence.length; i += 3) {
        const currentCodon = oppositeLipidSequence.substr(i, 3);
        const aminoAcid = traduccionDOGMA[currentCodon];
        traduccionxd += aminoAcid + " ";
    }

    // Mostrar la traducción de aminoácidos
    traducciona.textContent = `Traducción: ${traduccionxd}`;
});
