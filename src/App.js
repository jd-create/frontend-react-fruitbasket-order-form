import React from 'react';
import './App.css';

// Hoe maak je van iets een component
// 1. Begin de HTML gewoon uit te schrijven (maak eerst wat je wilt)
// 2. Als tevreden bent met je pagina kun een component "refactoren", opschonen
//   - [] Kopier een component met alle data erin
//   - [] Zet het in een ander JavaScript bestand
//   - [] Maak een component functie
//   - [] Die component functie returned JSX
//   - [] Optioneel: voeg een div toe als je component uit meerder tags bestaat
//   - [] Exporteer je component functie (export default)
//   - [] Importeer je component functie in App (of waar je hem wil gebruiken)
//   - [] Gebruik je component functie met JSX syntax
// 3. Is component af, maar "gehardcode", alles heeft altijd dezelfde waard
//    gebruik props om het component dynamisch te maken
//   - [] voeg attribuut to in de jsx (je mag kiezen hoe het attribuut heet)
//   - [] geeft het attribuut een waarde
//   - [] in de component functie gebruiken maken van de "prop" die is doorgegeven
//      - [] props toevoegen als parameter van de component functie
//      - [] De juiste prop eruit halen en gebruiken in je component (subject)
//   - [] Interpoleren in JSX

function App() {
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruitBar">
                <div className="aardbeien">
                    <p>🍓 Aardbeien</p>
                    <button>-</button>
                    <div className="counter">0</div>
                    <button>+</button>
                </div>
                <div className="bananen">
                    <p>🍌 Bananen</p>
                    <button>-</button>
                    <div className="counter">0</div>
                    <button>+</button>
                </div>
                <div className="appels">
                    <p>🍏 Appels</p>
                    <button>-</button>
                    <div className="counter">0</div>
                    <button>+</button>
                </div>
                <div className="kiwis">
                    <p>🥝 Kiwi's</p>
                    <button>-</button>
                    <div className="counter">0</div>
                    <button>+</button>
                </div>
            </div>
            <button className="resetButton" type="submit">Reset</button>
        </>
    );
}

export default App;
