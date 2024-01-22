let plaimFlour = 210;
let sugar = 50;
let bakingPowder = 2;
let butter = 55;
let vanilla = 2;
let eggs = 2;
let milk = 240;

/* First step */
let firstStep = "Aggiungere la farina allo zucchero,totale:";

console.log(firstStep);

console.log(plaimFlour + sugar);

/*Total grams */
let addAll = "Aggiungi tutti gli altri ingredienti: burro, lievito, uova, vaniglia, latte.";

console.log(addAll);

console.log(plaimFlour + sugar + bakingPowder + butter + vanilla + eggs + milk);

/*we want remove milk - plaimFlour */
let removePlaimFlour = "Togli la farina dal latte, e il loro peso sarà:";

console.log(removePlaimFlour);

console.log(milk - plaimFlour);

/* we want multiply*/
let multiply = "Moltiplica le uova per 2";

console.log(multiply);

console.log(eggs * vanilla);

/*we want divide */
let divide = "Dividi lo zucchero in due";

console.log(divide);

console.log(sugar / 2);

/*Rest */
let rest = "vedi se vi è resto";

console.log(rest);

console.log(milk % 2);
console.log(butter % 2);

/*Type string or number*/
let stringOrNumber = "Vedere se è una String o Number";

console.log(stringOrNumber);

console.log(typeof milk);

console.log(typeof milk.toString());

/*True or False */
let trueOrFalse = "Vedere se le affermazioni sono Vere o False!";

console.log(trueOrFalse);

console.log(milk === sugar);
console.log(vanilla === eggs);

/*Disuguaglianza stretta */
let disuguaglianzaStretta = "Disuguaglianza stretta fa diventare una risposta falsa a vera o viceversa!";

console.log(disuguaglianzaStretta);

console.log(milk !== sugar);

/* HO CERCATO DI APPLICARE QUASI TUTTE LE VARIABILI VISTE IN LEZIONE!! */
