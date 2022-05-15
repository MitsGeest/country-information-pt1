console.log('Hallo daar!');


// ====================== INSTRUCTIES ======================
//  [X] 1. Installeer en importeer Axios
//  [X] 2. Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen?
//  [X] 3. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
//  [X] 4. Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
//  [X] 5. Maak een <ul>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;
//  [X] 6. Zorg ervoor dat de naam van het allereerste land wordt weergegeven als <li>-tag in het lijst-element op de pagina;
//  [X] 7. Zorg er nu ook voor dat de populatie (Has a population of [amount] people) daaronder wordt weergegeven;
//  [] 8. Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. Tip: zorg ervoor dat je CSS-classes maakt voor alle regio-kleuren!
//  [] 9. Breidt de <li>-tag uit met een <img>-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven;
//  [] 10. Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;
//  [] 11. Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen mapt om de landen op de pagina weer te geven.



//  ====================== OPDRACHT ======================

// ====================== 1. INSTALLEER EN IMPORTEER AXIOS =============================================================
// In de terminal het commando 'npm install axios' ingevoerd.
// Ik kreeg terug dat axios geïnstalleerd was, maar dat er veel 'old lockfiles' waren en sommige zaken deprecated. Met commando
// 'npm audit fix' opgelost.

import axios from 'axios';



// ====================== 2. DOCUMENTATIE REST API =====================================================================
// Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen?
// Endpoints V2: endpoint = all = https://restcountries.com/v2/all


// ====================== 3. ASYNC FUNCTION & GET-REQUEST ==============================================================
// Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint.
// Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
//
// async function fetchCountries() {
//     try {
//         // het request maken
//         const response = await axios.get('https://restcountries.com/v2/all');
//         console.log(response);
//     } catch(error) {
//         // Later invullen (ik volg de les en daar is dit nog niet gedaan. Maar het idee van de catch error is dat je bij
//         // het mislukken van de request een foutmelding logt / teruggeeft aan de gebruiker
//     }
// }
//
// fetchCountries();

// ====================== 4. CONSOLE LOG NAAM EERSTE LAND ==============================================================
// Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
// Oplossing: het GET-request geeft een array terug met meerdere objects terug met arrays. De informatie die ik nodig
// heb voor deze opdracht staat in het DATA-object. Om de naam van het eerste land te vinden schrijf ik tussen de haken
// van de console log 'VARIABLE.ARRAY[I].OBJECT-KEY'



// async function fetchCountries() {
//     try {
//         // het request maken
//         const response = await axios.get('https://restcountries.com/v2/all');
//         console.log(response.data[0].name);
//     } catch(error) {
//         console.error(error);
//     }
// }
//
// fetchCountries();

// ====================== 5. CREËER HTML REFERENTIEPUNT ================================================================
// Maak een <ul>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand
// 0.1 Volg de uitleg van Nova in de les [JAVASCRIPT] Les 5 (2022_02) :P
// 1. Maak een <ul> in index.html en geef die <ul> een id ('countries') als referentiepunt mee
// 2. declareer een variabele in app.js die d.m.v. getElementById verwijst naar 'countries' in index.html
//
//

const countryList = document.getElementById('countries');


// ====================== 6. GEEF NAAM EERSTE LAND WEER ================================================================
// Zorg ervoor dat de naam van het allereerste land wordt weergegeven als <li>-tag in het lijst-element op de pagina;

// async function fetchCountries() {
//     try {
//         // het request maken
//         const response = await axios.get('https://restcountries.com/v2/all');
//
//         countryList.innerHTML = `
//         <li> Het eerste land heet ${response.data[0].name}
//         </li>
//          `;
//
//     } catch(error) {
//         console.error(error);
//     }
// }
//
// fetchCountries();



// ====================== 7. GEEF POPULATIE WEER =======================================================================
// Zorg er nu ook voor dat de populatie (Has a population of [amount] people) daaronder wordt weergegeven;


async function fetchCountries() {
    try {
        // het request maken
        const response = await axios.get('https://restcountries.com/v2/all');
        
        countryList.innerHTML = `
          <li>
            Het eerste land heet ${response.data[0].name}
          </li>
          <li>
            ${response.data[0].name} has a population of ${response.data[0].population} people.
          </li>
         `;
        
    } catch(error) {
        console.error(error);
    }
}
fetchCountries();

// ====================== 8. FUNCTIE VOOR REGIONAAM & -KLEUR ===========================================================
// Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als
// string teruggeeft.
// Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. Tip: zorg ervoor dat je
// CSS-classes maakt voor alle regio-kleuren!

//async function(region) {

// }

// ====================== 9. GEEF VLAG WEER ============================================================================
// Breidt de <li>-tag uit met een <img>-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven;

// ====================== 10. CREËER LIST ELEMENT MET ALLE LANDEN ======================================================
// Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;

// ====================== 11. SORTEER RESPONSE DATA ====================================================================
// Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen mapt om de landen op de pagina weer te geven.

