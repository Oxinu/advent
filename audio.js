// audio.js
// -------------------------------------------
// Audio-Steuerung
// - "chime"-Klang beim Öffnen einer Tür
// - leise Hintergrundglocken ("bells")
// - Autoplay-Sperre im Browser mit pointerdown umgehen
// - wireOpenSound(): verbindet offene Türen mit Sound + Animation
// -------------------------------------------

(function () {
  // Audio-Elemente aus dem DOM holen
  const chime = document.getElementById('chime');
  const bells = document.getElementById('bells');

  // Hilfsfunktion: Türchen-Klang abspielen
  function ring() {
    if (!chime) return;
    try {
      chime.currentTime = 0;  // an den Anfang springen
      chime.volume = 0.7;     // Lautstärke (0..1)
      chime.play().catch(() => {
        // Wenn der Browser das Abspielen blockiert, machen wir einfach nichts
      });
    } catch (e) {
      // Fehler ignorieren – es soll einfach „still“ sein statt kaputt
    }
  }

  // Workaround für Autoplay: Der erste Pointer-Klick des Nutzers
  // „aktiviert“ die Audio-Elemente, damit spätere play()-Aufrufe
  // nicht blockiert werden.
  window.addEventListener('pointerdown', function once() {
    // 1) chime kurz abspielen und wieder stoppen
    if (chime) {
      chime.play()
        .then(() => {
          chime.pause();
          chime.currentTime = 0;
        })
        .catch(() => {});
    }

    // 2) Hintergrundglocken starten (leise, loop ist im HTML gesetzt)
    if (bells) {
      bells.volume = 0.2; // angenehme Hintergrundlautstärke
      bells.play().catch(() => {});
    }

    // Listener nur einmal ausführen
    window.removeEventListener('pointerdown', once);
  }, { once: true });

  // Diese Funktion wird von calendar.js nach dem Sperren/Öffnen der Türen
  // aufgerufen und verknüpft alle NICHT gesperrten Türen mit:
  // - Sound (ring)
  // - Leuchteffekt (.door.twinkle)
  // - verzögertem Öffnen des Modals (location.hash)
  window.wireOpenSound = function wireOpenSound() {
    document.querySelectorAll('.door:not(.locked) a').forEach(a => {
      // Sicherstellen, dass jede Tür nur EINEN Klick-Handler bekommt
      if (a.dataset.soundWired) return;
      a.dataset.soundWired = '1';

      a.addEventListener('click', (e) => {
        // Standardverhalten (direktes Öffnen) zunächst verhindern
        e.preventDefault();

        const door = a.closest('.door');
        const href = a.getAttribute('href'); // z. B. "#day1"
        if (!href) return;

        // Sound abspielen
        ring();

        // Tür kurz „glühen“ lassen
        if (door) {
          door.classList.add('twinkle');
        }

        // Nach einer kurzen Verzögerung das Modal wirklich öffnen
        setTimeout(() => {
          if (door) {
            door.classList.remove('twinkle');
          }
          // Hash setzen -> :target in CSS öffnet das passende Modal
          location.hash = href;
        }, 700); // Dauer der visuellen „Öffnen“-Animation
      });
    });
  };
})();
