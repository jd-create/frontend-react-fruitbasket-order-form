import React, {useState} from 'react';
import './App.css';
import Fruit from "./Fruit.js"

// Hoe maak je van iets een component
// 1. Begin de HTML gewoon uit te schrijven (maak eerst wat je wilt)
// 2. Als tevreden bent met je pagina kun een component "refactoren", control+alt+l
//   - [x] Kopieer een component met alle data erin
//   - [x] Zet het in een ander JavaScript bestand
//   - [x] Maak een component functie
//   - [x] Die component functie returned JSX
//   - [x] Optioneel: voeg een div toe als je component uit meerder tags bestaat
//   - [x] Exporteer je component functie (export default)
//   - [x] Importeer je component functie in App (of waar je hem wil gebruiken)
//   - [x] Gebruik je component functie met JSX syntax <Componentnaam />
// 3. Is component af, maar "gehardcode", alles heeft altijd dezelfde waard
//    gebruik props om het component dynamisch te maken
//   - [x] voeg attribuut to in de jsx (je mag kiezen hoe het attribuut heet)
//   - [x] geeft het attribuut een waarde
//   - [x] in de component functie gebruiken maken van de "prop" die is doorgegeven
//      - [x] props toevoegen als parameter van de component functie
//      - [x] De juiste prop eruit halen en gebruiken in je component (subject)
//   - [x] Interpoleren in JSX

function App()
{

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <div className="fruitBar">
                <Fruit fruit="🍓 Aardbeien"/>
                <Fruit fruit="🍌 Bananen"/>
                <Fruit fruit="🍏 Appels"/>
                <Fruit fruit="🥝 Kiwi's"/>
            </div>

            <button className="resetButton" type="submit">Reset</button>
        </>
    );
}

export default App;


