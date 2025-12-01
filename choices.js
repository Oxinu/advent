// choices.js
// -------------------------------------------
// A) KONFIGURATION DER ENTSCHEIDUNGEN (DATEN)
// -------------------------------------------
//
// Hier trägst du alle Türchen ein, die eine A/B-/C-Entscheidung
// mit Buttons haben. Jeder Eintrag entspricht einem Tag.
//

const CHOICE_CONFIG = {
  "1": {
    question: "Was tust du?",
    A: {
      label: "🐾 Den Hunden etwas von deinem Brot geben",
      points: 3,
      text: "Du brichst das Brot in mehrere Stücke und legst sie vorsichtig vor die Hunde. Sie schnuppern kurz, dann fressen sie gierig, die Schwänze schlagen schwach hin und her. Einer der Hunde kommt näher und leckt über deine Hand, als wolle er sich bedanken. Trotz der Kälte wird dir warm – die Tiere werden sich an deine Güte erinnern."
    },
    B: {
      label: "🍞 Alles selbst essen",
      points: 0,
      text: "Du drehst dich von den Hunden weg und hältst das Brot fest an dich gedrückt. Dein Hunger ist zu groß, du beißt gierig hinein, bis kaum noch etwas übrig ist. Die Hunde jaulen leise und trotten schließlich davon. Dein Bauch ist etwas voller, doch ein unangenehmes Schuldgefühl kratzt in deiner Brust."
    }
  },

  "2": {
    question: "Was tust du?",
    A: {
      label: "🍲 Mitgehen",
      points: 3,
      text: "Die Frau stellt sich Dir als Hildegard vor. Du folgst ihr in ihre kleine Hütte. Drinnen knistert ein Feuer, und es riecht nach Suppe. Sie gibt dir eine Schüssel und lächelt mild. Es ist lange her, dass jemand freundlich zu dir war."
    },
    B: {
      label: "❄️ Bleiben",
      points: 1,
      text: "Du schüttelst den Kopf. 'Ich komme klar.' Die Frau sieht traurig aus, nickt aber und geht. Der Wind wird kälter, und du fühlst dich einsamer als zuvor."
    }
  },

  "3": {
    question: "Wie lautet die Lösung?",
    A: {
      label: "6",
      points: 0,
      text: "Dimitri seufzt: 'Das ist leider falsch.'"
    },
    B: {
      label: "9",
      points: 4,
      text: "Dimitri grinst: 'Hervorragend Junge, das ist richtig!'"
    },
    C: {
      label: "12",
      points: 0,
      text: "Dimitri seufzt: 'Das ist leider falsch.'"
    }
  },

  "4": {
    question: "Was möchtest du tun?",
    A: {
      label: "Bewohner um Ausrüstung bitten",
      points: 2,
      text: "Die Bewohner sind freundlich – du bekommst für deine beschwerliche Reise einen Feuerstein und ein Messer.",
      // Beispiel-Items, die der Spieler erhält:
      items: ["Feuerstein", "Messer"]
    },
    B: {
      label: "Einfach losgehen",
      points: 0,
      text: "Du möchtest keine Zeit vergeuden und marschierst sofort los."
    }
  },

  "5": {
    question: "Möchtest du dem Fuchs helfen?",
    A: {
      label: "Ja, er braucht meine Hilfe",
      points: 3,
      text: "Mit etwas Mühe befreist du den Fuchs aus der Felsspalte. Er faucht dich an und sucht schnell das Weite."
    },
    B: {
      label: "Nein, es ist kalt, und ich muss mich erst einmal um mich selbst kümmern",
      points: 0,
      text: "Da die Stelle nicht sicher ist, beschließt du, schnell weiterzulaufen und den Fuchs seinem Schicksal zu überlassen."
    }
  }
};

// -------------------------------------------
// B) LOGIK FÜR ENTSCHEIDUNGEN (CODE)
// -------------------------------------------
//
// - liest CHOICE_CONFIG
// - bindet sie an die HTML-Elemente mit .choices
// - speichert Entscheidungen + Punkte + Items in localStorage
// - stellt beim erneuten Laden den Zustand wieder her
//

