/* ============================================================
   script.js
   ------------------------------------------------------------
   The engine that drives the whole site. Reads from content.js
   (SITE_CONFIG + SECTIONS) and renders whatever page the URL
   hash points to. Nothing in here is content-specific — if you
   need to change WHAT shows up, edit content.js, not this file.

   ROUTES (URL hash):
     #/                          -> homepage
     #/menu                      -> main menu
     #/jesus-menu                -> jesus sub-menu
     #/scripture-menu            -> scripture sub-menu
     #/section/<section-id>      -> a specific content section
   ============================================================ */

const APP = document.getElementById("app");
const LANG_KEY = "salma-site-lang"; // localStorage key for remembered language

/* ----------------------------------------------------------
   LANGUAGE STATE
   Defaults to English on first visit; remembers choice after.
   ---------------------------------------------------------- */
function getLang() {
  return localStorage.getItem(LANG_KEY) || "en";
}

/* ----------------------------------------------------------
   SLIDE POSITION MEMORY
   ------------------------------------------------------------
   When switching language mid-section, we want to land on the
   SAME slide number in the new language rather than jumping back
   to slide 1. This tracks "which slide am I on" per section id,
   updated live as the person swipes/clicks through, and is read
   back when the carousel re-renders after a language switch.
   Intentionally a plain in-memory object (not localStorage) since
   this only needs to survive language toggles within the same
   visit, not across page reloads or browser sessions.
   ---------------------------------------------------------- */
const slidePositionMemory = {};

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  render(); // re-render current page in the new language, no navigation
}

/* ----------------------------------------------------------
   BACKGROUND MUSIC
   ------------------------------------------------------------
   One looping ambient track plays across the homepage and menus.
   It auto-pauses while reading a content section (slides/My Story)
   and auto-resumes when navigating back to a menu — so it never
   competes with someone actually reading.

   AUTOPLAY NOTE: browsers block audio from playing automatically
   before the person has interacted with the page at all. So on
   first load, music stays silent until their first click anywhere
   (handled by the one-time "unlock" listener below) — after that
   first tap, it plays/pauses freely as they navigate.

   TO ADD YOUR MUSIC FILE:
     1. Put an MP3 at assets/audio/background-music.mp3
     2. That's it — this code already points at that path.
   ---------------------------------------------------------- */
const MUSIC_PATH = "assets/audio/background-music.mp3";
const MUSIC_MUTED_KEY = "salma-site-music-muted";

// Always start unmuted on fresh page load — don't carry over a saved
// mute preference from a previous visit, since visitors expect music
// to play when they first open the site. They can still mute via the
// speaker button, but that choice resets each visit.
localStorage.removeItem(MUSIC_MUTED_KEY);

const bgMusic = new Audio(MUSIC_PATH);
bgMusic.loop = true;
bgMusic.volume = 0.35; // kept gentle/ambient rather than attention-grabbing
bgMusic.preload = "auto";

let musicUnlocked = false; // becomes true after the first user interaction

function isMusicMuted() {
  return localStorage.getItem(MUSIC_MUTED_KEY) === "true";
}

function setMusicMuted(muted) {
  localStorage.setItem(MUSIC_MUTED_KEY, muted ? "true" : "false");
  if (muted) {
    bgMusic.pause();
  } else if (musicUnlocked) {
    bgMusic.play().catch(() => {}); // ignore if browser still blocks it
  }
}

/* Call this whenever entering a menu/homepage page */
function playMusicIfAllowed() {
  if (isMusicMuted() || !musicUnlocked) return;
  bgMusic.play().catch(() => {
    // Browser blocked it (shouldn't happen after unlock, but just in
    // case) — fail silently rather than showing an error to the user.
  });
}

/* Call this whenever entering a content section (reading time) */
function pauseMusicForReading() {
  bgMusic.pause();
}

