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
      text: "Dimitri seufzt: 'Das ist leider falsch.' Hungrig und enttäuscht ziehst du weiter."
    },
    B: {
      label: "9",
      points: 4,
      text: "Dimitri grinst: 'Hervorragend Junge, das ist richtig!' Er reicht dir ein Stück warmes Fladenbrot, etwas Trockenfleisch und Käse. Gestärkt und stolz machst du dich auf den weiteren Weg."
    },
    C: {
      label: "12",
      points: 0,
      text: "Dimitri seufzt: 'Das ist leider falsch.' Hungrig und enttäuscht ziehst du weiter."
    },
    D: {
      label: "18",
      points: 0,
      text: "Dimitri seufzt: 'Das ist leider falsch.' Hungrig und enttäuscht ziehst du weiter."
    }
  },

  "4": {
    question: "Was möchtest du tun?",
    A: {
      label: "Die beiden Frauen um Ausrüstung bitten",
      points: 2,
      text: "Die beiden Frauen hören sofort auf miteinander zu tuscheln, als Du Dich näherst. Die kleinere von beiden beobachtet Dich mißtrauisch, als Du Dein Anliegen schilderst. Die größere scheint aber mit Dir Mitleid zu haben, lächelt freundlich, und schenkt Dir für deine beschwerliche Reise einen Feuerstein und ein Messer.",
      // Beispiel-Items, die der Spieler erhält:
      items: ["Feuerstein", "Messer"]
    },
    B: {
      label: "Einfach losgehen",
      points: 0,
      text: "Du möchtest keine Zeit vergeuden und marschierst an den beiden Frauen vorbei. Die Wachen am Stadttor beachten Dich nicht weiter. Draußen beginnt der große, weiße Wald. Du atmest tief ein - und bist bereit."  }
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
  },

    "6": {
    question: "Wie entscheidest Du Dich?",
    A: {
      label: "Du isst die Suppe und lässt Jaro zu Dir ans Feuer kommen",
      points: 3,
      text: "Die warme Suppe tut Dir gut. Jaro lächelt und ist froh, in dieser kalten Nacht Anschluß gefunden zu haben. Er erzählt von sich, und seine Geschichte ähnelt Deiner sehr.\n"
      + "Jaro scheint ein netter Kerl zu sein, und Du bist glücklich, nun einen Weggefährten zu haben."
    },
    B: {
      label: "Du lehnst ab",
      points: 0,
      text: "Du bist misstrauisch und möchtest lieber für dich allein sein. Jaro wirkt enttäuscht, dreht sich um und schlägt etwas weiter am Waldrand sein Lager auf. Du fragst dich, ob deine Entscheidung richtig war.\n" 
      + "Am nächsten Morgen brichst du früh auf. Nach einiger Zeit bemerkst du, dass Jaro dir in etwas Abstand folgt. Er pfeift ein fröhliches Lied. Schließlich entscheidest du, dass dir ein wenig Gesellschaft doch guttun würde, bleibst stehen und wartest auf ihn. Jaro strahlt, und ihr beide freut euch, nun doch einen Weggefährten an eurer Seite zu haben."
    }
  },

    "7": {
    question: "Wie entscheidest Du Dich?",
    A: {
      label: "Darauf zugehen",
      points: 1,
      text: "Ihr biegt vom Pfad ab und kämpft euch durch tiefen Schnee. Das Licht bleibt fern, verschwindet dann hinter den Wolken. Ein unheimliches Gefühl bleibt zurück."
    },
    B: {
      label: "Die Wanderung fortsetzen",
      points: 1,
      text: "'Wir verlaufen uns nur', sagst du.  Ihr bleibt auf dem Pfad. Das Licht verblasst hinter euch – und du fragst dich, ob du etwas Wichtiges verpasst hast."
    }
  },
    "8": {
    question: "Was tust Du?",
    A: {
      label: "🐾 Hochklettern",
      points: 2,
      text: "Du kletterst vorsichtig hinauf, die Finger steif vor Kälte. Kurz bevor du die Katze erreichst, bricht ein Ast – du fällst in den Schnee, die Katze mit dir. Ihr kommt unsanft, aber lebendig unten an. Die Frau dankt dir unter Tränen und drückt dir etwas Proviant in die Hand."
    },
    B: {
      label: "🪓 den Baum absägen",
      points: 0,
      text: "Du entscheidest, dass es zu gefährlich ist zu klettern. Jaro findet eine alte Axt am Schuppen. Gemeinsam sägt ihr den Baum an, bis er mit einem Krachen fällt. Die Katze schreit auf – als ihr sie findet, ist sie still. Die Frau sinkt schluchzend zu Boden. Eine unangenehme Schwere legt sich auf dein Herz."
    },
    C: {
      label: "🍗 mit Futter locken",
      points: 4,
      text: "Du nimmst ein kleines Stück deines letzten Brotes und streckst es nach oben.\n"
      + "Leise und geduldig redest du auf die Katze ein. Nach einer Weile tastet sie sich vorsichtig den Stamm hinunter, immer dem Geruch folgend. Unten springt sie der alten Frau in die Arme.\n"
      + "'Du hast ein gutes Herz', sagt sie und holt etwas aus ihrer Schürze: einen unscheinbaren, alten Schlüssel. 'Er soll alles öffnen können, was verschlossen ist. Nimm ihn – du wirst ihn noch brauchen.'",
      items: ["Alter Schlüssel"]
    }
  },

  "9": {
    question: "Wie reagierst du?",
    A: {
      label: "🚶 Mitgehen",
      points: 2,
      text: "Du beschließt, keinen Ärger zu machen. Die Wachen führen euch in einen kleinen Wachposten am Waldrand. Nach einer groben Befragung stellen sie fest, dass ihr tatsächlich nichts bei euch habt, was gestohlen aussieht.\n"
      + "'Vielleicht haben wir uns geirrt', murmelte einer. Zum Abschied drückt dir der jüngste Wachmann heimlich eine Münze in die Hand. 'Für etwas Warmes…', flüstert er.",
      items: ["Kupfermünze"]
    },
    B: {
      label: "⚔️ Kämpfen",
      points: 1,
      text: "Du reißt den Arm los und gehst auf die Wachen los. Für einen Moment glaubst du, du könntest dich befreien – doch sie sind zu dritt, stark und in Rüstung. Du wirst zu Boden gestoßen, dein Arm schmerzt. Einer lacht rau. 'Der ist verrückt.' Er bindet dir aus einem Lederband ein grobes Armband um. 'Damit man dich wiedererkennt.'\n"
      + "Sie lassen euch ziehen, aber du spürst ihre Blicke im Rücken. Und dieses 'Verrückten-Armband' fühlt sich an wie ein Stempel.",
      items: ["Verrückten-Armband"]
    },
    C: {
      label: "🏃 Rennen",
      points: 0,
      text: "Ohne zu überlegen, stößt du die Wache vor dir zur Seite und sprintest los. Jaro hechtet hinterher. Pfeile zischen an euch vorbei, aber keiner trifft. Der Wald verschluckt euch, bis ihr keuchend hinter einem umgestürzten Baumstamm in Deckung geht."
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
          // ➜ Hier: Kalender-Logik updaten
          if (typeof window.relockDoors === 'function') {
            window.relockDoors();
  }
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
