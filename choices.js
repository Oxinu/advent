// choices.js
// -------------------------------------------
// A) KONFIGURATION DER ENTSCHEIDUNGEN (DATEN)
// -------------------------------------------
//
// Hier trägst du alle Türchen ein, die eine A/B-Entscheidung
// mit Buttons haben. Jeder Eintrag entspricht einem Tag.
//
// Du kannst später jederzeit weitere Tage ergänzen:
// "2": { ... }, "3": { ... } usw.
//

const CHOICE_CONFIG = {
  "1": {
    // Frage, die im Türchen angezeigt wird
    question: "Was tust du?",

    // Entscheidung A
    A: {
      // Text auf dem Button
      label: "🐾 Den Hunden etwas von deinem Brot geben",
      // Punkte, die der Spieler dafür bekommt
      points: 3,
      // Text, der nach der Wahl angezeigt wird
      text: "Du brichst das Brot in mehrere Stücke und legst sie vorsichtig vor die Hunde. Sie schnuppern kurz, dann fressen sie gierig, die Schwänze schlagen schwach hin und her. Einer der Hunde kommt näher und leckt über deine Hand, als wolle er sich bedanken. Trotz der Kälte wird dir warm – die Tiere werden sich an deine Güte erinnern."
    },

    // Entscheidung B
    B: {
      label: "🍞 Alles selbst essen",
      points: 1,
      text: "Du drehst dich von den Hunden weg und hältst das Brot fest an dich gedrückt. Dein Hunger ist zu groß, du beißt gierig hinein, bis kaum noch etwas übrig ist. Die Hunde jaulen leise und trotten schließlich davon. Dein Bauch ist etwas voller, doch ein unangenehmes Schuldgefühl kratzt in deiner Brust."
    }
  },

  "2": {
    question: "Was tust du?",
    A: {
      label: "🍲 Mitgehen",
      points: 3,
      text: "Du folgst Hildegard in ihre kleine Hütte. Drinnen knistert ein Feuer, und es riecht nach Suppe. Sie gibt dir eine Schüssel und lächelt mild. Es ist lange her, dass jemand freundlich zu dir war"
    },
    B: {
      label: "❄️ Bleiben",
      points: 1,
      text: "Du schüttelst den Kopf. Ich komme klar. Hildegard sieht traurig aus, nickt aber und geht. Der Wind wird kälter, und du fühlst dich einsamer als zuvor.."
    }
  },

  "3": {
    question: "Wie lautet die Lösung?",
    A: {
      label: "1",
      points: 0,
      text: "Dimitri seufzt: 'Das ist leider falsch.'"
    },
    B: {
      label: "2",
      points: 0,
      text: "Dimitri seufzt: 'Das ist leider falsch.'"
    },
    C: {
      label: "4",
      points: 3,
      text: "Dimitri grinst: 'Das ist richtig!'"
    }
  },

    "4": {
    question: "Was möchtest Du tun?",
    A: {
      label: "Bewohner um Ausrüstung bitten",
      points: 2,
      text: "Die Bewohner sind freundlich - Du bekommst für Deine beschwerliche Reise einen Feuerstein und ein Messer."
    },
    B: {
      label: "Einfach losgehen",
      points: 0,
      text: "Du möchtest keine Zeit vergeuden, und marschierst sofort los."
    }
  },

      "5": {
    question: "Möchtest Du dem Fuchs helfen?",
    A: {
      label: "Ja, er braucht meine Hilfe",
      points: 3,
      text: "Mit etwas Mühe befreist Du den Fuchs aus der Felsspalte. Er faucht Dich an und sucht schnell das Weite."
    },
    B: {
      label: "Nein, es ist klat und ich muß mich um mich selbst erst einmal kümmern",
      points: 0,
      text: "Da der Stelle nicht sicher ist, beschließt Du, schnell weiter zu laufen, und dem Fuchs seinem Schicksal zu überlassen"
    }
  }




  // Weitere Einträge:
  // "2": { ... },
  // "3": { ... } etc.
};


// -------------------------------------------
// B) LOGIK FÜR ENTSCHEIDUNGEN (CODE)
// -------------------------------------------
//
// - liest CHOICE_CONFIG
// - bindet sie an die HTML-Elemente mit .choices
// - speichert Entscheidungen + Punkte in localStorage
// - stellt beim erneuten Laden den Zustand wieder her
//

(function () {
  // Schlüssel für localStorage – hier werden Entscheidungen pro Tag gespeichert
  const STORAGE_KEY = 'adventChoices';
  // Schlüssel für den Gesamt-Punktestand
  const SCORE_KEY   = 'adventScore';

  // Zustand (welcher Tag -> welche Wahl) aus localStorage lesen
  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  // Zustand im localStorage speichern
  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // Gesamtpunkte laden
  function loadScore() {
    return +(localStorage.getItem(SCORE_KEY) || 0);
  }

  // Gesamtpunkte speichern
  function saveScore(score) {
    localStorage.setItem(SCORE_KEY, String(score));
  }

  // Hauptfunktion: verbindet HTML (.choices) mit der Konfiguration
  function initChoices() {
    const cfg   = CHOICE_CONFIG || {};
    const state = loadState();
    let score   = loadScore();

    // Alle Boxen mit Entscheidungen durchgehen
    document.querySelectorAll('.choices').forEach(box => {
      const day  = box.dataset.day;     // z. B. "1"
      const data = cfg[day];            // Eintrag aus CHOICE_CONFIG

      // Wenn keine Konfiguration vorhanden ist, nichts tun
      if (!data) return;

      // Elemente im HTML suchen
      const qEl   = box.querySelector('.choice-question');
      const resEl = box.querySelector('.choice-result');
      const btns  = box.querySelectorAll('.choice-btn');

      // Frage-Text setzen
      qEl.textContent = data.question;

      // Für jeden Button (A/B) Beschriftung + Klick-Logik einrichten
      btns.forEach(btn => {
        const choiceKey = btn.dataset.choice; // "A" oder "B"
        const cData = data[choiceKey];
        if (!cData) return;

        // Button-Text aus Konfiguration
        btn.textContent = cData.label;

        // Klick-Handler
        btn.addEventListener('click', () => {
          // Wenn für diesen Tag schon gewählt wurde -> nichts mehr ändern
          if (state[day]) return;

          // Wahl merken
          state[day] = choiceKey;
          // Punkte addieren
          score += cData.points;

          // in localStorage speichern
          saveState(state);
          saveScore(score);

          // Ergebnistext anzeigen
          resEl.textContent = cData.text + ` (+${cData.points} Punkte)`;

          // Buttons deaktivieren und gewählten Button optisch hervorheben
          btns.forEach(b => {
            b.disabled = true;
            b.classList.toggle('chosen', b === btn);
          });

          // Nur zur Kontrolle in der Konsole
          console.log('Aktueller Gesamt-Punktestand:', score);
        });
      });

      // Falls der Spieler bereits früher gewählt hat -> Zustand wiederherstellen
      if (state[day]) {
        const chosenKey = state[day];
        const cData = data[chosenKey];
        if (cData) {
          resEl.textContent = cData.text;

          btns.forEach(b => {
            b.disabled = true;
            if (b.dataset.choice === chosenKey) {
              b.classList.add('chosen');
            }
          });
        }
      }
    });
  }

  // Warten, bis das DOM fertig ist, dann initialisieren
  document.addEventListener('DOMContentLoaded', initChoices);
})();