/* One-time unlock: the browser requires a real user gesture (click,
   tap, keypress) before audio is allowed to play. Scroll events are
   explicitly NOT a reliable trigger for this across browsers (Chrome,
   in particular, does not treat scroll as a qualifying gesture for
   autoplay), so we rely on click/tap — the one approach that's
   consistent everywhere. After this fires once, the music keeps
   playing/pausing freely as the person navigates, no further
   permission needed for the rest of the visit. */
function tryUnlockMusic() {
  if (musicUnlocked) return;
  musicUnlocked = true;
  if (!isMusicMuted() && parseRoute().page !== "section") {
    bgMusic.play().catch(() => {});
  }
}

document.addEventListener("click", function unlockMusicOnClick(e) {
  if (musicUnlocked) return;
  // If their very first click was the mute button itself, let that
  // handler take care of things — don't start playback just to have
  // it immediately paused a moment later.
  if (e.target.closest(".music-toggle")) {
    musicUnlocked = true;
    return;
  }
  tryUnlockMusic();
});

/* ----------------------------------------------------------
   ROUTER
   Listens for hash changes (covers back/forward browser buttons
   automatically) and re-renders whenever the hash changes.
   ---------------------------------------------------------- */
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

function parseRoute() {
  const hash = window.location.hash || "#/";
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);

  if (parts.length === 0) return { page: "home" };
  if (parts[0] === "menu") return { page: "main-menu" };
  if (parts[0] === "jesus-menu") return { page: "jesus-menu" };
  if (parts[0] === "scripture-menu") return { page: "scripture-menu" };
  if (parts[0] === "section" && parts[1]) return { page: "section", id: parts[1] };

  return { page: "home" }; // fallback for unrecognized routes
}

function navigate(hash) {
  window.location.hash = hash;
  // hashchange listener handles the render
}

/* ----------------------------------------------------------
   MAIN RENDER DISPATCH
   ---------------------------------------------------------- */
function render() {
  const route = parseRoute();
  const lang = getLang();

  switch (route.page) {
    case "home":
      renderHomepage(lang);
      break;
    case "main-menu":
      renderMainMenu(lang);
      break;
    case "jesus-menu":
      renderSubMenu(lang, "jesus", SITE_CONFIG.jesusMenu.image[lang]);
      break;
    case "scripture-menu":
      renderSubMenu(lang, "scripture", SITE_CONFIG.scriptureMenu.image[lang]);
      break;
    case "section":
      renderSection(lang, route.id);
      break;
    default:
      renderHomepage(lang);
  }

  // Music behavior:
  // - Menus/homepage: always resume automatically
  // - Sections: keep playing (no auto-mute). If user manually mutes
  //   during a section, that mute persists to other sections too.
  //   But returning to a menu always resumes music.
  if (route.page !== "section") {
    playMusicIfAllowed();
  }
  // Always re-render the nav bar speaker icon to reflect current state
  // (it gets rebuilt on every render anyway via navBarHTML)

  window.scrollTo(0, 0);
}

/* ----------------------------------------------------------
   PAGE: Homepage
   Full-bleed image with an invisible clickable overlay on the
   "Begin Reading" button area (positioned via CSS class
   .begin-reading-hotspot — see style.css to adjust coordinates
   if the Canva export ever changes size/layout).
   ---------------------------------------------------------- */
function renderHomepage(lang) {
  APP.innerHTML = `
    <div class="page page-image-only">
      ${navBarHTML(lang)}
      <div class="image-stage">
        <img src="${SITE_CONFIG.homepage.image[lang]}" alt="Homepage" class="full-image" />
        <button class="hotspot full-image-hotspot" aria-label="Continue to menu"></button>
        <div class="tap-hint">${lang === "en" ? "Tap anywhere to continue ✦" : "Ketuk di mana saja untuk lanjut ✦"}</div>
      </div>
    </div>
  `;

  APP.querySelector(".full-image-hotspot").addEventListener("click", () => {
    navigate("#/menu");
  });
}

