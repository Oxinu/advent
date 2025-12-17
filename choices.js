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
  },

   "10": {
    question: "Was tust Du?",
    A: {
      label: "📣 Nach Hilfe rufen",
      points: 2,
      text: "'Jaro! Ich komme hier nicht alleine hoch!'\n"
      + "Nach einer Weile hörst du ein Rascheln. Jaro hat ein altes Seil gefunden. Er lässt es zu dir hinunter, du klammerst dich fest, und mit viel Ziehen, Rutschen und Fluchen schafft ihr es gemeinsam. Oben fallt ihr lachend in den Schnee – vor Erleichterung, nicht weil es lustig war."
    },
    B: {
      label: "🧗 Selbst herausklettern",
      points: 2,
      text:"Du ballst die Fäuste. 'Ich versuch’s allein!' Mit Händen und Füßen suchst du nach kleinsten Vorsprüngen im Fels. Stück für Stück drückst du dich hoch, die Muskeln brennen, die Finger sind taub.\n"
      + "Als du oben ankommst, steht Jaro mit offenem Mund da. 'Du bist verrückt', sagt er – und klopft dir stolz auf die Schulter. Ein kleines Glitzern von Selbstvertrauen bleibt in dir zurück."
    }
  },

  "14": {
    question: "Wem folgst du?",
    A: { label: "👵 Hildegard", text: "Hildegard lächelt. Ihr geht Seite an Seite aus dem Park heraus.", route: "good" },
    B: { label: "🕶️ Varo", text: "Varo grinst. 'Eine gute Wahl - wir werden gemeinsam aufregende Zeiten erleben!'", route: "evil" }
  },


"15": {
  question: "Wie entscheidest du dich?",
  good: {
    A: { label: "🔑 Den Schlüssel annehmen", points: 2, text: "Du nimmst ihn vorsichtig. Er fühlt sich überraschend schwer an – fast so, als würde er etwas von deiner alten Welt in sich tragen.", items: ["Alter Schlüssel"] },
    B: { label: "🙅 Höflich ablehnen", points: 2, text: "‘Ich kann nicht noch mehr von dir annehmen’, sagst du. Hildegard lächelt milde und legt den Schlüssel in eine Schublade. ‘Dann bleibt er hier, bis du ihn vielleicht doch brauchst.’" }
  },
  evil: {
    C: { label: "🗡️ Das Messer annehmen", points: 0, text: "Du nimmst es an dich. Es fühlt sich falsch – und gleichzeitig beruhigend – an, etwas zur Verteidigung zu haben.", items: ["Messer"] },
    D: { label: "🙅 Ablehnen", points: 2, text: "‘Ich will keine Waffen’, sagst du. Der Händler schnaubt verächtlich. Varo hebt nur eine Augenbraue. ‘Mutig’, meint er. ‘Oder dumm. Das wird sich zeigen.’" }
  }
},

"16": {
  question: "Was tust Du?",
  good: {
    A: { label: "Du versprichst Kiro, wiederzukommen.", points: 2, text: "Kiro lächelt Dich an und freut sich." },
    B: { label: "Du bleibst ausweichend.", points: 1, text: "'Ich...muß schauen, habe noch Einiges zu tun' - Du bleibst ausweichend und Kiro nickt verständnisvoll, wenn auch etwas enttäuscht." }
  },
  evil: {
    C: { label: "Du öffnest die Kiste", points: 2, text: "Du klappst den Deckel auf und findest ein Stück seltsam gebogenes, schimmerndes Metall. Schnell klappst Du die wieder zu, und gehst zurück zu Varo." },
    D: { label: "Du lässt sie geschlossen", points: 1, text: "Du nimmst die Kiste, ohne hineinzusehen. Manchmal ist nicht zu wissen die klügere Art, ruhig zu bleiben." }
  }
},