(function () {
  // ------------------------------
  // Spieler-Verwaltung
  // ------------------------------

  const PLAYER_KEY      = 'adventPlayerName';
  const STORAGE_BASE_KEY = 'adventChoices_';
  const SCORE_BASE_KEY   = 'adventScore_';
  const ITEMS_BASE_KEY   = 'adventItems_';

  let STORAGE_KEY = STORAGE_BASE_KEY + 'Standard';
  let SCORE_KEY   = SCORE_BASE_KEY   + 'Standard';
  let ITEMS_KEY   = ITEMS_BASE_KEY   + 'Standard';

  function getPlayerName() {
    try {
      let name = localStorage.getItem(PLAYER_KEY);

      if (!name) {
        name = prompt('Wie heißt du? (Name oder Spitzname)');

        if (!name || !name.trim()) {
          name = 'Standard';
        } else {
          name = name.trim();
        }

        localStorage.setItem(PLAYER_KEY, name);
      }

      return name;
    } catch (e) {
      return 'Standard';
    }
  }

  function updatePlayerDisplay(name) {
    const label = document.getElementById('player-name-label');
    if (label) {
      label.textContent = 'Spieler: ' + name;
    }
  }

  function attachPlayerSwitcher() {
    const btn = document.getElementById('change-player');
    if (!btn) return;

    btn.addEventListener('click', () => {
      try {
        localStorage.removeItem(PLAYER_KEY);
      } catch (e) {
        // ignorieren
      }
      window.location.reload();
    });
  }

  // ------------------------------
  // State-Verwaltung
  // ------------------------------

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadScore() {
    return +(localStorage.getItem(SCORE_KEY) || 0);
  }

  function saveScore(score) {
    localStorage.setItem(SCORE_KEY, String(score));
  }

  function loadItems() {
    try {
      return JSON.parse(localStorage.getItem(ITEMS_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveItems(items) {
    localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
  }

  // -----------------------------------
  // Hauptfunktion: Choices initialisieren
  // -----------------------------------
  function initChoices() {
    const cfg = CHOICE_CONFIG || {};

    const playerName = getPlayerName();
    STORAGE_KEY = STORAGE_BASE_KEY + playerName;
    SCORE_KEY   = SCORE_BASE_KEY   + playerName;
    ITEMS_KEY   = ITEMS_BASE_KEY   + playerName;

    updatePlayerDisplay(playerName);
    attachPlayerSwitcher();

    const state = loadState();
    let score   = loadScore();
    let items   = loadItems();

    // Alle Boxen mit Entscheidungen durchgehen
    document.querySelectorAll('.choices').forEach(box => {
      const day  = box.dataset.day;  // z. B. "1"
      const data = cfg[day];

      if (!data) return;

      const qEl   = box.querySelector('.choice-question');
      const resEl = box.querySelector('.choice-result');
      const btns  = box.querySelectorAll('.choice-btn');

      if (qEl) {
        qEl.textContent = data.question;
      }

      // Buttons vorbereiten
      btns.forEach(btn => {
        const choiceKey = btn.dataset.choice; // "A", "B", "C"
        const cData = data[choiceKey];

        if (!cData) {
          // Falls z. B. Button C existiert, aber für diesen Tag nicht genutzt wird
          btn.style.display = 'none';
          return;
        }

        btn.textContent = cData.label;

        // Klick-Handler
        btn.addEventListener('click', () => {
          // Wenn für diesen Tag schon gewählt wurde -> nichts mehr ändern
          if (state[day]) return;

          // Wahl merken
          state[day] = choiceKey;

          // Punkte addieren
          if (typeof cData.points === 'number') {
            score += cData.points;
          }

          // Items vergeben, falls definiert
          if (Array.isArray(cData.items) && cData.items.length > 0) {
            cData.items.forEach(item => {
              if (!items.includes(item)) {
                items.push(item);
              }
            });
            saveItems(items);
          }

          // in localStorage speichern
          saveState(state);
          saveScore(score);

          // Ergebnistext anzeigen (ohne Punkteanzeige)
          if (resEl) {
            resEl.textContent = cData.text;
          }

          // Buttons deaktivieren und Auswahl markieren
          btns.forEach(b => {
            b.disabled = true;
            b.classList.toggle('chosen', b === btn);
          });

          console.log('Aktueller Gesamt-Punktestand:', score);
          console.log('Aktuelles Inventar:', items);
        });
      });

      // Bereits getroffene Wahl wiederherstellen
      if (state[day]) {
        const chosenKey  = state[day];
        const chosenData = data[chosenKey];

        if (chosenData && resEl) {
          resEl.textContent = chosenData.text;
        }

        btns.forEach(b => {
          b.disabled = true;
          if (b.dataset.choice === chosenKey) {
            b.classList.add('chosen');
          }
        });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initChoices);
})();