/* ----------------------------------------------------------
   PAGE: Main Menu
   Image background + invisible hotspots positioned over each
   card. Coordinates are defined in style.css as percentage-based
   absolutely-positioned buttons, so they scale with the image.
   ---------------------------------------------------------- */
function renderMainMenu(lang) {
  APP.innerHTML = `
    <div class="page page-image-only">
      ${navBarHTML(lang, { backLinks: [{ label: backLabelText(lang, "home"), hash: "#/" }] })}
      <div class="image-stage">
        <img src="${SITE_CONFIG.mainMenu.image[lang]}" alt="Main Menu" class="full-image" />
        <button class="hotspot menu-hotspot menu-hotspot-my-story" aria-label="My Story"></button>
        <button class="hotspot menu-hotspot menu-hotspot-concept" aria-label="Concept of God"></button>
        <button class="hotspot menu-hotspot menu-hotspot-salvation" aria-label="Salvation"></button>
        <button class="hotspot menu-hotspot menu-hotspot-jesus" aria-label="Who Is Jesus"></button>
        <button class="hotspot menu-hotspot menu-hotspot-scripture" aria-label="Scripture Reflection"></button>
        <button class="hotspot menu-hotspot menu-hotspot-dilemma" aria-label="Islamic Dilemma"></button>
        <button class="hotspot menu-hotspot menu-hotspot-final" aria-label="Final Note"></button>
      </div>
    </div>
  `;

  bindHotspot(".menu-hotspot-my-story", "#/section/my-story");
  bindHotspot(".menu-hotspot-concept", "#/section/concept");
  bindHotspot(".menu-hotspot-salvation", "#/section/salvation");
  bindHotspot(".menu-hotspot-jesus", "#/jesus-menu");
  bindHotspot(".menu-hotspot-scripture", "#/scripture-menu");
  bindHotspot(".menu-hotspot-dilemma", "#/section/islamic-dilemma");
  bindHotspot(".menu-hotspot-final", "#/section/final-note");
}

/* ----------------------------------------------------------
   PAGE: Sub-menus (Jesus Menu / Scripture Menu)
   Same pattern as Main Menu but with fewer cards. Which hotspot
   classes appear depends on which sub-menu this is.
   ---------------------------------------------------------- */
function renderSubMenu(lang, menuType, imageSrc) {
  const altText = menuType === "jesus" ? "Jesus Menu" : "Scripture Menu";

  const hotspotsHTML = menuType === "jesus"
    ? `
      <button class="hotspot submenu-hotspot jesus-hotspot-historical" aria-label="Historical Jesus"></button>
      <button class="hotspot submenu-hotspot jesus-hotspot-islam" aria-label="Jesus in Islam"></button>
      <button class="hotspot submenu-hotspot jesus-hotspot-divine" aria-label="Jesus is Divine"></button>
    `
    : `
      <button class="hotspot submenu-hotspot scripture-hotspot-bible" aria-label="The Bible"></button>
      <button class="hotspot submenu-hotspot scripture-hotspot-quran" aria-label="The Qur'an"></button>
    `;

  APP.innerHTML = `
    <div class="page page-image-only">
      ${navBarHTML(lang, {
        backLinks: [{ label: backLabelText(lang, "main-menu"), hash: "#/menu" }]
      })}
      <div class="image-stage">
        <img src="${imageSrc}" alt="${altText}" class="full-image" />
        ${hotspotsHTML}
      </div>
    </div>
  `;

  if (menuType === "jesus") {
    bindHotspot(".jesus-hotspot-historical", "#/section/historical-jesus");
    bindHotspot(".jesus-hotspot-islam", "#/section/jesus-in-islam");
    bindHotspot(".jesus-hotspot-divine", "#/section/jesus-divine");
  } else {
    bindHotspot(".scripture-hotspot-bible", "#/section/bible");
    bindHotspot(".scripture-hotspot-quran", "#/section/quran");
  }
}

