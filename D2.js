/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 10;
const numero2 = 5;


if (numero1 < numero2) {
  console.log(numero1, " è minore di ", numero2)
} else if (numero2 < numero1) {
  console.log(numero2, " è minore di ", numero1)
} else {
  console.log(numero1, "è uguale a ", numero2)};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 4
if (n1 !== 5) {
  console.log("Not equal")
 } else {console.log("Equal")}






//inutile quello che ho fatto qui a capo
// console.log(numero1 === numero2);





/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const a = 5;
const b = 15;
// const c = b / a;
// console.log (c);


if(b % 5 === 0) {
  console.log("Divisibile per 5")
}

// oppure --> console.log(b / a)




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 12;
const num2 = num1 - 4;
const num3 = num1 + num2
console.log(num2, num3);

if (num1 === 8) {
  console.log("Il primo numero è uguale a 8")
} else if (num2 === 8) {
  console.log("Il secondo numero è uguale a 8")
} else if (num3 === 8) {
  console.log("La somma del primo e del terzo numero è uguale a 8")
} else { console.log("Nessun numero è uguale a 8")}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let totalShoppingCart = 20;
 let shipCost = 10
 let amountT = totalShoppingCart

if (totalShoppingCart > 50) {
  console.log("La spedizione è gratuita, il conto toale è di", amountT, "€")
 } else {amountT += shipCost,  console.log("Il costo della spedizone è",shipCost, "€ il conto totale è di", amountT,"€" )};



 //Oppure

 //  if (totalShoppingCart > 50) {
//   console.log("La spedizione è gratuita")
//  } else {amountT +=shipCost,  console.log("Il costo della spedizone è 10 €")};

//  console.log("totale da pagare", amountT)

 
 //Oppure

//  let totalSh = 65
// let shippingCost = 10
// let amount = totalSh

// if (totalSh > 50) {
//   amount += shippingCost
// }

// console.log("totale da pagare", amount)




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// meglio così
let totalShoppingCart2= 65
totalShoppingCart2 = totalShoppingCart2* 0.8
let shippingCost2= 10
let amountToPay2 = totalShoppingCart2

if(totalShoppingCart2 < 50){
  amountToPay2 += shippingCost2 
}
console.log("totale da pagare", amountToPay2)


//vabe ci sta ma è più lungo
const discount = 0.20
let prod1 = 100* discount;
let prod1a = 100 - prod1;
console.log(prod1a)

let prod2 = 20* discount;
let prod2a = 20 - prod2
console.log(prod2a)

let somma1= prod1a + prod2a;
console.log(somma1);

let totalDiscount = somma1;
console.log ("Sconto del 20% su ogni prodotto applicato, somma totale: ", totalDiscount, "€");

if (totalDiscount > 50) {
  console.log("La spedizione è gratuita")
 } else {console.log("Il costo della spedizone è di 10 €")};





/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let z1 = 2
let z2 = 11
let z3 = 6

if(z1 >= z3) {
  if (z2 >= z1) {
    conosle.log(z2, z1, z3)
  } else if (z2 >= z3) {
    console.log(z1, z2, z3)
  } else {console.log(z1, z3, z2)}
} even if (z2 >= z3) { 
  console.log(z2, z3, z1)
} 

}
*/


let z1 = 6
let z2 = 14
let z3 = 10

if (z1 >= z2) {
  if (z3 >= z1) {
    console.log(z3, z1, z2)
  } else {
    if (z3 >= z2) {
      console.log(z1, z3, z2)
    } else {
      console.log(z1, z2, z3)
    }
  }
} else {
  if (z3 >= z2) {
    console.log(z3, z2, z1)
  } else {
    if (z3 >= z1) {
      console.log(z2, z3, z1)
    } else {
      console.log(z2, z1, z3)
    }
  }
}




/* NOOOOOOOOOOOOO!!!!!
let var1 =  [4, 2, 6]; 

var1.sort();
console.log(var1);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "Laura";
let age1 = 24;

console.log(typeof age1);
console.log(name1 === age1);

if (typeof age1 === "number"){
  console.log ("è un numero")
} else  {
  console.log("non è un numero")
}

/* Oppure
let test = "Ciao"

if(typeof test === "number") {
  console.log(test, "è un numero!")
} else {
  console.log(test, "non è un numero!")
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 10;
let risultato = (numero % 2);

if (risultato > 0) {
  console.log("Numero dispari")
} else { console.log("Numero pari")
}

console.log(risultato);

/* oppure
let test2 = 31

if (test2 % 2 === 0) {
  console.log("Pari")
} else {
  console.log("Dispari")
}




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

  let val1 = 4
  if (val1 < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

    let val2 = 11
    if (val2 < 10) {
        console.log("Meno di 10");
      } else if (val < 5) {
        console.log("Meno di 5");
      } else {
        console.log("Uguale a 10 o maggiore");
      }





/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);





/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);





/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop('css'); //non importava inserire css tra le parentesi
console.log(me);



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let fila = [];

fila.push[1]
fila.push[2]
fila.push[3]
fila.push[4]
fila.push[5]
fila.push[6]
fila.push[7]
fila.push[8]
fila.push[9]
fila.push[10]

console.log (fila);




// è SBAGLIATO!!!
// fila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];






/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let newFila = fila.slice(9, 1, 100)
// serve a eliminare più elementi alla volta

fila.pop(10);
console.log(fila);

fila.push(100)
console.log(fila)

//oppure se lo voi ottimizzato 

fila[9] = 100
console.log(fila)