"17": {
  question: "Was möchtest du tun?",
  good: {
    A: {
      label: "Hildegard fragen, was das grüne Flimmern bedeutet",
      points: 2,
      text: "Du deutest in den Himmel. Hildegards Blick wird ernst. 'Das ist das Tor… oder ein Echo davon', sagt sie leise. 'Wenn es flackert, nähert sich etwas. Und nicht alles, was näherkommt, ist gut.'"
    },
    B: {
      label: "Es ignorieren und den Moment genießen",
      points: 0,
      text: "Du zwingst dich zu einem Lächeln und fährst weiter, als wäre nichts gewesen. Doch das grüne Flimmern bleibt in deinem Kopf – wie ein Schatten, der dir folgt, auch wenn du ihn nicht ansiehst."
    }
  },
  evil: {
    C: {
      label: "🤝 Varo Mut machen und ihm zuhören",
      points: 2,
      text: "Du sagst ihm, dass er nicht allein ist. Varo antwortet nicht sofort, aber sein Grinsen wirkt einen Moment weniger hart. 'Vielleicht', murmelt er. 'Vielleicht verstehst du das hier schneller als die anderen.'"
    },
    D: {
      label: "🧊 Schweigen und nichts preisgeben",
      points: 0,
      text: "Du lässt die Stille stehen. Varo nickt langsam, als hätte er genau das erwartet. 'Okay', sagt er nur. Doch du spürst: Abstand ist hier auch eine Entscheidung."
    }
  }
},