/* ----------------------------------------------------------
   PAGE: Content Section (slides or story)
   ---------------------------------------------------------- */
function renderSection(lang, sectionId) {
  const section = getSectionById(sectionId);

  if (!section) {
    APP.innerHTML = `
      <div class="page page-text page-story">
        ${navBarHTML(lang, { backLinks: [{ label: backLabelText(lang, "main-menu"), hash: "#/menu" }] })}
        <div class="content-stage">
          <p>${lang === "en" ? "Section not found." : "Bagian tidak ditemukan."}</p>
        </div>
      </div>
    `;
    return;
  }

  const parentHash = section.parent === "jesus" ? "#/jesus-menu"
                    : section.parent === "scripture" ? "#/scripture-menu"
                    : "#/menu";
  const parentLabel = section.parent === "jesus" ? backLabelText(lang, "jesus-menu")
                     : section.parent === "scripture" ? backLabelText(lang, "scripture-menu")
                     : backLabelText(lang, "main-menu");

  const showDoubleBack = section.parent === "jesus" || section.parent === "scripture";

  // Back links now live in the sticky nav bar so they stay reachable
  // while scrolling through long slide sections — no more scrolling
  // all the way down just to find a way out.
  const backLinks = [{ label: parentLabel, hash: parentHash }];
  if (showDoubleBack) {
    backLinks.push({ label: backLabelText(lang, "main-menu"), hash: "#/menu" });
  }

  if (section.type === "story") {
    APP.innerHTML = `
      <div class="page page-text page-story">
        ${navBarHTML(lang, { backLinks, showMuteHint: true })}
        <article class="content-stage story-content">
          <h1 class="section-title">${section.title[lang]}</h1>
          ${section.html[lang]}
        </article>
      </div>
    `;
    // Auto-hide mute hint after 4 seconds
    const muteHint = document.getElementById("mute-hint");
    if (muteHint) {
      muteHint.classList.add("is-visible");
      setTimeout(() => muteHint.classList.remove("is-visible"), 4000);
    }
  } else {
    const folder = section.folder[lang];
    const count = section.slideCount[lang];
    const slidesHTML = Array.from({ length: count }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return `
        <div class="carousel-slide">
          <img src="assets/slides/${folder}/${num}.png" alt="${section.title[lang]} slide ${i + 1}" class="slide-image" loading="${i === 0 ? "eager" : "lazy"}" />
        </div>
      `;
    }).join("\n");

    const prevLabel = lang === "en" ? "Previous slide" : "Slide sebelumnya";
    const nextLabel = lang === "en" ? "Next slide" : "Slide berikutnya";

    const swipeHintText = lang === "en" ? "swipe ›››" : "geser ›››";

    APP.innerHTML = `
      <div class="page page-text">
        ${navBarHTML(lang, { backLinks, showMuteHint: true })}
        <div class="carousel-wrapper">
          <div class="carousel-track" id="carousel-track" tabindex="0">
            ${slidesHTML}
          </div>
          <button class="carousel-arrow carousel-arrow-prev" aria-label="${prevLabel}">&#10094;</button>
          <button class="carousel-arrow carousel-arrow-next" aria-label="${nextLabel}">&#10095;</button>
          <div class="carousel-counter" id="carousel-counter"><span id="carousel-current">1</span> / ${count}</div>
          <div class="swipe-hint" id="swipe-hint">${swipeHintText}</div>
        </div>
      </div>
    `;

    initCarousel(count, sectionId);
  }
}

/* ----------------------------------------------------------
   CAROUSEL BEHAVIOR
   Uses native CSS scroll-snap for the swipe feel (smooth on
   touch devices, no extra JS needed for the actual gesture).
   JS here only handles: arrow-button clicks, keyboard arrows,
   keeping the "current / total" counter in sync as the person
   scrolls/swipes, and remembering position across language
   switches (see slidePositionMemory above).
   ---------------------------------------------------------- */
