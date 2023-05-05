/* Melanie Grimminck
Programma zet ingevoerde getallen om in woorden (bv 431 wordt vierhonderdeenendertig) met een ondersteuning tot en met honderdduizend
De functie convertNumber() haalt de gebruikersinput op en geeft het resultaat weer op de pagina.
De functie convertToWords(number) zet een getal om naar een woor door middel van een aantal if-statements 
*/

function convertNumber() {
  const userInput = document.getElementById("userInput").value; //geeft ingevoerde waarde terug
  const resultField = document.getElementById("result");

  if (userInput) {
    const strippedUserInput = userInput.replace(/[.,]/g, ""); // Verwijder punten en komma's uit de invoer
    const result = convertToWords(parseInt(strippedUserInput, 10)); //zet de string om naar een int
    resultField.innerHTML = result;
  } else {
    resultField.innerHTML = "Voer een getal in cijfers (bv. 13 of 433)";
  }
}

// Define the words for units, tens and numbers from 11 to 19
const eenheden = new Map([
  [0, "nul"],
  [1, "een"],
  [2, "twee"],
  [3, "drie"],
  [4, "vier"],
  [5, "vijf"],
  [6, "zes"],
  [7, "zeven"],
  [8, "acht"],
  [9, "negen"]
]);

const elfTotNegentien = new Map([
  [11, "elf"],
  [12, "twaalf"],
  [13, "dertien"],
  [14, "veertien"],
  [15, "vijftien"],
  [16, "zestien"],
  [17, "zeventien"],
  [18, "achttien"],
  [19, "negentien"]
]);

const tientallen = new Map([
  [10, "tien"],
  [20, "twintig"],
  [30, "dertig"],
  [40, "veertig"],
  [50, "vijftig"],
  [60, "zestig"],
  [70, "zeventig"],
  [80, "tachtig"],
  [90, "negentig"]
]);

// This function converts a number to a word
function convertToWords(number) {
  if (number < 10) {
    return eenheden.get(number);
  }

  if (number >= 11 && number <= 19) {
    return elfTotNegentien.get(number);
  }

  if (number === 10 || (number >= 20 && number < 100)) {
    return (number % 10 > 0 ? eenheden.get(number % 10) + "en" : "") + tientallen.get(Math.floor(number / 10) * 10);
  }

  if (number >= 100 && number < 1000) {
    return (Math.floor(number / 100) === 1 ? "" : eenheden.get(Math.floor(number / 100))) + "honderd" + (number % 100 > 0 ? "en" + convertToWords(number % 100) : "");
  }

  if (number >= 1000 && number < 10000) {
    return (Math.floor(number / 1000) === 1 ? "" : eenheden.get(Math.floor(number / 1000))) + "duizend" + (number % 1000 > 0 ? convertToWords(number % 1000) : "");
  }

  if (number >= 10000 && number < 100000) {
    if (number === 10000) {
      return "tienduizend";
    }
    return (number % 10000 > 0 ? convertToWords(Math.floor(number / 1000)) : "") + "duizend" + (number % 1000 > 0 ? convertToWords(number % 1000) : "");
  }
  if (number >= 100000 && number < 1000000) {
  return "Honderdduizend or larger not yet available";}
  return convertToWords(number);
}




console.log("input: 10001" + " output: " + convertToWords(10001));
console.log("input: 10000" + " output: " + convertToWords(10000));
console.log("input: 12345" + " output: " + convertToWords(12345));
console.log("input: 1" + " output: " + convertToWords(1));
console.log("input: 10" + " output: " + convertToWords(10));
console.log("input: 11" + " output: " + convertToWords(11));
console.log("input: 19" + " output: " + convertToWords(19));
console.log("input: 20" + " output: " + convertToWords(20));
console.log("input: 55" + " output: " + convertToWords(55));
console.log("input: 33" + " output: " + convertToWords(33));
console.log("input: 32" + " output: " + convertToWords(32));
console.log("input: 49" + " output: " + convertToWords(49));
console.log("input: 99" + " output: " + convertToWords(99));
console.log("input: 100" + " output: " + convertToWords(100));
console.log("input: 105" + " output: " + convertToWords(105));
console.log("input: 155" + " output: " + convertToWords(155));
console.log("input: 666" + " output: " + convertToWords(666));
console.log("input: 1234" + " output: " + convertToWords(1234));
console.log("input: 54321" + " output: " + convertToWords(54321));
console.log("input: 99999" + " output: " + convertToWords(99999));
console.log("input: 100000" + " output: " + convertToWords(100000));

