// calendar.js
// -------------------------------------------
// Türchen-Logik
// - Datum bestimmen (Europe/Berlin)
// - festlegen, welche Türen offen / gesperrt sind
// - Preview-Modus (?preview=all / ?preview=day12)
// - Progression: Tür N+1 nur offen, wenn bei Tür N
//   (falls vorhanden) eine Entscheidung getroffen wurde
// -------------------------------------------

const EXACT_ONLY = false;               // true: Tür nur am exakten Datum, false: kumulativ bis heute
const TZ = "Europe/Berlin";
const PLAYER_KEY = "adventPlayerName";
const CHOICES_BASE_KEY = "adventChoices_";

// --- Datum bestimmen (Europe/Berlin) ---
const parts = new Intl.DateTimeFormat("de-DE", {
  timeZone: TZ,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).formatToParts(new Date());

const today = {
  y: +parts.find(p => p.type === "year").value,
  m: +parts.find(p => p.type === "month").value,
  d: +parts.find(p => p.type === "day").value,
};

// --- URL-Parameter lesen (Preview) ---
const qs = new URLSearchParams(location.search);
const preview = qs.get("preview");

// --- Spieler & Choices laden (wie in choices.js) ---
function getPlayerName() {
  try {
    let name = localStorage.getItem(PLAYER_KEY);
    if (!name) {
      name = prompt("Wie heißt du? (Name oder Spitzname)");
      if (!name || !name.trim()) {
        name = "Standard";
      } else {
        name = name.trim();
      }
      localStorage.setItem(PLAYER_KEY, name);
    }
    return name;
  } catch (e) {
    return "Standard";
  }
}

function loadChoiceState() {
  try {
    const playerName = getPlayerName();
    const key = CHOICES_BASE_KEY + playerName;
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch (e) {
    return {};
  }
}

// --- Hilfsfunktionen ---

function isOpenByDate(day) {
  if (today.m !== 12) return false;
  if (EXACT_ONLY) {
    return day === today.d;
  }
  return day <= today.d;
}

function niceDate(day) {
  const monthNames = [
    "Januar","Februar","März","April","Mai","Juni",
    "Juli","August","September","Oktober","November","Dezember"
  ];
  return `${day}. ${monthNames[11]}`; // 11 = Dezember
}

let toastTimer = null;
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// Prüft, ob der Vortag bzgl. „adventChoices“ erfüllt ist
function isPreviousDaySatisfied(day, choiceState) {
  if (day <= 1) return true; // Tür 1 hat keinen Vorgänger

  const prev = day - 1;
  const prevSelector = `#day${prev} .choices`;
  const hasChoices = !!document.querySelector(prevSelector);

  if (!hasChoices) {
    // Vortag hat gar keine Entscheidung -> keine zusätzliche Bedingung
    return true;
  }

  // Es gibt eine choices-Box -> wir erwarten einen Eintrag im State
  return Object.prototype.hasOwnProperty.call(choiceState, String(prev));
}

// Generiert die Sperr-Meldung
function lockedMessage(day, choiceState) {
  if (!isOpenByDate(day)) {
    const when = niceDate(day);
    if (today.m !== 12) {
      return `Dieses Türchen öffnet am ${when}.`;
    }
    return EXACT_ONLY
      ? `Dieses Türchen ist nur am ${when} geöffnet.`
      : `Dieses Türchen öffnet ab dem ${when}.`;
  }

  if (!isPreviousDaySatisfied(day, choiceState)) {
    const prev = day - 1;
    return `Öffne und entscheide zuerst Tür ${prev}.`;
  }

  return "Dieses Türchen ist derzeit gesperrt.";
}

// Prüft, ob eine Tür mit Nummer „day“ komplett offen sein darf
function isUnlocked(day, choiceState) {
  // Preview: alles oder nur bestimmter Tag
  if (preview === "all") return true;
  if (preview && preview.startsWith("day")) {
    return day === +preview.replace("day", "");
  }

  if (!isOpenByDate(day)) return false;
  if (!isPreviousDaySatisfied(day, choiceState)) return false;

  return true;
}

// href-Hash (#dayX) aus einem Link lesen
function parseDayFromHref(href) {
  if (!href) return null;
  const m = href.match(/#day(\d{1,2})$/);
  return m ? +m[1] : null;
}

// Türen je nach Regel sperren/öffnen
function lockDoors(choiceState) {
  document.querySelectorAll(".door a").forEach(a => {
    const raw = a.getAttribute("href") || a.dataset.target || "";
    const day = parseDayFromHref(raw);
    if (!day) return;

    const door = a.closest(".door");

    // alten Sperr-Handler entfernen (falls vorhanden)
    if (a._lockHandler) {
      a.removeEventListener("click", a._lockHandler);
      delete a._lockHandler;
    }

    if (isUnlocked(day, choiceState)) {
      // 🔓 Tür offen
      door.classList.remove("locked");
      const target = a.dataset.target || raw;
      if (target && !a.getAttribute("href")) {
        a.setAttribute("href", target);
      }
      a.removeAttribute("aria-disabled");
      a.removeAttribute("role");
    } else {
      // 🔒 Tür gesperrt
      door.classList.add("locked");
      const target = raw;
      a.dataset.target = target;
      a.removeAttribute("href");
      a.setAttribute("role", "button");
      a.setAttribute("aria-disabled", "true");

      a._lockHandler = (e) => {
        e.preventDefault();
        showToast(lockedMessage(day, choiceState));
      };
      a.addEventListener("click", a._lockHandler);
    }
  });
}

// Direkte URL-Aufrufe wie #day3 abfangen
function guardHash(choiceState) {
  if (!location.hash) return;
  const day = parseDayFromHref(location.hash);
  if (!day) return;

  if (!isUnlocked(day, choiceState)) {
    history.replaceState(null, "", location.pathname + location.search);
    showToast(lockedMessage(day, choiceState));
  }
}

// Initialisierung
document.addEventListener("DOMContentLoaded", () => {
  // Jahr im Footer setzen (optional)
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

let choiceState = loadChoiceState();

  // Türen initial sperren/öffnen
  lockDoors(choiceState);
  guardHash(choiceState);
  window.addEventListener("hashchange", () => guardHash(choiceState));

  // Globale Funktion, damit choices.js nach einer Entscheidung neu sperren kann
  window.relockDoors = function () {
    choiceState = loadChoiceState();  // neuen Entscheidungs-Stand holen
    lockDoors(choiceState);           // Türen neu evaluieren
  };

  if (typeof window.wireOpenSound === "function") {
    window.wireOpenSound();
  }
});