function initCarousel(totalSlides, sectionId) {
  const track = document.getElementById("carousel-track");
  const counterEl = document.getElementById("carousel-counter");
  const counterNum = document.getElementById("carousel-current");
  const swipeHint = document.getElementById("swipe-hint");
  if (!track) return;

  // Auto-hide swipe hint after 3 seconds
  if (swipeHint) {
    swipeHint.classList.add("is-visible");
    setTimeout(() => swipeHint.classList.remove("is-visible"), 3000);
  }

  // Auto-hide mute hint after 4 seconds (it lives in the nav bar)
  const muteHint = document.getElementById("mute-hint");
  if (muteHint) {
    muteHint.classList.add("is-visible");
    setTimeout(() => muteHint.classList.remove("is-visible"), 4000);
  }

  let hideTimer = null;

  function flashCounter() {
    if (!counterEl) return;
    counterEl.classList.add("is-visible");
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      counterEl.classList.remove("is-visible");
    }, 3000);
  }

  function currentIndex() {
    return Math.round(track.scrollLeft / track.clientWidth);
  }

  function goToSlide(index, instant) {
    const clamped = Math.max(0, Math.min(totalSlides - 1, index));
    if (instant) {
      const previousBehavior = track.style.scrollBehavior;
      track.style.scrollBehavior = "auto";
      track.scrollLeft = clamped * track.clientWidth;
      track.style.scrollBehavior = previousBehavior;
    } else {
      track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    }
    slidePositionMemory[sectionId] = clamped;
  }

  // --- Fix rough swiping ---
  // The problem: CSS scroll-snap alone lets even a gentle flick jump
  // multiple slides because momentum scrolling carries the scroll past
  // the next snap point. Solution: intercept touch events manually,
  // measure actual swipe distance/velocity, and only advance ONE slide
  // per gesture regardless of speed. This mirrors how Instagram works.
  let touchStartX = 0;
  let touchStartTime = 0;
  let isSwiping = false;
  const MIN_SWIPE_DISTANCE = 40; // px — ignore accidental micro-swipes

  track.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartTime = Date.now();
    isSwiping = true;
    // Lock scroll-snap during the gesture so we control the outcome
    track.style.overflowX = "hidden";
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    // Don't call preventDefault (passive listener) but track position
  }, { passive: true });

  track.addEventListener("touchend", (e) => {
    if (!isSwiping) return;
    isSwiping = false;

    const deltaX = touchStartX - e.changedTouches[0].clientX;
    const elapsed = Date.now() - touchStartTime;

    // Re-enable overflow first so goToSlide can scroll
    track.style.overflowX = "auto";

    if (Math.abs(deltaX) < MIN_SWIPE_DISTANCE) {
      // Too short — snap back to current slide without advancing
      goToSlide(currentIndex(), true);
      return;
    }

    // Always advance exactly ONE slide regardless of swipe speed
    if (deltaX > 0) {
      goToSlide(currentIndex() + 1);
    } else {
      goToSlide(currentIndex() - 1);
    }
    flashCounter();
  }, { passive: true });

  // Scroll event: keep counter in sync (covers arrow clicks + keyboard)
  let ticking = false;
  let lastShownIndex = 0;
  track.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const idx = currentIndex();
      counterNum.textContent = idx + 1;
      if (idx !== lastShownIndex) {
        lastShownIndex = idx;
      }
      slidePositionMemory[sectionId] = idx;
      flashCounter();
      ticking = false;
    });
  });

  // Arrow buttons
  const prevBtn = document.querySelector(".carousel-arrow-prev");
  const nextBtn = document.querySelector(".carousel-arrow-next");
  if (prevBtn) prevBtn.addEventListener("click", () => { goToSlide(currentIndex() - 1); flashCounter(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { goToSlide(currentIndex() + 1); flashCounter(); });

  // Keyboard arrows
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { goToSlide(currentIndex() + 1); flashCounter(); e.preventDefault(); }
    if (e.key === "ArrowLeft") { goToSlide(currentIndex() - 1); flashCounter(); e.preventDefault(); }
  });

  // Restore remembered position after language switch
  const rememberedIndex = slidePositionMemory[sectionId];
  if (rememberedIndex && rememberedIndex > 0 && rememberedIndex < totalSlides) {
    requestAnimationFrame(() => {
      goToSlide(rememberedIndex, true);
      counterNum.textContent = rememberedIndex + 1;
    });
  }

  flashCounter();
}

