/* Melanie Grimminck
Programma zet ingevoerde getallen om in woorden (bv 431 wordt vierhonderdeenendertig) met een ondersteuning tot en met honderdduizend
De functie convertNumber() haalt de gebruikersinput op en geeft het resultaat weer op de pagina.
De functie numberToWord(number) zet een getal om naar een woor door middel van een aantal if-statements 
*/

function convertNumber() {
    const userInput = document.getElementById("userInput").value; //geeft ingevoerde waarde terug
    const resultField = document.getElementById("result");
  
    if (userInput) {
      const  strippedUserInput= userInput.replace(/[.,]/g, ""); // Verwijder punten en komma's uit de invoer
      const result = numberToWord(parseInt(strippedUserInput, 10)); //zet de string om naar een int
      resultField.innerHTML = result;
    } else {
        resultField.innerHTML = "Voer een getal in cijfers (bv. 13 of 433)";
    }
  }

function numberToWord(number) {
    // Deze arrays definiëren de woorden voor eenheden, tientallen en getallen van 11 tot en met 19
    const eenheden = ["nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen"];
    const tientallen = ["", "tien", "twintig", "dertig", "veertig", "vijftig", "zestig", "zeventig", "tachtig", "negentig"];
    const elfTotNegentien = ["elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien"];
  
    // Deze functie zet een getal om naar een woord
    function convertToWords(number) {
      // Als het getal kleiner is dan 10 geef dan het getal van de overeenkomstige index uit de eenheden-array terug.
      if (number < 10) {
        return eenheden[number];
      }
      // Als het getal 10 t/m 19 is geef dan het getal van de overeenkomstige index uit de elfTotNegentien-array terug
      // Deze is apart omdat de getallen van 11 t/m 19 niet volgens een vast patroon gaan

    //   if (number === 10 || (number > 10 && number < 20)) { // als number 10 is of tussen 10 en 20
    //     if (number === 10) {
    //       return tientallen[number / 10];
    //     } else {
    //       return elfTotNegentien[number - 11];
    //     }
    //   }  vb van mijn originele code

    if (number >= 11 && number <= 19) {
        return elfTotNegentien[number - 11];
      } else if (number === 10) {
        return tientallen[1];
      } 
      
      // Als het getal tussen 20 en 100 ligt, retourneer dan het woord voor het tiental gevolgd door het woord voor het eenheidscijfer.
      // vb 37 
      // if tussen 20 en 100 
      // dan dertig + zeven dertig remainder 7
      // eenheden 7 = zeven
      // zeven + en + "
      //tientallen 3 = dertig / 10 = 3 (index 3 in tientallen array)
      // dertig + zeven = zevenendertig
      if (number >= 20 && number < 100) {
        return (number % 10 > 0 ? eenheden[number % 10] + "en" : "") + tientallen[Math.floor(number / 10)]; 
      }

      // Als het getal tussen 100 en 1000 ligt, retourneer dan het woord voor het honderdtal gevolgd door het woord voor het resterende getal.
      if (number >= 100 && number < 1000) {
        return (Math.floor(number / 100) === 1 ? "" : eenheden[Math.floor(number / 100)]) + "honderd" + (number % 100 > 0 ? "en" + convertToWords(number % 100) : "");
      }
      
      if (number >= 1000 && number < 10000) {
        return (Math.floor(number / 1000) === 1 ? "" : eenheden[Math.floor(number / 1000)]) + "duizend" + (number % 1000 > 0 ? convertToWords(number % 1000) : "");
      }
      
      if (number >= 10000 && number < 100000) {
        return (number % 10000 > 0 ? convertToWords(Math.floor(number / 1000)) : "") + "duizend" + (number % 1000 > 0 ? convertToWords(number % 1000) : "");
      }
      
      // Groter dan 100.000 geeft een foutmelding
      return "Honderdduizend of groter nog niet beschikbaar";
    }
  
    // Geeft het resultaat van de functie terug
    return convertToWords(number);
  }
  console.log(numberToWord(0)); 
  console.log(numberToWord(1)); 
  console.log(numberToWord(10)); 
  console.log(numberToWord(11)); 
  console.log(numberToWord(19)); 
  console.log(numberToWord(20));
  console.log(numberToWord(55)); 
  console.log(numberToWord(33));
  console.log(numberToWord(32)); 
  console.log(numberToWord(49)); 
  console.log(numberToWord(99)); 
  console.log(numberToWord(100)); 
  console.log(numberToWord(105)); 
  console.log(numberToWord(155));
  console.log(numberToWord(666)); 
console.log(numberToWord(1234));
console.log(numberToWord(54321)); 
console.log(numberToWord(99999)); 
console.log(numberToWord(100000)); 