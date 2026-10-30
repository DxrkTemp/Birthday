const CONFIG = {
  unlockAt: "2026-10-31T00:00:00+08:00",
  lockText: "IT WILL GET UNLOCKED BY OCT 31",

  name: "My Wifeyy",
  from: "your loving person",
  giftNote: "For my Wifeyy",
  giftOpened: "Yayyy, Myy! This little gift is all yours",
  letterTitle: "A little love letter for My Wifeyy",
  dear: "To my Wifeyy,",
  sign: "Forever yours, Myy.",

  letter: `Hiii, Myy!

I made this little page just for you because I want to make you feel special and loved.

Even though we don't have pictures together yet, I still love seeing your pictures and all the little things about you that make me happy.

Thank you for being part of my life, for making me smile, and for being my favorite person. I hope this little surprise makes you smile too.

I love you so much, Myy. I hope we can make lots of beautiful memories together someday.

Always remember that you have someone who loves you so much, and that's me mwehehehe.`,

  finalText:
    "Myy, you're someone really special to me. I made this little surprise just to remind you how much I love you. We may not have pictures together yet, but someday we'll have lots of memories and pictures to look back on. I love you, My Wifeyy! 💗",

  noLines: [
    "Awww, Myy, are you sure?",
    "Hehe, that button is shy. Try the other one",
    "Pretty please, Wifeyy?",
    "Okay, I'll wait here for you, Myy",
  ],

  photos: [
    { src: "photos/photo4.jpg", caption: "My Wifeyy" },
    { src: "photos/photo5.jpg", caption: "My Favorite Girl" },
    { src: "photos/photo3.jpg", caption: "My Favorite Photo" },
    { src: "photos/photo6.jpg", caption: "Beautiful Wifeyy" },
    { src: "photos/photo1.jpg", caption: "My Pretty Girl" },
    { src: "photos/photo2.jpg", caption: "My Everything" },
  ],
};

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const HEART_PATH =
    '<path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.5 6.7 4.5c2.1 0 3.6 1.2 5.3 3.1 1.7-1.9 3.2-3.1 5.3-3.1 3.7 0 5.8 3.8 4.3 7.3C19.5 16.4 12 21 12 21z"/>';

  const CAMERA_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';

  const BEAR = `
    <svg class="bear" viewBox="0 0 200 190" aria-hidden="true">
      <g class="b-all">
        <ellipse class="foot" cx="72" cy="174" rx="17" ry="10"/>
        <ellipse class="foot" cx="128" cy="174" rx="17" ry="10"/>
        <ellipse class="fill" cx="100" cy="140" rx="58" ry="38"/>
        <g class="armL"><ellipse class="fill" cx="47" cy="132" rx="14" ry="20"/></g>
        <g class="armR"><ellipse class="fill" cx="153" cy="132" rx="14" ry="20"/></g>
        <g class="head">
          <circle class="fill" cx="44" cy="42" r="19"/>
          <circle class="ear-in" cx="44" cy="42" r="9"/>
          <circle class="fill" cx="156" cy="42" r="19"/>
          <circle class="ear-in" cx="156" cy="42" r="9"/>
          <ellipse class="fill" cx="100" cy="84" rx="72" ry="56"/>
          <g class="dots">
            <circle cx="76" cy="86" r="7"/>
            <circle cx="124" cy="86" r="7"/>
            <circle class="shine" cx="78.5" cy="83.5" r="2.2"/>
            <circle class="shine" cx="126.5" cy="83.5" r="2.2"/>
          </g>
          <g class="arcs">
            <path d="M66 89 q10 -12 20 0"/>
            <path d="M114 89 q10 -12 20 0"/>
          </g>
          <path class="brow" d="M64 70 l16 5 M136 70 l-16 5"/>
          <ellipse class="blush" cx="58" cy="104" rx="12" ry="6.5"/>
          <ellipse class="blush" cx="142" cy="104" rx="12" ry="6.5"/>
          <path class="m-w" d="M89 102 q5.5 7 11 0 q5.5 7 11 0"/>
          <ellipse class="m-o" cx="100" cy="107" rx="5.5" ry="7"/>
          <path class="m-frown" d="M92 109 q8 -7 16 0"/>
          <path class="tear" d="M72 96 q-5 9 0 12 q5 -3 0 -12z"/>
        </g>
      </g>
    </svg>`;

  const ROSE_COLORS = {
    red: ["var(--red)", "var(--red-d)"],
    pink: ["var(--pink)", "#e07c95"],
  };

  const PHOTO_GRADIENTS = [
    ["--pink-2", "--peach"],
    ["--butter", "--peach"],
    ["--mint", "--butter"],
    ["--peach", "--pink"],
    ["--pink-soft", "--mint"],
    ["--butter", "--pink-2"],
  ];

  const CONFETTI_COLORS = ["--red", "--pink", "--pink-2", "--butter", "--red", "--peach"].map(cssVar);

  const el = {
    app: $("#app"),
    lock: $("#lock"),
    back: $("#backBtn"),
    restart: $("#restartBtn"),
    progress: $("#progress"),
    wipe: $("#wipe"),
    noBtn: $("#noBtn"),
    ask: $("#askText"),
    helloBear: $('[data-scene="hello"] .bear-slot'),
    gift: $("#gift"),
    giftBear: $("#giftBear"),
    giftHint: $("#giftHint"),
    giftNext: $("#giftNext"),
    photoInput: $("#photoInput"),
    card: $("#pcard"),
    photoCount: $("#pCount"),
    prevPhoto: $("#pPrev"),
    nextPhoto: $("#pNext"),
    env: $("#env"),
    envHint: $("#envHint"),
    mailTitle: $("#mailTitle"),
    letterCard: $("#letterCard"),
    letterNext: $("#letterNext"),
    cake: $("#cake"),
    cakeBear: $("#cakeBear"),
    blow: $("#blowBtn"),
    cakeNext: $("#cakeNext"),
  };

  const defaults = {
    ask: el.ask.textContent,
    giftHint: el.giftHint.textContent,
    envHint: el.envHint.textContent,
    mailTitle: el.mailTitle.textContent,
  };

  const scenes = $$(".scene");
  const confetti = createConfetti($("#fx"));

  let current = 0;
  let transitioning = false;
  let finaleTimers = [];
  let noCount = 0;
  let photoIndex = 0;
  let pendingPhoto = -1;
  let swipeStart = null;

  const escapeHtml = (text) =>
    text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  const centerOf = (node) => {
    const r = node.getBoundingClientRect();
    return [r.left + r.width / 2, r.top + r.height / 3];
  };

  const pointerOf = (e) => [e.clientX || innerWidth / 2, e.clientY || innerHeight / 2];

  function roseSvg(kind) {
    const [outer, inner] = ROSE_COLORS[kind] || ROSE_COLORS.red;
    return `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path class="lf" d="M24 44 q-18 2 -22 16 q16 2 22 -16z"/>
        <path class="lf" d="M40 44 q18 2 22 16 q-16 2 -22 -16z"/>
        <path class="petal-out" d="M32 52 C14 52 8 38 12 26 C15 16 24 12 32 12 C40 12 49 16 52 26 C56 38 50 52 32 52z" fill="${outer}"/>
        <path class="petal-out" d="M32 44 C22 44 17 36 19 28 C21 21 27 19 32 19 C37 19 43 21 45 28 C47 36 42 44 32 44z" fill="${inner}" stroke-width="2.4"/>
        <path class="curl" d="M32 30 m-3 1 a3.5 3.5 0 1 1 6.5 -1 a7 7 0 1 1 -12 -4"/>
        <path class="curl" d="M15 34 q6 9 17 10 M49 34 q-4 8 -11 10"/>
      </svg>`;
  }

  function setPose(slot, pose = "") {
    const svg = $("svg", slot);
    if (svg) svg.setAttribute("class", `bear ${pose}`.trim());
  }

  function decorate() {
    $$(".rose").forEach((rose) => {
      rose.innerHTML = roseSvg(rose.dataset.c);
    });

    $$(".bear-slot").forEach((slot) => {
      slot.innerHTML = BEAR;
      setPose(slot, slot.dataset.pose);
    });

    const floaties = $("#floaties");
    for (let i = 0; i < 16; i++) {
      const petal = document.createElement("span");
      if (i % 2) petal.className = "pk";
      petal.style.cssText = [
        `left:${Math.random() * 100}%`,
        `--s:${12 + Math.random() * 12}px`,
        `--t:${11 + Math.random() * 10}s`,
        `--dl:${-Math.random() * 22}s`,
        `--sw:${20 + Math.random() * 50}px`,
      ].join(";");
      floaties.append(petal);
    }
  }

  function fillContent() {
    $$(".nm").forEach((node) => {
      node.textContent = CONFIG.name;
    });
    $("#lockText").textContent = CONFIG.lockText;
    $("#giftNote").textContent = CONFIG.giftNote;
    $("#dearText").textContent = CONFIG.dear;
    $("#letterBody").textContent = CONFIG.letter;
    $("#signText").textContent = CONFIG.sign;
    $("#finalText").textContent = CONFIG.finalText;
    $("#finalFrom").textContent = `from ${CONFIG.from}`;
  }

  function createConfetti(canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let running = false;
    let dpr = 1;

    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
    }

    function spawn(x, y, index, power) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (3 + Math.random() * 8) * power;
      const roll = Math.random();

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5 * power,
        gravity: 0.2 + Math.random() * 0.1,
        w: 7 + Math.random() * 7,
        h: 5 + Math.random() * 5,
        rotation: Math.random() * 6,
        spin: (Math.random() - 0.5) * 0.3,
        color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
        life: 0,
        maxLife: 130 + Math.random() * 80,
        shape: roll < 0.3 ? "heart" : roll < 0.55 ? "petal" : "strip",
      };
    }

    function step(p) {
      p.life++;
      p.vx *= 0.985;
      p.vy = p.vy * 0.985 + p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.spin;
    }

    function draw(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, 1 - p.life / p.maxLife);
      ctx.fillStyle = p.color;

      if (p.shape === "heart") {
        ctx.font = `${p.w * 2.2}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText("♥", 0, 0);
      } else if (p.shape === "petal") {
        ctx.beginPath();
        ctx.ellipse(0, 0, p.w * 0.8, p.w * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.life / 8)));
      }

      ctx.restore();
    }

    function frame() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      particles = particles.filter((p) => p.life < p.maxLife && p.y < innerHeight + 40);
      particles.forEach((p) => {
        step(p);
        draw(p);
      });

      if (particles.length) {
        requestAnimationFrame(frame);
      } else {
        running = false;
        ctx.clearRect(0, 0, innerWidth, innerHeight);
      }
    }

    function burst(x, y, count = 120, power = 1) {
      const total = reduceMotion ? Math.ceil(count / 4) : count;
      for (let i = 0; i < total; i++) particles.push(spawn(x, y, i, power));

      if (!running) {
        running = true;
        requestAnimationFrame(frame);
      }
    }

    function rain(count = 120) {
      for (let i = 0; i < count; i++) {
        setTimeout(() => burst(Math.random() * innerWidth, -20, 1, 0.3), i * 14);
      }
    }

    resize();
    addEventListener("resize", resize);

    return { burst, rain };
  }

  function renderProgress() {
    el.progress.innerHTML = scenes.map(() => `<svg viewBox="0 0 24 24">${HEART_PATH}</svg>`).join("");
    scenes.forEach((scene) => {
      $$(".pop", scene).forEach((node, i) => node.style.setProperty("--d", `${0.08 + i * 0.09}s`));
    });
  }

  function updateProgress() {
    $$("svg", el.progress).forEach((heart, i) => {
      heart.classList.toggle("done", i <= current);
      heart.classList.toggle("now", i === current);
    });
    el.back.classList.toggle("off", current === 0);
  }

  function goTo(index, x = innerWidth / 2, y = innerHeight / 2) {
    if (transitioning || index === current || index < 0 || index >= scenes.length) return;

    transitioning = true;
    el.wipe.style.setProperty("--x", `${x}px`);
    el.wipe.style.setProperty("--y", `${y}px`);
    el.wipe.classList.add("cover");

    setTimeout(() => {
      swapScene(index);
      el.wipe.style.setProperty("--x", "50%");
      el.wipe.style.setProperty("--y", "50%");
      el.wipe.classList.remove("cover");
      setTimeout(() => {
        transitioning = false;
      }, 450);
    }, reduceMotion ? 50 : 650);
  }

  function replayScene(scene) {
    scene.classList.remove("active");
    void scene.offsetWidth;
    scene.classList.add("active");
  }

  function swapScene(index) {
    const prev = scenes[current];
    const next = scenes[index];

    prev.classList.remove("active");
    prev.hidden = true;
    current = index;

    if (index === 0) resetScenes();

    next.hidden = false;
    next.scrollTop = 0;
    replayScene(next);
    updateProgress();
    enterScene(next.dataset.scene);
  }

  function enterScene(name) {
    if (name === "photos") {
      photoIndex = 0;
      renderPhoto();
    }
    if (name === "finale") playFinale();
  }

  function playFinale() {
    finaleTimers.forEach(clearTimeout);
    finaleTimers = [
      setTimeout(() => {
        confetti.burst(innerWidth / 2, innerHeight / 3, 200, 1.2);
        confetti.rain(160);
      }, 500),
      setTimeout(() => confetti.rain(120), 3200),
    ];
  }

  function reveal(button, delay) {
    button.hidden = false;
    button.classList.add("pop");
    if (delay) button.style.setProperty("--d", delay);
  }

  function dodgeNo(e) {
    e.preventDefault();
    noCount++;

    const dx = (Math.random() > 0.5 ? 1 : -1) * (60 + Math.random() * 70);
    const dy = (Math.random() - 0.5) * 120;

    el.noBtn.style.setProperty("--nx", `${dx}px`);
    el.noBtn.style.setProperty("--ny", `${dy}px`);
    el.ask.textContent = CONFIG.noLines[Math.min(noCount, CONFIG.noLines.length) - 1];
    setPose(el.helloBear, "pout");
  }

  function openGift() {
    if (el.gift.classList.contains("open")) {
      confetti.burst(...centerOf(el.gift), 70);
      return;
    }
    if (el.gift.classList.contains("shake")) return;

    el.gift.classList.add("shake");
    setPose(el.giftBear, "wow");

    setTimeout(() => {
      el.gift.classList.replace("shake", "open");
      setPose(el.giftBear, "happy cheer bounce");
      el.giftHint.textContent = CONFIG.giftOpened;
      confetti.burst(...centerOf(el.gift), 170);
      setTimeout(() => confetti.rain(90), 300);
      reveal(el.giftNext);
    }, 450);
  }

  function photoMarkup(photo, index) {
    if (photo.src) {
      return `<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.caption)}">`;
    }

    const [from, to] = PHOTO_GRADIENTS[index % PHOTO_GRADIENTS.length];
    return `
      <button class="ph" style="--a:var(${from});--b:var(${to})" aria-label="Add a picture of ${escapeHtml(CONFIG.name)} ${index + 1}">
        <span class="ph-in">
          ${CAMERA_ICON}
          <strong>Myy's Photo ${index + 1}</strong>
          <span>tap to add her picture</span>
        </span>
      </button>`;
  }

  function renderPhoto() {
    const photo = CONFIG.photos[photoIndex];
    el.card.innerHTML = `
      <div class="pic">${photoMarkup(photo, photoIndex)}</div>
      <p class="pcap">${escapeHtml(photo.caption)}</p>`;
    el.photoCount.textContent = `${photoIndex + 1} / ${CONFIG.photos.length}`;
  }

  function flipPhoto(direction) {
    const total = CONFIG.photos.length;
    el.card.classList.add(direction > 0 ? "out-l" : "out-r");

    setTimeout(() => {
      photoIndex = (photoIndex + direction + total) % total;
      renderPhoto();
      el.card.classList.remove("out-l", "out-r");
      el.card.classList.add(direction > 0 ? "in-r" : "in-l");
      void el.card.offsetWidth;
      el.card.classList.remove("in-r", "in-l");
    }, reduceMotion ? 0 : 300);
  }

  function pickPhoto(e) {
    if (!e.target.closest(".ph")) return;
    pendingPhoto = photoIndex;
    el.photoInput.click();
  }

  function loadPhoto() {
    const file = el.photoInput.files && el.photoInput.files[0];
    if (!file || pendingPhoto < 0) return;

    const reader = new FileReader();
    reader.onload = () => {
      CONFIG.photos[pendingPhoto].src = reader.result;
      renderPhoto();
      el.photoInput.value = "";
    };
    reader.readAsDataURL(file);
  }

  function endSwipe(e) {
    if (swipeStart === null) return;
    const dx = e.clientX - swipeStart;
    swipeStart = null;
    if (Math.abs(dx) > 45) flipPhoto(dx < 0 ? 1 : -1);
  }

  function openLetter() {
    if (el.env.classList.contains("open")) return;

    el.env.classList.add("open");
    el.envHint.textContent = "";

    setTimeout(() => {
      el.env.classList.add("gone");

      setTimeout(() => {
        el.env.hidden = true;
        el.envHint.hidden = true;
        el.mailTitle.textContent = CONFIG.letterTitle;
        el.letterCard.hidden = false;
        reveal(el.letterNext, ".5s");
        confetti.burst(innerWidth / 2, innerHeight / 2, 50, 0.7);
      }, 450);
    }, 1400);
  }

  function blowCandles() {
    if (el.cake.classList.contains("out")) return;

    el.cake.classList.add("out");
    setPose(el.cakeBear, "happy cheer bounce");
    el.blow.hidden = true;

    setTimeout(() => {
      confetti.burst(...centerOf(el.cake), 200, 1.1);
      confetti.rain(140);
    }, 400);

    reveal(el.cakeNext, ".6s");
  }

  function resetScenes() {
    noCount = 0;
    el.noBtn.style.setProperty("--nx", "0px");
    el.noBtn.style.setProperty("--ny", "0px");
    el.ask.textContent = defaults.ask;
    setPose(el.helloBear, "wave");

    el.gift.classList.remove("open", "shake");
    setPose(el.giftBear);
    el.giftHint.textContent = defaults.giftHint;
    el.giftNext.hidden = true;

    el.env.classList.remove("open", "gone");
    el.env.hidden = false;
    el.envHint.hidden = false;
    el.envHint.textContent = defaults.envHint;
    el.mailTitle.textContent = defaults.mailTitle;
    el.letterCard.hidden = true;
    el.letterNext.hidden = true;

    el.cake.classList.remove("out");
    setPose(el.cakeBear, "wow");
    el.blow.hidden = false;
    el.cakeNext.hidden = true;
  }

  function lockUntil(date) {
    document.body.classList.add("locked");
    el.lock.hidden = false;

    const wait = date - Date.now();
    if (wait < 2 ** 31 - 1) setTimeout(unlock, wait);
  }

  function unlock() {
    document.body.classList.remove("locked");
    el.lock.hidden = true;
    replayScene(scenes[current]);
    confetti.burst(innerWidth / 2, innerHeight / 3, 160);
  }

  function bindEvents() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-next]")) goTo(current + 1, ...pointerOf(e));
    });
    el.back.addEventListener("click", (e) => goTo(current - 1, ...pointerOf(e)));
    el.restart.addEventListener("click", (e) => goTo(0, ...pointerOf(e)));

    el.noBtn.addEventListener("click", dodgeNo);
    el.noBtn.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse") dodgeNo(e);
    });

    el.gift.addEventListener("click", openGift);

    el.card.addEventListener("click", pickPhoto);
    el.card.addEventListener("pointerdown", (e) => {
      swipeStart = e.clientX;
    });
    el.card.addEventListener("pointerup", endSwipe);
    el.prevPhoto.addEventListener("click", () => flipPhoto(-1));
    el.nextPhoto.addEventListener("click", () => flipPhoto(1));
    el.photoInput.addEventListener("change", loadPhoto);

    document.addEventListener("keydown", (e) => {
      if (scenes[current].dataset.scene !== "photos") return;
      if (e.key === "ArrowRight") flipPhoto(1);
      if (e.key === "ArrowLeft") flipPhoto(-1);
    });

    el.env.addEventListener("click", openLetter);
    el.blow.addEventListener("click", blowCandles);
  }

  decorate();
  fillContent();
  renderProgress();
  updateProgress();
  renderPhoto();
  bindEvents();

  const unlockDate = new Date(CONFIG.unlockAt);
  if (Date.now() < unlockDate) lockUntil(unlockDate);
})();