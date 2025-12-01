// calendar.js
// -------------------------------------------
// Steuerung der Türchen-Logik
// - Datum bestimmen (inkl. Zeitzone Europe/Berlin)
// - festlegen, welche Türchen offen / gesperrt sind
// - Preview-Modus über URL-Parameter (?preview=all / ?preview=day12)
// - Toast-Meldungen anzeigen
// - direkte Zugriffe per #dayX prüfen und ggf. blockieren
// -------------------------------------------

// Einstellung: Ob Türchen nur GENAU am Tag geöffnet sind oder bis heute
// true  -> Türchen ist nur am jeweiligen Datum offen
// false -> alle Türchen bis einschließlich heute sind offen
const EXACT_ONLY = false;

// Zeitzone für die Datumsberechnung
const TZ = 'Europe/Berlin';

// Heutiges Datum in der gewählten Zeitzone bestimmen
const parts = new Intl.DateTimeFormat('de-DE', {
  timeZone: TZ,
  year:  'numeric',
  month: '2-digit',
  day:   '2-digit'
}).formatToParts(new Date());

// In ein einfaches Objekt (today) umwandeln
const today = {
  y: +parts.find(p => p.type === 'year').value,
  m: +parts.find(p => p.type === 'month').value,
  d: +parts.find(p => p.type === 'day').value
};

// Abfrage der URL-Parameter (z. B. ?preview=all oder ?preview=day12)
const qs = new URLSearchParams(location.search);
const preview = qs.get('preview');

// Prüft, ob ein Türchen mit bestimmter Nummer (1–24) geöffnet sein darf
function isUnlocked(day) {
  // 1) Voller Preview-Modus: ?preview=all -> alle Türchen offen
  if (preview === 'all') return true;

  // 2) Einzelnes Türchen im Preview: ?preview=day12 -> nur Tag 12 offen
  if (preview && preview.startsWith('day')) {
    return day === +preview.replace('day', '');
  }

  // 3) Außerhalb vom Dezember: alles zu
  if (today.m !== 12) return false;

  // 4) Exakt nur am Tag
  if (EXACT_ONLY) return day === today.d;

  // 5) Kumulativ bis heute
  return day <= today.d;
}

// Formatiert das Datum für Meldungen (immer Dezember)
function niceDate(day) {
  const monthNames = [
    'Januar','Februar','März','April','Mai','Juni',
    'Juli','August','September','Oktober','November','Dezember'
  ];
  return `${day}. ${monthNames[11]}`; // 11 = Dezember
}

// Kleine Toast-Blase unten in der Mitte anzeigen
let toastTimer = null;
function showToast(msg) {
  let t = document.querySelector('.toast');
  // Falls noch kein Toast-Element existiert, eines erstellen
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');

  // Timer zurücksetzen, damit der Toast einige Sekunden sichtbar bleibt
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// Sperrt oder öffnet die Türen je nach Datum / Preview
function lockDoors() {
  document.querySelectorAll('.door a').forEach(a => {
    // Das Ziel (z. B. "#day1") aus href holen
    const raw = a.getAttribute('href') || a.dataset.target || '';
    const m = /#day(\d{1,2})$/.exec(raw);
    if (!m) return;

    const day  = +m[1];
    const door = a.closest('.door');

    // Falls von einem früheren Lauf noch ein Klick-Handler existiert -> entfernen
    if (a._lockHandler) {
      a.removeEventListener('click', a._lockHandler);
      delete a._lockHandler;
    }

    // 🔓 FALL 1: Tür darf offen sein (Datum passt ODER Preview)
    if (isUnlocked(day)) {
      door.classList.remove('locked');

      // Ursprüngliches Ziel wiederherstellen, falls wir es zuvor entfernt hatten
      const target = a.dataset.target || raw;
      if (!a.getAttribute('href') && target) {
        a.setAttribute('href', target);
      }

      a.removeAttribute('aria-disabled');
      a.removeAttribute('role');
      return;
    }

    // 🔒 FALL 2: Tür ist gesperrt
    door.classList.add('locked');

    const target = raw;
    // Ziel (#dayX) merken, damit wir es später wieder setzen können
    a.dataset.target = target;
    // href entfernen, damit :target-Logik der Modals nicht anspringt
    a.removeAttribute('href');

    // Für Screenreader kenntlich machen, dass hier nichts passiert
    a.setAttribute('role', 'button');
    a.setAttribute('aria-disabled', 'true');

    // Klick-Handler für gesperrte Tür -> zeigt nur Toast mit Datum
    a._lockHandler = (e) => {
      e.preventDefault();
      const when = niceDate(day);
      const msg = (today.m !== 12)
        ? `Dieses Türchen öffnet am ${when}.`
        : (EXACT_ONLY
            ? `Dieses Türchen ist nur am ${when} geöffnet.`
            : `Dieses Türchen öffnet ab dem ${when}.`);
      showToast(msg);
    };
    a.addEventListener('click', a._lockHandler);
  });
}

// Verhindert, dass jemand gesperrte Türchen direkt über die URL öffnet
// Beispiel: https://.../index.html#day5
function guardHash() {
  if (!location.hash) return;

  const m = /#day(\d{1,2})$/.exec(location.hash);
  if (!m) return;

  const day = +m[1];

  // Wenn Tür nicht offen sein darf -> Hash wieder entfernen + Toast zeigen
  if (!isUnlocked(day)) {
    history.replaceState(null, '', location.pathname + location.search);
    const when = niceDate(day);
    showToast(
      today.m !== 12
        ? `Dieses Türchen öffnet am ${when}.`
        : (EXACT_ONLY ? `Nur am ${when} geöffnet.` : `Ab dem ${when} geöffnet.`)
    );
  }
}

// Initialisierung, sobald das Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {
  // Jahr im Footer automatisch setzen
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Türen sperren/öffnen
  lockDoors();

  // Direkten Hash-Zugriff prüfen
  guardHash();
  window.addEventListener('hashchange', guardHash);

  // Falls die Sound-Logik vorhanden ist, Türen mit Sound verbinden
  if (typeof window.wireOpenSound === 'function') {
    window.wireOpenSound();
  }
});