"18": {
  question: "Deine Reaktion:",
  good: {
    A: {
      label: "Dem Lichtschacht folgen",
      points: 2,
      text: "Du trittst in den warmen Schimmer. Für einen Moment fühlst du dich schwerelos – dann liegt etwas Kühl-Klares in deiner Hand: eine kleine Glasfigur. Als du blinzelst, ist der Lichtschacht verschwunden. Hildegard nickt langsam. 'Manche Dinge findet man nur, wenn man den Mut hat, einen Schritt zu viel zu gehen.'",
      items: ["Glasfigur"]
    },
    B: {
      label: "Bei Hildegard bleiben",
      points: 1,
      text: "Du trittst zurück. Der Lichtschacht flackert, als hätte er deine Entscheidung verstanden, und schließt sich lautlos. Hildegard legt dir die Hand auf die Schulter. 'Nicht jede Einladung muss angenommen werden', sagt sie ruhig. 'Sicherheit ist manchmal die klügste Wahl.'"
    }
  },
  evil: {
    C: {
      label: "🗡️ Messer ziehen und zurückschlagen",
      points: 2,
      requiresItems: ["Messer"],
      text: "Instinktiv ziehst du dein Messer. Das Metall in deiner Hand bringt einen Angreifer zum Zögern – und genau dieser Herzschlag reicht. Varo nutzt die Lücke, du hältst die anderen auf Abstand. Schnee, Atem, ein kurzer Aufschrei – dann weichen sie zurück. Du gewinnst. Aber du spürst auch: Etwas in dir ist kälter geworden."
    },
    D: {
      label: "👊 Mit bloßen Händen kämpfen",
      points: 1,
      forbidsItems: ["Messer"],
      text: "Du wirfst dich mit bloßen Händen in den Kampf. Ein Schlag trifft dich hart, du gehst kurz zu Boden, schmeckst Blut – doch Varo ist da. Mit roher Entschlossenheit treibt er die Angreifer davon. Du bleibst keuchend zurück: verletzt, zitternd… aber lebendig."
    }
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

    let state = loadState();
    let score   = loadScore();
    let items   = loadItems();
    // Route einmal sauber ableiten und im state fixieren
    state.route = inferRouteFromDay14(state);
    saveState(state);



function inferRouteFromDay14(st) {
  // Falls route fehlt, aber Tag 14 schon gewählt wurde: aus CHOICE_CONFIG ableiten
  if (!st.route && st["14"] && cfg["14"] && cfg["14"][st["14"]] && cfg["14"][st["14"]].route) {
    st.route = cfg["14"][st["14"]].route; // "good" / "evil"
    saveState(st);
  }
  return st.route || "good";
}

function updateAllRouteTexts() {
  const freshState = loadState();
  const route = inferRouteFromDay14(freshState);

  document.querySelectorAll(".route-text[data-day]").forEach(el => {
    const goodText = el.getAttribute("data-good") || "";
    const evilText = el.getAttribute("data-evil") || goodText;

    el.textContent = (route === "evil") ? evilText : goodText;
  });
}

function updateAllRouteDoorLabels() {
  const st = loadState();
  const route = st.route || "good";

  document.querySelectorAll('.route-label').forEach(el => {
    const good = el.dataset.good;
    const evil = el.dataset.evil;
    if (!good || !evil) return;

    el.textContent = (route === "evil") ? evil : good;
  });
}

function updateOpenDayTitleFromDoor() {
  const hash = location.hash;
  if (!hash.startsWith('#day')) return;

  const day = hash.replace('#day', '');
  const titleEl = document.getElementById(`title-day${day}`);
  if (!titleEl) return;

  const doorLabel = document.querySelector(
    `.door a[href="#day${day}"] .route-label`
  );
  if (!doorLabel) return;

  const labelText = doorLabel.textContent.trim();
  titleEl.textContent = `Tag ${day} – ${labelText}`;
}



function getVariantDataForDay(day, st) {
  const data = cfg[day];
  if (!data) return null;
  const route = (st.route || "good");
  if (data.good || data.evil) {
    return (route === "evil") ? data.evil : data.good;
  }
  return data; // nicht route-abhängig
}

function hasAllItems(inv, needed) {
  if (!Array.isArray(needed) || needed.length === 0) return true;
  return needed.every(it => inv.includes(it));
}

function hasAnyItem(inv, itemsList) {
  if (!Array.isArray(itemsList) || itemsList.length === 0) return false;
  return itemsList.some(it => inv.includes(it));
}

function isChoiceAllowed(choiceObj, inv) {
  if (!choiceObj) return false;

  // requiresItems: alle müssen vorhanden sein
  if (choiceObj.requiresItems && !hasAllItems(inv, choiceObj.requiresItems)) return false;

  // forbidsItems: keiner davon darf vorhanden sein
  if (choiceObj.forbidsItems && hasAnyItem(inv, choiceObj.forbidsItems)) return false;

  return true;
}

function buildAutoHint(choiceObj) {
  if (!choiceObj) return "";
  if (Array.isArray(choiceObj.requiresItems) && choiceObj.requiresItems.length) {
    return ` (Hinweis: Du hattest ${choiceObj.requiresItems.join(", ")} im Inventar.)`;
  }
  if (Array.isArray(choiceObj.forbidsItems) && choiceObj.forbidsItems.length) {
    return ` (Hinweis: Du hattest ${choiceObj.forbidsItems.join(", ")} nicht im Inventar.)`;
  }
  return "";
}



function renderChoicesBox(box) {
  const day = box.dataset.day;
  const data = cfg[day];
  if (!data) return;

  // frischen State + Inventar laden
  state = loadState();
  state.route = inferRouteFromDay14(state);
  items = loadItems();

  const variantData = getVariantDataForDay(day, state);

  const qEl   = box.querySelector('.choice-question');
  const resEl = box.querySelector('.choice-result');
  const btns  = box.querySelectorAll('.choice-btn');

  if (qEl) qEl.textContent = data.question;

  // Welche Buttons existieren im HTML (A/B/C/D)?
  const presentKeys = Array.from(btns).map(b => b.dataset.choice);

  // Welche Optionen sind erlaubt (existieren + Conditions erfüllt)?
  const allowedKeys = presentKeys.filter(k => {
    const raw = variantData && variantData[k];
    return raw && isChoiceAllowed(raw, items);
  });

  // ✅ AUTO-RESOLVE: exakt 1 Option möglich → automatisch anwenden, keine Buttons
  if (!state[day] && allowedKeys.length === 1) {
    const onlyKey = allowedKeys[0];
    const onlyChoice = variantData[onlyKey];

    state[day] = onlyKey;

    if (typeof onlyChoice.points === 'number') score += onlyChoice.points;

    if (Array.isArray(onlyChoice.items) && onlyChoice.items.length > 0) {
      onlyChoice.items.forEach(item => {
        if (!items.includes(item)) items.push(item);
      });
      saveItems(items);
    }

    if (onlyChoice.route) state.route = onlyChoice.route;

    saveState(state);
    saveScore(score);

    // Buttons ausblenden
    const btnWrap = box.querySelector('.choice-buttons');
    if (btnWrap) btnWrap.style.display = 'none';

    // Text + Hinweis anzeigen
    if (resEl) resEl.textContent = onlyChoice.text + buildAutoHint(onlyChoice);

    updateAllRouteUI();
    if (typeof window.relockDoors === 'function') window.relockDoors();
    return; // wichtig: nicht weiter rendern
  }

  // Wenn bereits gewählt oder mehrere Optionen: Buttons normal rendern (unten folgt dein btns.forEach)


  // Buttons: Sichtbarkeit + Label + Click-Handler
  btns.forEach(btn => {
    const choiceKey = btn.dataset.choice;
    const raw = variantData ? variantData[choiceKey] : null;
    const c = (raw && isChoiceAllowed(raw, items)) ? raw : null;


    if (!c) {
      btn.style.display = 'none';
      btn.textContent = '';
      btn.disabled = true;
      btn.classList.remove('chosen');
      btn.onclick = null;
      return;
    }

    btn.style.display = '';
    btn.textContent = c.label;
    btn.disabled = false;
    btn.classList.remove('chosen');

    // onclick statt addEventListener: verhindert doppelte Handler bei Re-Render
    btn.onclick = () => {
      state = loadState();
      state.route = inferRouteFromDay14(state);
      items = loadItems(); 
      if (state[day]) return;
      const liveVariant = getVariantDataForDay(day, state);
      const liveRaw = liveVariant && liveVariant[choiceKey];
      const liveC = (liveRaw && isChoiceAllowed(liveRaw, items)) ? liveRaw : null;
      if (!liveC) return;

      state[day] = choiceKey;

      if (typeof liveC.points === 'number') {
        score += liveC.points;
      }

      if (Array.isArray(liveC.items) && liveC.items.length > 0) {
        liveC.items.forEach(item => {
          if (!items.includes(item)) items.push(item);
        });
        saveItems(items);
      }

      if (liveC.route) {
        state.route = liveC.route;
      }

      saveState(state);
      saveScore(score);

      if (resEl) resEl.textContent = liveC.text;

      btns.forEach(b => {
        const key = b.dataset.choice;
        const raw2 = liveVariant && liveVariant[key];
        if (raw2 && isChoiceAllowed(raw2, items)) b.disabled = true;
        b.classList.toggle('chosen', b === btn);
      });

      // Route-Wechsel / UI neu (Texte + Buttons)
      updateAllRouteUI();

      if (typeof window.relockDoors === 'function') {
        window.relockDoors();
      }
    };
  });

// Falls schon gewählt: aber Wahl ist nicht (mehr) erlaubt → löschen und neu evaluieren
if (state[day]) {
  const chosenKey = state[day];
  const chosenRaw = variantData && variantData[chosenKey];

  if (!chosenRaw || !isChoiceAllowed(chosenRaw, items)) {
    // ❗ gespeicherte Entscheidung ist ungültig (z.B. Messer-Logik)
    delete state[day];
    saveState(state);
  } else {
    // gültige Entscheidung → normal anzeigen
    if (resEl) {
      const needsHint = (allowedKeys.length === 1);
      resEl.textContent =
        chosenRaw.text + (needsHint ? buildAutoHint(chosenRaw) : "");
    }

    btns.forEach(b => {
      const key = b.dataset.choice;
      const raw2 = variantData && variantData[key];
      if (raw2 && isChoiceAllowed(raw2, items)) b.disabled = true;
      if (key === chosenKey) b.classList.add('chosen');
    });

    return; // ⛔ wichtig: nicht weiter rendern
  }
}

  
  else {
    if (resEl) resEl.textContent = '';
  }

  if (allowedKeys.length === 1) {
  const btnWrap = box.querySelector('.choice-buttons');
  if (btnWrap) btnWrap.style.display = 'none';
}

}



function updateAllRouteChoices() {
  // Du kannst hier optional auf Tage >= 15 filtern – ich halte es bewusst simpel:
  document.querySelectorAll('.choices').forEach(renderChoicesBox);
}

function updateAllRouteUI() {
  updateAllRouteTexts();
  updateAllRouteChoices();
  updateAllRouteDoorLabels(); 
  updateOpenDayTitleFromDoor();
}
 

    // Initial setzenx
    updateAllRouteUI();

    // Beim Öffnen/Wechseln eines Türchens erneut setzen
    window.addEventListener("hashchange", updateAllRouteUI);


  }     // <-- Ende: initChoices()

  document.addEventListener('DOMContentLoaded', initChoices);
})();   // <-- Ende: IIFE