/* ----------------------------------------------------------
   SHARED UI: Nav bar (Home/Back links + Language toggle)
   `backLinks` is an array of { label, hash } objects. Pass an
   empty array (or omit) to show "Home" instead — used on the
   homepage itself, where there's nowhere else to go back to.
   On content pages we pass 1 or 2 links: the immediate parent
   menu, and (if nested under Jesus/Scripture) also Main Menu.
   ---------------------------------------------------------- */
function navBarHTML(lang, { backLinks, showMuteHint } = {}) {
  const links = backLinks && backLinks.length > 0
    ? backLinks.map(l => `<a href="${l.hash}" class="nav-back">${l.label}</a>`).join("")
    : `<a href="#/" class="nav-home">${lang === "en" ? "Home" : "Beranda"}</a>`;

  const muted = isMusicMuted();
  const musicLabel = lang === "en" ? (muted ? "Unmute music" : "Mute music") : (muted ? "Aktifkan musik" : "Matikan musik");
  const muteHintText = lang === "en"
    ? "🔇 Tap to mute while reading"
    : "🔇 Ketuk untuk matikan musik";

  return `
    <header class="nav-bar">
      <div class="nav-left">
        ${links}
      </div>
      <div class="nav-right">
        <div class="music-btn-wrapper">
          <button class="music-toggle" aria-label="${musicLabel}" title="${musicLabel}">
            ${muted ? "&#128263;" : "&#128266;"}
          </button>
          ${showMuteHint ? `<div class="mute-hint" id="mute-hint">${muteHintText}</div>` : ""}
        </div>
        <button class="lang-toggle" data-current="${lang}">
          <span class="${lang === "en" ? "lang-active" : ""}">EN</span>
          <span class="lang-divider">/</span>
          <span class="${lang === "id" ? "lang-active" : ""}">ID</span>
        </button>
      </div>
    </header>
  `;
}

/* Attaches the music mute toggle handler after any render */
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".music-toggle");
  if (!toggle) return;
  setMusicMuted(!isMusicMuted());
  render(); // re-render so the speaker icon updates to reflect new state
});

/* Attaches the language toggle click handler after any render */
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".lang-toggle");
  if (!toggle) return;
  const current = getLang();
  setLang(current === "en" ? "id" : "en");
});

/* ----------------------------------------------------------
   HELPERS
   ---------------------------------------------------------- */
function bindHotspot(selector, hash) {
  const el = APP.querySelector(selector);
  if (!el) return;
  el.addEventListener("click", () => {
    el.classList.add("is-pressed");
    // Brief delay so the press effect is actually visible before the
    // page changes — long enough to register, short enough to still
    // feel instant rather than sluggish.
    setTimeout(() => navigate(hash), 160);
  });
}

function backLabelText(lang, target) {
  const labels = {
    home: { en: "← Home", id: "← Beranda" },
    "main-menu": { en: "← Main Menu", id: "← Menu Utama" },
    "jesus-menu": { en: "← Jesus Menu", id: "← Menu Yesus" },
    "scripture-menu": { en: "← Scripture Menu", id: "← Menu Kitab Suci" }
  };
  return labels[target][lang];
}
